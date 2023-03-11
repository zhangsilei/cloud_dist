<template>
  <div class="categorie-tree-container">
    <n-spin :show="loading">
      <n-space v-if="dataList && dataList.length" vertical :size="12">
        <n-input v-if="isAdmin()" v-model:value="pattern" placeholder="搜索" />
        <n-tree
          :show-irrelevant-nodes="false"
          :pattern="pattern"
          :data="dataList"
          :render-suffix="renderOptions"
          :default-selected-keys="defaultSelectedKeys"
          :default-expanded-keys="defaultExpandedKeys"
          :expand-on-click="true"
          @update:selected-keys="onSelectHandle"
          @update:expanded-keys="onExpandedHandle"
          children-field="items"
          key-field="id"
          label-field="name"
          block-line
        />
      </n-space>
      <n-empty v-else description="暂无分区数据">
        <template #extra>
          <n-button size="small" @click="categorie.isShow = true">
            新建分区
          </n-button>
        </template>
      </n-empty>
    </n-spin>

    <popup-window
      v-model="categorie.isShow"
      :title="categorie.title"
      @on-confirm="onCategorieConfirm"
    >
      <n-form
        ref="categorieRef"
        :model="categorie.formData"
        :rules="categorie.rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="分区名称" path="name">
          <n-input v-model:value="categorie.formData.name" />
        </n-form-item>
        <n-form-item label="分区描述" path="description">
          <editor
            v-if="!selectedRow.parent_category_id"
            :html="categorie.formData.description"
            @onChange="onEditorChange"
          />
          <n-input v-else v-model:value="categorie.formData.description" />
        </n-form-item>
        <n-form-item label="排序" path="seq">
          <n-input
            v-model:value="categorie.formData.seq"
            :allow-input="onlyAllowNumber"
          />
        </n-form-item>
      </n-form>
    </popup-window>
  </div>
</template>

<script setup>
import {
  createDiscreteApi,
  NSpin,
  NEmpty,
  NButton,
  NForm,
  NFormItem,
  NInput,
  NTree,
  NSpace,
  NIcon,
  NDropdown,
} from 'naive-ui';
import { ref, reactive, watch, computed, h, onMounted } from 'vue';
import {
  getCategorieList,
  createCategorie,
  updateCategorie,
  deleteCategorie,
} from '@/api/categories';
import PopupWindow from '@/components/pc/PopupWindow';
import { EllipsisHorizontalSharp } from '@vicons/ionicons5';
import {
  isUser,
  isAdmin,
  onlyAllowNumber,
  resourceTypeEnum,
  popularCategoryEnum,
  favoriteTypeEnum,
  getDefaultExpandedKeys,
} from '@/common/global';
import { useStore } from 'vuex';
import { getSelectedCategory } from '@/common/cookie';
import Editor from '@/components/pc/Editor';

const store = useStore();
const { message } = createDiscreteApi(['message']);

const CREATE_CATEGORIE = 0;
const CREATE_CHILD_CATEGORIE = 1;
const EDIT_CATEGORIE = 2;
const DELETE_CATEGORIE = 3;
const FAVORITE_DIR_KEY = 'Favorite';
const MY_FAVORITE_DIR_KEY = 'MyFavorite';
const VIDEOS_DIR_KEY = 'Videos';
const PHOTOS_DIR_KEY = 'Photos';

let loading = ref(true);
let selectedRow = ref(null);
let dataList = ref(null);
let optionType = ref(CREATE_CATEGORIE);
let defaultSelectedKeys = reactive([]);
let defaultExpandedKeys = reactive([]);

renderTree();

async function renderTree() {
  const res = await getCategorieList();
  const items = res.items || [];
  loading.value = false;
  // 默认popular为第一个一级分区
  if (isUser()) {
    items.unshift({
      id: popularCategoryEnum.POPULAR,
      name: popularCategoryEnum.getDesc('POPULAR'),
      parent_category_id: 0,
      items: [
        {
          id: favoriteTypeEnum.MY_FAVORITE,
          name: favoriteTypeEnum.getDesc('MY_FAVORITE'),
          parent_category_id: popularCategoryEnum.POPULAR,
        },
        {
          id: favoriteTypeEnum.FAVORITE,
          name: favoriteTypeEnum.getDesc('FAVORITE'),
          parent_category_id: popularCategoryEnum.POPULAR,
        },
      ],
    });
  }
  // 为每个非一级分区插入Videos、Photos标签
  function insertDir(categoryList) {
    const photosDesc = resourceTypeEnum.getDesc('PHOTOS');
    const videosDesc = resourceTypeEnum.getDesc('VIDEOS');

    for (let i = 0; i < categoryList.length; i++) {
      const item = categoryList[i];
      const isNotFirstLevel = item.parent_category_id;
      const isNotPopular =
        item.parent_category_id !== popularCategoryEnum.POPULAR;

      if (item.items && item.items instanceof Array) {
        if (isNotFirstLevel && isNotPopular) {
          item.items.unshift({
            id: photosDesc + item.id,
            name: photosDesc,
            category_id: item.id,
            dirType: resourceTypeEnum.PHOTOS,
            parent_category_id: item.id,
          });
          item.items.unshift({
            id: videosDesc + item.id,
            name: videosDesc,
            category_id: item.id,
            dirType: resourceTypeEnum.VIDEOS,
            parent_category_id: item.id,
          });
        }
        insertDir(item.items);
      }
    }
  }
  insertDir(items);

  dataList.value = items;
  if (items.length) {
    const localCategory = getSelectedCategory();
    const defaultCategory = localCategory || items[0];
    const categoryChain = getDefaultExpandedKeys(items, defaultCategory.id);

    defaultSelectedKeys.push(defaultCategory.id);
    categoryChain.forEach((item) => defaultExpandedKeys.push(item));
    // defaultExpandedKeys.push(defaultCategory.id);
    store.commit('SET_SELECTED_CATEGORY', defaultCategory);
    store.commit('SET_ALL_CATEGORIES', items);
  }
}

