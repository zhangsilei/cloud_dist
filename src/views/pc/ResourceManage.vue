<template>
  <div class="resource-manage-container">
    <categorie-tree class="categorie-tree-wrap" />

    <div class="resource-wrap">
      <n-space class="filter">
        <n-form-item label-placement="left" label="关键字">
          <n-input v-model:value="query.key" clearable></n-input>
        </n-form-item>
        <n-form-item label-placement="left">
          <n-button type="primary" @click="queryList"> 查询 </n-button>
        </n-form-item>
        <n-form-item label-placement="left">
          <n-button @click="reset"> 重置 </n-button>
        </n-form-item>
      </n-space>

      <n-space v-if="isShowResource" class="action">
        <n-button
          v-if="dirType === VIDEOS_DIR_KEY"
          type="primary"
          @click="onClickUpload(TYPE_VIDEO)"
        >
          上传视频
        </n-button>
        <n-button
          v-if="dirType === PHOTOS_DIR_KEY"
          type="primary"
          @click="onClickUpload(TYPE_IMAGE)"
        >
          上传图片
        </n-button>
      </n-space>

      <div class="content">
        <n-empty
          v-if="!dataList.length"
          description="暂无数据"
          style="margin-top: 100px; flex: 1"
        ></n-empty>
        <n-grid v-else :x-gap="8" :y-gap="8" :cols="8" style="margin-top: 10px">
          <n-grid-item v-for="(item, index) in dataList" :key="index">
            <video-card
              :id="item.id"
              :file-name="item.name"
              :like-num="item.like_num"
              :authority="true"
              :poster="parseUrlToPath(item.picture_url)"
              @on-edit="editRes(item)"
              @on-detail="detailResource(item)"
              @on-delete="deleteRes(item)"
            ></video-card>
          </n-grid-item>
        </n-grid>
        <n-pagination
          style="justify-content: flex-end"
          v-model:page="query.page_num"
          :page-count="pageCount"
        />
      </div>
    </div>

    <popup-window
      v-model="resource.isShow"
      :title="resource.title"
      @on-confirm="onResourceConfirm"
    >
      <n-form
        ref="resourceRef"
        :model="resource.formData"
        :rules="resource.rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="所在分区">
          <span v-for="(item, index) in breadcrumbCategory">
            {{ item }}
            <span v-if="index !== breadcrumbCategory.length - 1">/</span>
          </span>
        </n-form-item>
        <n-form-item label="名称" path="name">
          <n-input v-model:value="resource.formData.name" />
        </n-form-item>
        <n-form-item
          v-if="resource.type === TYPE_VIDEO"
          label="视频"
          path="video_url"
        >
          <n-upload directory-dnd @change="onUpload">
            <n-upload-dragger>
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <CameraOutline />
                </n-icon>
              </div>
              <n-text style="font-size: 14px"> 添加视频 </n-text>
              <n-p depth="3" style="margin: 8px 0 0 0">
                （图片大小不超过100M）
              </n-p>
            </n-upload-dragger>
          </n-upload>
        </n-form-item>
        <n-form-item
          v-if="dirType === PHOTOS_DIR_KEY"
          label="图片"
          path="picture_url"
        >
          <n-upload directory-dnd @change="onUpload">
            <n-upload-dragger>
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <add />
                </n-icon>
              </div>
              <n-text style="font-size: 16px"> 上传图片 </n-text>
              <n-p depth="3" style="margin: 8px 0 0 0">
                (图片大小不超过1M）
              </n-p>
            </n-upload-dragger>
          </n-upload>
        </n-form-item>
        <n-form-item label="描述" path="description">
          <n-input v-model:value="resource.formData.description" />
        </n-form-item>
      </n-form>
    </popup-window>

    <popup-window
      v-model="detail.isShow"
      title="详细信息"
      :isShowFooter="false"
    >
      <div style="display: flex">
        <div>
          <img
            style="width: 250px; margin-right: 15px"
            :src="detail.picture_url"
          />
        </div>
        <div>
          <n-form-item label-placement="left" label="名称">
            <div>{{ detail.name }}</div>
          </n-form-item>
          <n-form-item label-placement="left" label="位置">
            <span v-for="(item, index) in breadcrumbCategory">
              {{ item }}
              <span v-if="index !== breadcrumbCategory.length - 1">/</span>
            </span>
          </n-form-item>
          <n-form-item label-placement="left" label="上传时间">
            <div>{{ detail.created_time }}</div>
          </n-form-item>
          <n-form-item label-placement="left" label="最后修改时间">
            <div>{{ detail.updated_time }}</div>
          </n-form-item>
        </div>
      </div>
    </popup-window>

    <!-- <n-spin :show="loading">
      <n-space v-if="dataList.length" vertical size="large">
        <div class="filter">
          <n-input round placeholder="关键字">
            <template #prefix>
              <n-icon :component="IosSearch" />
            </template>
          </n-input>
          <n-button
            type="primary"
            attr-type="button"
            style="margin: 0 10px"
            @click="queryResource"
          >
            查询
          </n-button>
          <n-button attr-type="button" @click="reset"> 重置 </n-button>
        </div>

        <div class="action">
          <n-button
            type="primary"
            attr-type="button"
            @click="isShowUpload = true"
          >
            上传视频
          </n-button>
        </div>

        <div class="content">
          <n-grid :x-gap="8" :y-gap="8" :cols="8">
            <n-grid-item v-for="(item, index) in state.dataList" :key="index">
              <video-card
                :file-name="item.fileName"
                :like-num="item.likeNum"
                :authority="item.authority"
              ></video-card>
            </n-grid-item>
          </n-grid>
        </div>
      </n-space>
      <n-empty v-else class="empty-data" description="暂无分区数据">
        <template #extra>
          <n-button size="small" @click="addCategorie">新建分区</n-button>
        </template>
      </n-empty>
    </n-spin> -->

    <!-- <popup-window
      v-model="isShowCategorieAlert"
      title="创建分区"
      @on-confirm="addCategorie"
    >
      <n-form
        ref="categorieFormRef"
        :model="categorieFormData"
        :rules="rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="分区名称" path="name">
          <n-input
            v-model:value="categorieFormData.name"
            placeholder="请输入"
          />
        </n-form-item>
        <n-form-item label="分区描述" path="description">
          <n-input
            v-model:value="categorieFormData.description"
            placeholder="请输入"
          />
        </n-form-item>
      </n-form>
    </popup-window> -->
  </div>
</template>

<script setup>
import {
  createDiscreteApi,
  NBreadcrumb,
  NBreadcrumbItem,
  NIcon,
  NInput,
  NTag,
  NSpace,
  NGrid,
  NGridItem,
  NButton,
  NForm,
  NFormItem,
  NSpin,
  NEmpty,
  NUpload,
  NUploadDragger,
  NText,
  NP,
  NPagination,
  NImage,
  useDialog,
} from 'naive-ui';
import { ref, reactive, onMounted, watch } from 'vue';
import { CameraOutline, Add } from '@vicons/ionicons5';
import { Photo } from '@vicons/tabler';
import DirCard from '@/components/pc/DirCard';
import VideoCard from '@/components/pc/VideoCard';
import PopupWindow from '@/components/pc/PopupWindow';
import CategorieTree from '@/components/pc/CategorieTree';
import { getCategorieList } from '@/api/categories';
import { postVideo, postPicture } from '@/api/file';
import {
  onlyAllowNumber,
  RESOURCE_TYPE_VIDEO,
  RESOURCE_TYPE_PICTURE,
  parseUrlToPath,
} from '@/common/global';
import {
  getResourceList,
  createResource,
  getResourceDetail,
  deleteResource,
  updateResource,
} from '@/api/resource';
import { useStore } from 'vuex';
import moment from 'moment';

const store = useStore();
const { message, dialog } = createDiscreteApi(['message', 'dialog']);

const TYPE_VIDEO = 1;
const TYPE_IMAGE = 2;
const VIDEOS_DIR_KEY = 'Videos';
const PHOTOS_DIR_KEY = 'Photos';

const resourceRef = ref(null);
const resource = reactive({
  isShow: false,
  isEdit: false,
  title: '上传视频',
  type: null,
  formData: ref({
    category_id: null,
    resource_type: null,
    name: null,
    description: null,
    picture_url: null,
    video_url: null,
  }),
  rules: {
    name: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入名称',
    },
    video_url: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请上传资源',
    },
  },
});
const dataList = ref([]);
const loading = ref(true);
const selectedCategory = ref(null);
const breadcrumbCategory = ref([]);
const uplodFile = ref(null);

