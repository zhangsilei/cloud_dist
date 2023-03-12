<template>
  <div class="resource-manage-container">
    <categorie-tree class="categorie-tree-wrap" />

    <div class="resource-wrap">
      <n-space class="filter">
        <n-form-item label-placement="left" label="关键字">
          <n-input v-model:value="resource.query.key" clearable></n-input>
        </n-form-item>
        <n-form-item label-placement="left">
          <n-button type="primary" @click="query"> 查询 </n-button>
        </n-form-item>
        <n-form-item label-placement="left">
          <n-button @click="reset"> 重置 </n-button>
        </n-form-item>
      </n-space>

      <n-space v-if="isVideo || isPhoto" class="action">
        <n-button type="primary" @click="onClickUpload">
          {{ resource.title }}
        </n-button>
      </n-space>

      <div class="content">
        <n-empty
          v-if="!resource.dataList.length"
          description="暂无数据"
          style="margin-top: 100px; flex: 1"
        ></n-empty>
        <n-grid v-else :x-gap="8" :y-gap="8" :cols="8" style="margin-top: 10px">
          <n-grid-item v-for="(item, index) in resource.dataList" :key="index">
            <video-card
              :id="item.id"
              :is-like="item.is_like"
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
          v-model:page="resource.query.page_num"
          :item-count="resource.total"
          :on-update:page="changePage"
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
        <n-form-item v-if="isVideo" label="视频" path="video_url">
          <n-upload directory-dnd @change="onUpload">
            <n-upload-dragger>
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <CameraOutline />
                </n-icon>
              </div>
              <n-text style="font-size: 14px"> 添加视频 </n-text>
              <!-- <n-p depth="3" style="margin: 8px 0 0 0">
                （图片大小不超过100M）
              </n-p> -->
            </n-upload-dragger>
          </n-upload>
        </n-form-item>
        <n-form-item v-if="isPhoto" label="图片" path="picture_url">
          <n-upload directory-dnd @change="onUpload">
            <n-upload-dragger>
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <add />
                </n-icon>
              </div>
              <n-text style="font-size: 16px"> 上传图片 </n-text>
              <!-- <n-p depth="3" style="margin: 8px 0 0 0">
                （图片大小不超过1M）
              </n-p> -->
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
          <n-form-item label-placement="left" label="最后修改">
            <div>{{ detail.updated_time }}</div>
          </n-form-item>
        </div>
      </div>
    </popup-window>
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
import { ref, reactive, onMounted, watch, computed } from 'vue';
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
  getBreadcrumbCategory,
  resourceSortEnum,
  resourceTypeEnum,
  formatDate,
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

// 筛选查询
function query() {
  renderResources();
}

function reset() {
  resource.query.key = null;
}

// 上传按钮
const isVideo = computed(
  () => resource.query.resource_type === resourceTypeEnum.VIDEOS
);
const isPhoto = computed(
  () => resource.query.resource_type === resourceTypeEnum.PHOTOS
);

function onClickUpload() {
  resource.formData.category_id = selectedCategory.value;
  resource.formData.resource_type = resource.query.resource_type;
  resource.isShow = true;
}

// 上传资源
const uplodFile = ref(null);
const resourceRef = ref(null);
const resource = reactive({
  loading: false,
  isShow: false,
  title: null,
  dataList: [],
  total: 0,
  query: {
    page_num: 1,
    page_size: 10,
    category_id: null,
    key: null,
    order_by: resourceSortEnum.DEFAULT,
    resource_type: null,
    // order_type: '',
  },
  resource_id: null,
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
  if (isVideo.value) {
    postVideo(file).then(({ picture_url, video_url }) => {
      resource.formData.picture_url = picture_url;
      resource.formData.video_url = video_url;
      uplodFile.value.percentage = 100;
      setTimeout(() => {
        uplodFile.value.status = 'finished';
      }, 0);
    });
  }
  if (isPhoto.value) {
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

function onResourceConfirm() {
  resourceRef.value
    ?.validate(async (errors) => {
      if (!errors) {
        if (!resource.resource_id) {
          await createResource(resource.formData);
        } else {
          await updateResource(resource.resource_id, resource.formData);
        }
        resource.isShow = false;
        message.success('操作成功！');
        renderResources();
      }
    })
    .catch();
}

// 资源列表
async function renderResources() {
  resource.loading = true;
  const res = await getResourceList(resource.query);
  resource.dataList = res.resources || [];
  resource.total = res.total;
  resource.loading = false;
}

function changePage(page) {
  resource.query.page_num = page;
  renderResources();
}

const selectedCategory = ref(null);
const breadcrumbCategory = ref([]);

watch(store.state, (val) => {
  const dirType = val.selectedCategory.dirType;
  const id = dirType
    ? val.selectedCategory.category_id
    : val.selectedCategory.id;
  const typeMap = {
    [resourceTypeEnum.VIDEOS]: '上传视频',
    [resourceTypeEnum.PHOTOS]: '上传图片',
  };

  selectedCategory.value = id;
  breadcrumbCategory.value = getBreadcrumbCategory(val.allCategories, id);

  resource.title = typeMap[dirType];
  resource.formData.category_id = id;
  resource.formData.resource_type = dirType;
  resource.query.category_id = id;
  resource.query.resource_type = dirType;

  if (dirType !== undefined) {
    renderResources();
  } else {
    resource.dataList = [];
  }
});

// 资源详情
const detail = reactive({
  isShow: false,
  picture_url: '',
  name: '',
  created_time: '',
  updated_time: '',
  breadcrumbCategory: [],
});

function editRes(item) {
  resource.resource_id = item.id;
  resource.formData.category_id = item.category_id;
  resource.formData.name = item.name;
  resource.formData.description = item.description;
  resource.formData.picture_url = item.picture_url;
  resource.formData.video_url = item.video_url;
  resource.formData.resource_type = item.resource_type;
  resource.isShow = true;
}
async function detailResource(item) {
  const res = await getResourceDetail(item.id);
  detail.picture_url = parseUrlToPath(res.picture_url);
  detail.name = res.name;
  detail.created_time = formatDate(res.created_time);
  detail.updated_time = formatDate(res.updated_time);
  detail.breadcrumbCategory = getBreadcrumbCategory(
    store.state.allCategories,
    store.state.selectedCategory
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