const categorieRef = ref(null);
const categorie = reactive({
  isShow: false,
  title: '创建分区',
  formData: ref({
    name: null,
    description: null,
    // icon: null,
    // parent_category_id: null,
    seq: null,
  }),
  rules: {
    name: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入分区名称',
    },
    description: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入分区描述',
    },
    seq: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入排序',
    },
  },
});

function checkForm() {
  return new Promise((resolve, reject) => {
    categorieRef.value
      ?.validate((errors) => {
        if (!errors) {
          resolve();
        }
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function addCat() {
  checkForm().then(async () => {
    const pidMap = {
      [CREATE_CATEGORIE]: selectedRow.parent_category_id || 0,
      [CREATE_CHILD_CATEGORIE]: selectedRow.id,
    };
    await createCategorie({
      ...categorie.formData,
      seq: parseInt(categorie.formData.seq),
      parent_category_id: pidMap[optionType.value],
    });
    renderTree();
    categorie.isShow = false;
    message.success('操作成功！');
  });
}

function editCat() {
  checkForm().then(async () => {
    await updateCategorie(selectedRow.id, {
      ...categorie.formData,
      seq: parseInt(categorie.formData.seq),
      parent_category_id:
        selectedRow.parent_category_id == 0 ? 0 : selectedRow.id,
    });
    renderTree();
    categorie.isShow = false;
    message.success('操作成功！');
  });
}

async function delCat() {
  await deleteCategorie(selectedRow.id);
  renderTree();
  message.success('操作成功！');
  optionType.value = CREATE_CATEGORIE;
}

function onCategorieConfirm() {
  const optionMap = {
    [CREATE_CATEGORIE]: addCat,
    [CREATE_CHILD_CATEGORIE]: addCat,
    [EDIT_CATEGORIE]: editCat,
  };
  return optionMap[optionType.value]();
}

watch(
  () => categorie.isShow,
  (val) => {
    if (!val) {
      for (const key in categorie.formData) {
        if (Object.hasOwnProperty.call(categorie.formData, key)) {
          categorie.formData[key] = null;
        }
      }
    }
  }
);

const pattern = ref('');

function renderOptions({ option }) {
  if (isUser()) return h(null);

  const iconAttrs = {
    style: {
      width: '22px',
      height: '22px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  const renderIcon = (icon, attrs) => {
    return () => h(NIcon, attrs, { default: () => h(icon) });
  };

  // option 可以拿到row信息
  return h(
    NDropdown,
    {
      placement: 'bottom-start',
      options: [
        {
          label: '新建同级分区',
          key: CREATE_CATEGORIE,
        },
        {
          label: '新建下级分区',
          key: CREATE_CHILD_CATEGORIE,
        },
        {
          label: '编辑',
          key: EDIT_CATEGORIE,
        },
        {
          label: '删除',
          key: DELETE_CATEGORIE,
        },
      ],
      onSelect: (key, { label }) => {
        optionType.value = key;
        selectedRow = option;
        if (key === DELETE_CATEGORIE) {
          delCat();
        } else {
          if (key === EDIT_CATEGORIE) {
            categorie.formData = {
              name: option.name,
              description: option.description,
              seq: option.seq.toString(),
            };
          }
          categorie.title = label;
          categorie.isShow = true;
        }
      },
    },
    renderIcon(EllipsisHorizontalSharp, iconAttrs)
  );
}

function onSelectHandle(keys, option, meta) {
  store.commit('SET_SELECTED_CATEGORY', meta.node);
}

function onEditorChange(html) {
  categorie.formData.description = html;
}

// function onExpandedHandle(keys, option, meta) {
//   if (meta.action === 'filter') return;

//   const hasDir = meta.node.items.some((item) => item.dirType);
//   const photosDesc = resourceTypeEnum.getDescFromValue(resourceTypeEnum.PHOTOS);
//   const videosDesc = resourceTypeEnum.getDescFromValue(resourceTypeEnum.VIDEOS);

//   if (!hasDir && meta.node.parent_category_id) {
//     meta.node.items.unshift({
//       id: photosDesc + meta.node.id,
//       name: photosDesc,
//       category_id: meta.node.id,
//       dirType: resourceTypeEnum.PHOTOS,
//       items: null,
//       parent_category_id: meta.node.id,
//     });
//     meta.node.items.unshift({
//       id: videosDesc + meta.node.id,
//       name: videosDesc,
//       category_id: meta.node.id,
//       dirType: resourceTypeEnum.VIDEOS,
//       items: null,
//       parent_category_id: meta.node.id,
//     });
//   }
// }
</script>

<style lang="scss" scoped>
.categorie-tree-container {
  text-align: left;
}
</style>