function onUpload({ file }) {
  uplodFile.value = file;
  file.status = 'uploading';
  file.percentage = 0;
  const timer = setInterval(() => {
    if (uplodFile.value.status === 'finished') {
      clearInterval(timer);
      return;
    }
    uplodFile.value.percentage += Math.random() * 30;
  }, 1000);
  if (dirType.value === VIDEOS_DIR_KEY) {
    postVideo(file).then(({ picture_url, video_url }) => {
      resource.formData.picture_url = picture_url;
      resource.formData.video_url = video_url;
      uplodFile.value.percentage = 100;
      setTimeout(() => {
        uplodFile.value.status = 'finished';
      }, 0);
    });
  } else if (dirType.value === PHOTOS_DIR_KEY) {
    postPicture(file).then(({ url }) => {
      resource.formData.picture_url = url;
      resource.formData.video_url = '';
      uplodFile.value.percentage = 100;
      setTimeout(() => {
        uplodFile.value.status = 'finished';
      }, 0);
    });
  }
}

const isLocal = location.hostname === 'localhost';

function onResourceConfirm() {
  resourceRef.value
    ?.validate(async (errors) => {
      if (!errors) {
        if (!resource.isEdit) {
          await createResource(resource.formData);
        } else {
          await updateResource(
            resource.formData.category_id,
            resource.formData
          );
        }
        resource.isShow = false;
        message.success('操作成功！');
        renderResources();
      }
    })
    .catch();
}

