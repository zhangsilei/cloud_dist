<template>
  <div class="resource-container">
    <div class="top">
      <!-- <div v-if="isShowResource" class="back" @click="back">
        <n-icon><ArrowBackIosFilled /></n-icon>
        <div>返回</div>
      </div> -->

      <n-breadcrumb separator=">" style="padding: 0">
        <n-breadcrumb-item v-for="(item, index) in breadcrumbCategory">
          {{ item }}
        </n-breadcrumb-item>
      </n-breadcrumb>

      <template v-if="isShowResource && !isFavorite">
        <n-input
          round
          clearable
          placeholder="Search"
          v-model:value="state.query.key"
          style="margin-left: 10px"
        >
          <template #prefix>
            <n-icon :component="IosSearch" />
          </template>
        </n-input>
        <n-button @click="query" style="margin-left: 10px"> 查询 </n-button>
      </template>
    </div>

    <div v-if="isShowResource" class="sort">
      <n-space>
        <span class="label">排序方式</span>
        <n-tag
          size="small"
          round
          :color="isDefault ? activeStyle : undefined"
          style="cursor: pointer"
          @click="sort(SORT_TYPE_DEFAULT)"
        >
          默认
        </n-tag>
        <n-tag
          v-if="!isFavorite"
          size="small"
          round
          :color="isPorpular ? activeStyle : undefined"
          style="cursor: pointer"
          @click="sort(SORT_TYPE_POPULAR)"
        >
          人气
        </n-tag>
      </n-space>
    </div>

    <div class="content">
      <n-grid :x-gap="8" :y-gap="8" :cols="8">
        <template v-if="isShowDir">
          <n-grid-item v-for="(item, index) in state.fileNames" :key="index">
            <dir-card
              :file-name="item.label"
              @click="onClickDir(item)"
            ></dir-card>
          </n-grid-item>
        </template>
        <n-grid-item v-for="(item, index) in state.dataList" :key="index">
          <video-card
            :id="item.id"
            :is-like="item.is_like"
            :file-name="item.name"
            :like-num="item.like_num"
            :poster="parseUrlToPath(item.picture_url)"
            :authority="item.has_permissions"
            @on-detail="detailResource(item)"
            @click.native="goToDetailPage(item)"
          ></video-card>
        </n-grid-item>
      </n-grid>
      <n-pagination
        v-if="!isShowDir"
        style="justify-content: flex-end"
        v-model:page="state.query.page_num"
        :item-count="state.total"
        :on-update:page="changePage"
      />
    </div>

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
  </div>
</template>

<script setup>
import {
  NBreadcrumb,
  NBreadcrumbItem,
  NIcon,
  NInput,
  NTag,
  NSpace,
  NGrid,
  NGridItem,
  NFormItem,
  NButton,
  NPagination,
} from 'naive-ui';
import { MdCash, IosSearch } from '@vicons/ionicons4';
import { ArrowBackIosFilled } from '@vicons/material';
import { reactive, computed, watch, ref } from 'vue';
import DirCard from '@/components/pc/DirCard';
import VideoCard from '@/components/pc/VideoCard';
import { useStore } from 'vuex';
import {
  getResourceList,
  createResource,
  getResourceDetail,
  deleteResource,
  updateResource,
} from '@/api/resource';
import {
  parseUrlToPath,
  getBreadcrumbCategory,
  popularCategoryEnum,
  favoriteTypeEnum,
  resourceSortEnum,
  resourceTypeEnum,
  POPULAR_CATEGORY_KEY,
  formatDate,
} from '@/common/global';
import PopupWindow from '@/components/pc/PopupWindow';
import moment from 'moment';
import { useRouter, useRoute } from 'vue-router';
import { getLikeList } from '@/api/like';

const store = useStore();
const router = useRouter();
const route = useRoute();

// 返回目录页
function back() {
  state.dataList = [];
  isShowDir.value = true;
  isShowResource.value = false;
}

// 筛选查询
function query() {
  if (isFavorite.value) {
    renderFavorite();
  } else {
    renderResources();
  }
}

// 排序方式
const isFavorite = ref(false);

function sort(type) {
  if (
    store.state.selectedCategory.id === favoriteTypeEnum.FAVORITE ||
    store.state.selectedCategory.id === favoriteTypeEnum.MY_FAVORITE
  )
    return;
  state.query.order_by = type;
  renderResources();
}

// 资源列表
const state = reactive({
  fileNames: [
    {
      label: resourceTypeEnum.getDescFromValue(resourceTypeEnum.VIDEOS),
      value: resourceTypeEnum.VIDEOS,
    },
    {
      label: resourceTypeEnum.getDescFromValue(resourceTypeEnum.PHOTOS),
      value: resourceTypeEnum.PHOTOS,
    },
  ],
  // breadcrumbs: [],
  loading: false,
  dataList: [],
  total: 0,
  query: {
    page_num: 1,
    page_size: 10,
    category_id: null,
    key: null,
    order_by: resourceSortEnum.DEFAULT,
    resource_type: null,
    order_type: 'desc',
  },
});

async function onClickDir(item) {
  breadcrumbCategory.value.push(item.label);
  state.query.resource_type = item.value;
  await renderFavorite();
  isShowResource.value = true;
  isShowDir.value = false;
}

