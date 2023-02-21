<template>
  <div class="categorie-tree-container">
    <!-- <n-menu
      v-model:value="activeKey"
      :options="menuOptions"
      style="text-align: left"
    /> -->
    <n-spin :show="loading">
      <n-space v-if="dataList" vertical :size="12">
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
          <n-input v-model:value="categorie.formData.description" />
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
import { onlyAllowNumber } from '@/common/global';
import { EllipsisHorizontalSharp } from '@vicons/ionicons5';
import { isUser, isAdmin } from '@/common/global';
import { useStore } from 'vuex';

const store = useStore();
const { message } = createDiscreteApi(['message']);

const CREATE_CATEGORIE = 0;
const CREATE_CHILD_CATEGORIE = 1;
const EDIT_CATEGORIE = 2;
const DELETE_CATEGORIE = 3;

let loading = ref(true);
let selectedRow = ref(null);
let dataList = ref(null);
let optionType = ref('');
let defaultSelectedKeys = reactive([]);
let defaultExpandedKeys = reactive([]);

renderTree();

async function renderTree() {
  const res = await getCategorieList();
  loading.value = false;
  dataList.value = res.items || [];
  if (dataList.value.length) {
    defaultSelectedKeys.push(dataList.value[0].id);
    defaultExpandedKeys.push(dataList.value[0].id);
    store.commit('SET_SELECTED_CATEGORY', dataList.value[0].id);
    store.commit('SET_ALL_CATEGORIES', dataList.value);
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
      parent_category_id: pidMap[optionType],
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
      parent_category_id: selectedRow.id,
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
}

function onCategorieConfirm() {
  const optionMap = {
    [CREATE_CATEGORIE]: addCat,
    [CREATE_CHILD_CATEGORIE]: addCat,
    [EDIT_CATEGORIE]: editCat,
  };
  return optionMap[optionType]();
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
          label: '新建分区',
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
        optionType = key;
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
  store.commit('SET_SELECTED_CATEGORY', keys[0]);
}
</script>

<style lang="scss" scoped>
.categorie-tree-container {
  text-align: left;
}
</style>

<!-- <script>
import { h, ref } from 'vue';
import { NMenu, NIcon, NDropdown } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { EllipsisHorizontalSharp } from '@vicons/ionicons5';
import { isAdmin , onlyAllowNumber, isUser} from '@/common/global';
import { getCategorieList , updateCategorie, deleteCategorie} from '@/api/categories';

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default {
  components: { NMenu, NDropdown },
  name: 'CategorieTree',
  async setup() {
    const res = await getCategorieList();
    // const menuOptions = res.item

    return {
      activeKey: ref(null),
      menuOptions: [
        {
          label: () =>
            h('div', { class: 'nav-item' }, [
              h('div', null, 'Game'),
              isAdmin()
                ? h(
                    NDropdown,
                    {
                      placement: 'bottom-start',
                      options: [
                        {
                          label: '新建分区',
                          key: '1',
                        },
                        {
                          label: '新建下级分区',
                          key: '2',
                        },
                        {
                          label: '编辑',
                          key: '3',
                        },
                      ],
                    },
                    renderIcon(EllipsisHorizontalSharp)
                  )
                : null,
            ]),
          key: 'Game',
          children: [
            {
              label: 'Mobile game',
              key: 'Mobile game',
              children: [
                {
                  label: 'game1',
                  key: 'game1',
                  children: [
                    {
                      label: 'xxxx',
                      key: 'xxxx',
                      children: [
                        {
                          label: 'aaaaa',
                          key: 'aaaaa',
                          children: [
                            {
                              label: 'bbbb',
                              key: 'bbbb',
                            },
                            {
                              label: 'Favorite',
                              key: 'Favorite',
                            },
                            {
                              label: 'Videos',
                              key: 'Videos',
                            },
                            {
                              label: 'Photos',
                              key: 'Photos',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Favorite',
                      key: 'Favorite',
                    },
                    {
                      label: 'Videos',
                      key: 'Videos',
                    },
                    {
                      label: 'Photos',
                      key: 'Photos',
                    },
                  ],
                },
                {
                  label: 'Favorite',
                  key: 'Favorite',
                },
                {
                  label: 'Videos',
                  key: 'Videos',
                },
                {
                  label: 'Photos',
                  key: 'Photos',
                },
              ],
            },
            {
              label: 'Favorite',
              key: 'Favorite',
            },
            {
              label: 'Videos',
              key: 'Videos',
            },
            {
              label: 'Photos',
              key: 'Photos',
            },
          ],
        },
        {
          label: 'Moutain',
          key: 'Moutain',
          children: [],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.categorie-tree-container {
  background: #fff;
  border-right: 1px solid #ddd;
}
</style>

<style lang="scss">
.n-menu .n-submenu .n-menu-item-content {
  display: flex;
  & > .n-menu-item-content-header {
    display: flex;
    order: 2;
    width: 100%;
    & > .nav-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
  & > .n-menu-item-content__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 1;
    margin-right: 15px;
  }
}
</style> -->