function onClickUpload(type) {
  resource.type = type;
  resource.isShow = true;
  resource.formData.resource_type = type;
  resource.isEdit = false;
}
const SORT_TYPE_DEFAULT = '';
const SORT_TYPE_POPULAR = 'like_num';
const pageCount = ref(null);
const query = reactive({
  page_num: 1,
  page_size: 10,
  category_id: null,
  key: null,
  order_by: SORT_TYPE_DEFAULT,
  resource_type: null,
  // order_type: '',
});

function queryList() {
  renderResources();
}

function reset() {}

async function renderResources(type) {
  query.category_id = selectedCategory.value.id;
  if (type === 'Videos') {
    query.resource_type = 1;
  } else if (type === 'Photos') {
    query.resource_type = 2;
  }
  const res = await getResourceList(query);
  dataList.value = res.resources || [];
  pageCount.value =
    res.total % query.page_size
      ? res.total / query.page_size
      : res.total / query.page_size + 1;
  loading.value = false;
}

function filterTableMater(id, arr) {
  const queue = [...arr];
  while (queue.length) {
    const o = queue.shift();
    if (o.id === id) return o;
    queue.push(...(o.items || []));
  }
}

function getBreadcrumbCategory(arr, id, result = []) {
  const re = filterTableMater(id, arr);
  if (!re) return result;
  result.unshift(re.name);
  if (re.parent_category_id) {
    return getBreadcrumbCategory(arr, re.parent_category_id, result);
  }
  return result;
}

const dirType = ref(null);

watch(store.state, (val) => {
  let id = val.selectedCategory.dirType
    ? val.selectedCategory.category_id
    : val.selectedCategory.id;
  selectedCategory.value = id;
  breadcrumbCategory.value = getBreadcrumbCategory(val.allCategories, id);
  resource.formData.category_id = id;
  query.category_id = id;
  isShowResource.value = val.selectedCategory.dirType;
  dirType.value = val.selectedCategory.dirType;
  if (val.selectedCategory.dirType) {
    if (val.selectedCategory.dirType === VIDEOS_DIR_KEY) {
      renderResources('Videos');
    } else if (val.selectedCategory.dirType === PHOTOS_DIR_KEY) {
      renderResources('Photos');
    }
  } else {
    dataList.value = [];
  }
});

watch(
  () => resource.isShow,
  (val) => {
    if (!val) {
      for (const key in resource.formData) {
        if (Object.hasOwnProperty.call(resource.formData, key)) {
          resource.formData[key] = null;
        }
      }
    }
  }
);

const detail = reactive({
  isShow: false,
  picture_url: '',
  name: '',
  created_time: '',
  updated_time: '',
  breadcrumbCategory: [],
});

function editRes(item) {
  resource.formData.category_id = item.id;
  resource.formData.name = item.name;
  resource.formData.picture_url = item.picture_url;
  resource.formData.video_url = item.video_url;
  resource.formData.resource_type = item.resource_type;
  resource.type = item.resource_type;
  resource.isShow = true;
  resource.isEdit = true;
}
async function detailResource(item) {
  const res = await getResourceDetail(item.id);
  detail.picture_url = parseUrlToPath(res.picture_url);
  detail.name = res.name;
  detail.breadcrumbCategory = getBreadcrumbCategory(
    store.state.allCategories,
    store.state.selectedCategory
  );
  detail.created_time = moment(res.created_time * 1000).format(
    'YYYY-MM-DD HH:mm:ss'
  );
  detail.updated_time = moment(res.updated_time * 1000).format(
    'YYYY-MM-DD HH:mm:ss'
  );
  detail.isShow = true;
}
function deleteRes(item) {
  dialog.warning({
    content: '确认删除资源？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: async () => {
      await deleteResource(item.id);
      message.success('操作成功！');
      renderResources();
    },
    onNegativeClick: () => {},
  });
}

const isShowResource = ref(false);
</script>

<style lang="scss" scoped>
.resource-manage-container {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  .categorie-tree-wrap {
    min-width: 200px;
    border-right: 1px solid #eee;
  }
  .resource-wrap {
    padding-left: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .empty-data {
    margin-top: 50%;
    transform: translateY(-50%);
  }
  .filter {
    // display: flex;
    // justify-content: flex-start;
    // align-items: center;
  }

  .action {
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