async function renderResources() {
  // query.category_id = selectedCategory.value;
  // if (type === 'Videos') {
  //   query.resource_type = 1;
  // } else if (type === 'Photos') {
  //   query.resource_type = 2;
  // }
  state.dataList = [];
  state.loading = true;
  const res = await getResourceList(state.query);
  const dataList = res.resources || [];

  state.dataList = dataList;
  state.total = res.total;

  isShowDir.value = false;
  isShowResource.value = true;
  state.loading = false;
}

function changePage(page) {
  state.query.page_num = page;
  if (isFavorite.value) {
    renderFavorite();
  } else {
    renderResources();
  }
}

const FAVORITE_DIR_KEY = 'Favorite';
const MY_FAVORITE_DIR_KEY = 'MyFavorite';
const VIDEOS_DIR_KEY = 'Videos';
const PHOTOS_DIR_KEY = 'Photos';

const SORT_TYPE_DEFAULT = '';
const SORT_TYPE_POPULAR = 'like_num';
const pageCount = ref(null);
// const query = reactive({
//   page_num: 1,
//   page_size: 10,
//   category_id: null,
//   key: null,
//   order_by: SORT_TYPE_DEFAULT,
//   resource_type: null,
//   // order_type: '',
// });

const isShowResource = ref(false);
const isDefault = computed(() => state.query.order_by === SORT_TYPE_DEFAULT);
const isPorpular = computed(() => state.query.order_by === SORT_TYPE_POPULAR);

const activeStyle = { textColor: '#ed3939', borderColor: '#ed3939' };

const isShowDir = ref(false);
const selectedCategory = ref(null);
const breadcrumbCategory = ref([]);

function getBreadcrumb(allCategories, category_id) {
  switch (category_id) {
    case popularCategoryEnum.POPULAR:
      return [
        popularCategoryEnum.getDescFromValue(popularCategoryEnum.POPULAR),
      ];
    case favoriteTypeEnum.FAVORITE:
      return [
        popularCategoryEnum.getDescFromValue(popularCategoryEnum.POPULAR),
        favoriteTypeEnum.getDescFromValue(favoriteTypeEnum.FAVORITE),
      ];
    case favoriteTypeEnum.MY_FAVORITE:
      return [
        popularCategoryEnum.getDescFromValue(popularCategoryEnum.POPULAR),
        favoriteTypeEnum.getDescFromValue(favoriteTypeEnum.MY_FAVORITE),
      ];
    default:
      return getBreadcrumbCategory(allCategories, category_id);
  }
}

watch(
  () => store.state.selectedCategory,
  (val) => {
    state.query.page_num = 1;
    init(val, store.state.allCategories);
  }
);

if (route.params.reload) {
  init(store.state.selectedCategory, store.state.allCategories);
}

function init(selectedCategory, allCategories) {
  const dirType = selectedCategory.dirType;
  const id = dirType ? selectedCategory.category_id : selectedCategory.id;

  if (
    selectedCategory.id === favoriteTypeEnum.MY_FAVORITE ||
    selectedCategory.id === favoriteTypeEnum.FAVORITE
  ) {
    isShowDir.value = true;
    isFavorite.value = true;
  } else {
    isFavorite.value = false;
  }

  breadcrumbCategory.value = getBreadcrumb(allCategories, selectedCategory.id);
  selectedCategory.value = id;
  state.query.category_id = id;
  state.query.resource_type = dirType;

  if (dirType !== undefined) {
    isShowDir.value = false;
    renderResources();
  } else {
    state.dataList = [];
  }
}

async function renderFavorite() {
  state.dataList = [];
  state.loading = true;
  const res = await getLikeList({
    page_num: state.query.page_num,
    page_size: state.query.page_size,
    resource_type: state.query.resource_type,
    favorite_type: store.state.selectedCategory.id,
  });
  const dataList = (res.likes || []).map((item) => {
    return {
      ...item.resource,
      is_like: item.is_like,
      has_permissions: item.has_permissions,
    };
  });
  state.dataList = dataList;
  state.total = res.total;
  state.loading = false;
}

const detail = reactive({
  isShow: false,
  picture_url: '',
  name: '',
  created_time: '',
  updated_time: '',
  breadcrumbCategory: [],
});

async function detailResource(item) {
  const res = await getResourceDetail(item.id);
  detail.picture_url = parseUrlToPath(res.picture_url);
  detail.name = res.name;
  detail.breadcrumbCategory = getBreadcrumbCategory(
    store.state.allCategories,
    store.state.selectedCategory
  );
  detail.created_time = formatDate(res.created_time);
  detail.updated_time = formatDate(res.updated_time);
  detail.isShow = true;
}

function goToDetailPage(item) {
  if (!item.has_permissions) return;
  router.push({
    path: '/resource/detail',
    query: {
      ...state.query,
      currentId: item.id,
    },
  });
}
</script>

<style lang="scss" scoped>
.resource-container {
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  .top {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .back {
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-right: 20px;
      min-width: 50px;
    }
  }
  .sort {
    margin-top: 10px;
    .label {
      margin-right: 10px;
      margin-left: 5px;
      color: #7f7f7f;
      font-size: 13px;
    }
  }
  .content {
    margin-top: 10px;
  }
}
</style>
