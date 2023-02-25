<template>
  <div class="resource-container">
    <div class="top">
      <div v-if="isShowResource" class="back" @click="back">
        <n-icon><ArrowBackIosFilled /></n-icon>
        <div>返回</div>
      </div>

      <n-breadcrumb separator=">">
        <n-breadcrumb-item v-for="(item, index) in breadcrumbCategory">
          {{ item }}
        </n-breadcrumb-item>
      </n-breadcrumb>

      <template v-if="isShowResource">
        <n-input round clearable placeholder="Search" v-model:value="query.key">
          <template #prefix>
            <n-icon :component="IosSearch" />
          </template>
        </n-input>
        <n-button @click="renderResources" style="margin-left: 10px"
          >查询</n-button
        >
      </template>
    </div>

    <div v-if="isShowResource" class="sort">
      <n-space>
        <span class="label">排序方式</span>
        <n-tag
          size="small"
          round
          :color="isDefault ? activeStyle : undefined"
          @click="sort(SORT_TYPE_DEFAULT)"
        >
          默认
        </n-tag>
        <n-tag
          size="small"
          round
          :color="isPorpular ? activeStyle : undefined"
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
              :file-name="item"
              @click="renderResources(item)"
            ></dir-card>
          </n-grid-item>
        </template>
        <n-grid-item v-for="(item, index) in state.dataList" :key="index">
          <video-card
            :file-name="item.name"
            :like-num="item.like_num"
            :poster="parseUrlToPath(item.picture_url)"
            :authority="!item.authority"
            @on-detail="detailResource(item)"
            @click.native="goToDetailPage(item)"
          ></video-card>
        </n-grid-item>
      </n-grid>
      <n-pagination
        style="justify-content: flex-end"
        v-model:page="query.page_num"
        :page-count="pageCount"
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
import { parseUrlToPath } from '@/common/global';
import PopupWindow from '@/components/pc/PopupWindow';
import moment from 'moment';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const FAVORITE_DIR_KEY = 'Favorite';
const MY_FAVORITE_DIR_KEY = 'MyFavorite';
const VIDEOS_DIR_KEY = 'Videos';
const PHOTOS_DIR_KEY = 'Photos';

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
const state = reactive({
  fileNames: ['Videos', 'Photos'],
  breadcrumbs: [],
  dataList: [],
});
const isShowDir = ref(false);
const isShowResource = ref(false);
const isDefault = computed(() => query.order_by === SORT_TYPE_DEFAULT);
const isPorpular = computed(() => query.order_by === SORT_TYPE_POPULAR);

const activeStyle = { textColor: '#ed3939', borderColor: '#ed3939' };
const selectedCategory = ref(null);
const breadcrumbCategory = ref([]);

function sort(type) {
  query.order_by = type;
  renderResources();
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

async function renderResources(type) {
  query.category_id = selectedCategory.value;
  if (type === 'Videos') {
    query.resource_type = 1;
  } else if (type === 'Photos') {
    query.resource_type = 2;
  }
  const res = await getResourceList(query);
  state.dataList = res.resources || [];
  pageCount.value =
    res.total % query.page_size
      ? res.total / query.page_size
      : res.total / query.page_size + 1;

  isShowDir.value = false;
  isShowResource.value = true;
  // loading.value = false;
}

watch(store.state, (val) => {
  let id = val.selectedCategory.dirType
    ? val.selectedCategory.category_id
    : val.selectedCategory.id;
  selectedCategory.value = id;
  breadcrumbCategory.value = getBreadcrumbCategory(val.allCategories, id);
  isShowDir.value = val.selectedCategory.dirType;
  if (val.selectedCategory.dirType) {
    if (
      val.selectedCategory.dirType === FAVORITE_DIR_KEY ||
      val.selectedCategory.dirType === MY_FAVORITE_DIR_KEY
    ) {
      state.dataList = [];
      isShowResource.value = false;
    } else if (val.selectedCategory.dirType === VIDEOS_DIR_KEY) {
      isShowDir.value = false;
      isShowResource.value = true;
      renderResources('Videos');
    } else if (val.selectedCategory.dirType === PHOTOS_DIR_KEY) {
      isShowDir.value = false;
      isShowResource.value = true;
      renderResources('Photos');
    }
  }
});

function back() {
  state.dataList = [];
  isShowDir.value = true;
  isShowResource.value = false;
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
  detail.created_time = moment(res.created_time * 1000).format(
    'YYYY-MM-DD HH:mm:ss'
  );
  detail.updated_time = moment(res.updated_time * 1000).format(
    'YYYY-MM-DD HH:mm:ss'
  );
  detail.isShow = true;
}

function goToDetailPage(item) {
  router.push({
    path: '/resource/detail',
    query: {
      ...query,
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

<style lang="scss">
.n-breadcrumb {
  padding: 0;
  margin-right: 50px;
}
.n-input {
  max-width: 300px;
}
.n-tag {
  cursor: pointer;
}
</style>
