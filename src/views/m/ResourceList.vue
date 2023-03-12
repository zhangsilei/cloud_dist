<template>
  <div class="resource-list-container">
    <!-- 头部搜索 -->
    <div class="search-wrap" v-if="isFromSearch">
      <n-input
        v-model:value="query.key"
        autofocus
        round
        placeholder="搜索"
        :on-input="search"
      >
        <template #prefix v-if="!isFromFavorite">
          <n-icon :component="IosSearch" />
        </template>
      </n-input>
    </div>

    <!-- 头部导航 -->
    <page-header v-if="!isFromSearch" :title="title" @back="goBack">
      <template #extra v-if="!isFromFavorite">
        <n-icon
          :component="IosSearch"
          size="20"
          depth="3"
          style="vertical-align: middle"
          @click="navigateToList"
        />
      </template>
    </page-header>

    <!-- 子分区列表 -->
    <div v-if="!isFromFavorite && !isFromSearch" class="child-category-list">
      <div
        class="item"
        v-for="item in categoryList"
        @click="navigateToList(item)"
      >
        <img class="poster" :src="parseUrlToPath(item.icon)" />
        <div>{{ item.name }}</div>
      </div>
    </div>

    <!-- 排序标签 -->
    <n-space v-if="!isFromSearch" justify="space-between">
      <div>
        <n-tag
          v-for="item in tags"
          size="small"
          round
          checkable
          style="margin-right: 5px"
          :checked="order_by === item.key"
          @update:checked="onSortChange(item)"
        >
          {{ item.label }}
        </n-tag>
      </div>
      <!-- <n-checkbox v-model:checked="purchased"> purchased </n-checkbox> -->
    </n-space>

    <!-- 目录标签页 -->
    <div class="tabs-wrap">
      <n-tabs
        :pane-style="{ height: tabHeight, overflowY: 'scroll' }"
        :default-value="'VIDEO'"
        animated
        :on-update:value="onTabChange"
      >
        <n-tab-pane v-for="item in tabs" :name="item.key" :tab="item.label">
          <n-space
            v-for="(row, index) in resourceList"
            class="poster-card-wrap"
            justify="space-between"
            align="center"
            :wrap="false"
          >
            <n-space align="center" @click="onClickResource(row, index)">
              <div class="poster">
                <n-image
                  preview-disabled
                  width="100"
                  height="80"
                  :src="parseUrlToPath(row.picture_url)"
                />
                <n-icon
                  v-if="row.resource_type === 'VIDEO'"
                  class="icon"
                  size="15"
                  color="#999"
                  :component="SmartDisplayFilled"
                />
                <div class="mask" v-if="!row.has_permissions">
                  <n-icon
                    class="icon"
                    size="15"
                    color="#fff"
                    :component="LockClosedOutline"
                  />
                </div>
              </div>
              <div>
                <div class="name">{{ row.name }}</div>
                <div class="time">{{ formatDate(row.created_time) }}</div>
              </div>
            </n-space>
            <n-space :size="5">
              <n-icon
                v-if="row.is_like"
                size="20"
                color="red"
                :component="Heart"
                @click="unlike(row)"
              />
              <n-icon
                v-else
                size="20"
                :component="HeartOutline"
                @click="like(row)"
              />
              <div>{{ row.like_num }}</div>
            </n-space>
          </n-space>
          <n-space v-if="loading" justify="center">
            <n-spin size="small" />
          </n-space>
        </n-tab-pane>
      </n-tabs>
    </div>

    <!-- 激活码弹窗 -->
    <n-modal v-model:show="showModal" :auto-focus="false">
      <div class="modal-wrap" :style="modalStyle">
        <n-space align="center">
          <n-icon
            :component="ChevronBack"
            color="#fff"
            size="20"
            style="vertical-align: middle"
            @click="showModal = false"
          />
          <div>{{ selectedResource.name }}</div>
        </n-space>
        <n-space :style="modalContentStyle" vertical justify="center">
          <div>无权查看</div>
          <div>请输入激活码或联系客服购买，联系方式（tg）：XXXXX</div>
          <n-space vertical style="margin-top: 30px">
            <n-button
              color="rgb(237, 56, 56)"
              style="width: 100%"
              @click="goToActivationPage"
            >
              输入激活码
            </n-button>
            <n-button
              :id="copyBtnId"
              color="#fff"
              style="width: 100%; color: #000"
              :data-clipboard-text="contactPhone"
              @click="copyContact"
            >
              复制联系方式
            </n-button>
          </n-space>
        </n-space>
      </div>
    </n-modal>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import {
  NTag,
  NInput,
  NAvatar,
  NIcon,
  NImage,
  NTabs,
  NTabPane,
  NPageHeader,
  NGrid,
  NGi,
  NStatistic,
  NSpace,
  NCheckbox,
  NModal,
  NCard,
  NButton,
  NSpin,
} from 'naive-ui';
import { ref, reactive, onMounted, computed, watch, nextTick } from 'vue';
import { stringify } from 'qs';
import { Heart, HeartOutline } from '@vicons/ionicons5';
import { postLike, deleteLike, getLikeList } from '@/api/like';
import { getResourceList } from '@/api/resource';
import { MdCash, IosSearch } from '@vicons/ionicons4';
import { LockClosedOutline, ChevronBack } from '@vicons/ionicons5';
import { SmartDisplayFilled } from '@vicons/material';
import {
  DIR_VIDEOS_KEY,
  DIR_VIDEOS_LABEL,
  DIR_PHOTOS_KEY,
  DIR_PHOTOS_LABEL,
  DEFAULT_SORT_KEY,
  DEFAULT_SORT_LABEL,
  POPULAR_SORT_KEY,
  POPULAR_SORT_LABEL,
  parseUrlToPath,
  formatDate,
  filterTableMater,
  favoriteTypeEnum,
} from '@/common/global';
import PageHeader from '@/components/m/PageHeader';
import { getCategorieList } from '@/api/categories';
import { useStore } from 'vuex';
import Clipboard from 'clipboard';

const store = useStore();
const route = useRoute();
const router = useRouter();

// 头部导航
const title = ref(null);

function goBack() {
  router.push('/m/resource');
}

// 子分区列表
const category = ref(null);
const categoryList = ref([]);

async function renderCategoryList() {
  const res = await getCategorieList();
  const dataList = filterTableMater(parseInt(category.value), res.items || []);
  categoryList.value = dataList.items;
}

const isFromSearch = ref(false);
const isFromFavorite = ref(false);

function init() {
  if (route.query.isFromSearch) {
    isFromSearch.value = true;
  } else if (route.query.isFromFavorite) {
    title.value = favoriteTypeEnum.getDescFromValue(route.query.category_id);
    categoryList.value = [];
    resourceList.value = [];
    isFromFavorite.value = true;
    renderFavoriteList().then(() => setTabHeight());
  } else {
    title.value = route.query.name;
    category.value = route.query.category_id;
    categoryList.value = [];
    resourceList.value = [];
    isFromSearch.value = false;
    isFromFavorite.value = false;
    renderCategoryList().then(() => setTabHeight());
    renderResourceList();
  }
}

function setTabHeight() {
  tabHeight.value =
    document.body.offsetHeight - (categoryList.value.length ? 220 : 140) + 'px';
}

const order_by = ref('');

const likeParams = reactive({
  page_num: 1,
  page_size: 10,
  resource_type: 'VIDEO',
  favorite_type: route.query.category_id,
});

async function renderFavoriteList() {
  loading.value = true;
  const res = await getLikeList(likeParams);
  const dataList = (res.likes || []).map((item) => {
    return {
      ...item.resource,
      is_like: item.is_like,
      has_permissions: item.has_permissions,
    };
  });
  if (route.query.isFromSearch) {
    resourceList.value = dataList;
  } else {
    resourceList.value.push(...dataList);
  }
  total.value = res.total;
  loading.value = false;
}

onMounted(() => {
  addScrollListener();
});

const isScrollBottom = ref(false);

watch(isScrollBottom, (val) => {
  if (val) {
    if (route.query.isFromFavorite) {
      if (resourceList.value.length < total.value) {
        likeParams.page_num++;
        renderFavoriteList();
      }
    } else {
      if (resourceList.value.length < total.value) {
        query.page_num++;
        renderResourceList();
      }
    }
  }
});

function addScrollListener() {
  document.querySelector('.n-tab-pane').addEventListener('scroll', (e) => {
    // console.log(e,'滚动条滚动触发')
    var scrollTop = e.target.scrollTop;
    var windowHeight = e.target.clientHeight;
    var scrollHeight = e.target.scrollHeight;
    if (scrollTop + windowHeight == scrollHeight) {
      // 当前滚动条已经触底
      isScrollBottom.value = true;
    } else {
      isScrollBottom.value = false;
    }
  });
}

// const tabs = ref(null);
// const dataList = ref(null);
// const categoryParams = reactive({
//   // TODO: 500
//   // category_id: route.query.category_id,
// });

// async function renderTabs() {
//   const res = await getResourceList(categoryParams);
// }

// renderTabs();

// 排序标签
let tags = ref([]);

if (route.query.isFromFavorite) {
  tags.value.push({
    key: DEFAULT_SORT_KEY,
    label: DEFAULT_SORT_LABEL,
  });
} else {
  tags.value.push(
    {
      key: DEFAULT_SORT_KEY,
      label: DEFAULT_SORT_LABEL,
    },
    {
      key: POPULAR_SORT_KEY,
      label: POPULAR_SORT_LABEL,
    }
  );
}

const purchased = ref(false);

function onSortChange(item) {
  if (item.key !== order_by.value) {
    order_by.value = item.key;
    if (route.query.isFromFavorite) {
      resourceList.value = [];
      likeParams.order_by = item.key;
      renderFavoriteList();
    } else {
      resourceList.value = [];
      query.order_by = item.key;
      renderResourceList();
    }
  }
}

// 目录标签页
const tabs = [
  { key: 'VIDEO', label: DIR_VIDEOS_LABEL },
  { key: 'PICTURE', label: DIR_PHOTOS_LABEL },
];
const tabHeight = ref(0);

// const showChildCategory = computed(() => {
//   return (
//     category.value != DIR_MY_FAVORITE_KEY && category.value != DIR_FAVORITE_KEY
//   );
// });

// const isFavorite = [
//   favoriteTypeEnum.MY_FAVORITE,
//   favoriteTypeEnum.FAVORITE,
// ].includes(route.query.category_id);

async function onTabChange(val) {
  resourceList.value = [];
  likeParams.page_num = 1;
  query.page_num = 1;
  if (route.query.isFromFavorite) {
    likeParams.resource_type = val;
    await renderFavoriteList();
  } else {
    query.resource_type = val;
    await renderResourceList();
  }
  setTimeout(() => {
    addScrollListener();
  }, 300);
}

let timer = null;

function search() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    query.category_id = route.query.category_id || 0;
    tabHeight.value = document.body.offsetHeight - 130 + 'px';
    renderResourceList();
  }, 300);
}

// onMounted(() => {
//   tabHeight.value =
//     document.body.offsetHeight - (categoryList.value.length ? 220 : 130) + 'px';
// });

// 资源列表

// const selectedTag = ref(null);
// const checkList = [
//   {
//     id: 0,
//   },
//   {
//     id: 1,
//   },
// ];
// selectedTag.value = checkList[0];

// const activeStyle = { textColor: '#ed3939', borderColor: '#ed3939' };

const resourceList = ref(null);
const total = ref(0);
const query = reactive({
  page_size: 10,
  page_num: 1,
  category_id: category.value,
  key: null,
  order_by: DEFAULT_SORT_KEY,
  resource_type: 'VIDEO',
  order_type: 'desc',
});
const loading = ref(false);

async function renderResourceList() {
  loading.value = true;
  const res = await getResourceList(query);
  if (route.query.isFromSearch) {
    resourceList.value = res.resources || [];
  } else {
    resourceList.value.push(...(res.resources || []));
  }
  total.value = res.total;
  loading.value = false;
}

init();

function navigateToDetail(item) {
  router.push({
    path: '/m/resource/detail',
    query: {
      ...item,
      ...(route.query.isFromFavorite ? likeParams : query),
      ...(route.query.isFromSearch ? { key: query.key } : null),
      total: total.value,
      isFromFavorite: route.query.isFromFavorite,
    },
  });
}

watch(
  () => route.query,
  (val) => {
    init();
  }
);

function navigateToList(item) {
  router.push({
    path: '/m/resource/list',
    query: item.items
      ? {
          category_id: item.id,
          name: item.name,
        }
      : { isFromSearch: true, category_id: route.query.category_id },
  });
}

async function like(item) {
  if (!item.is_like) {
    try {
      await postLike({
        resource_id: item.id,
      });
      item.is_like = true;
      item.like_num++;
    } catch (e) {}
  }
}

async function unlike(item) {
  if (item.is_like) {
    try {
      await deleteLike({
        resource_id: item.id,
      });
      item.is_like = false;
      item.like_num--;
    } catch (e) {}
  }
}

// 激活码弹窗
const selectedResource = ref(null);
const showModal = ref(false);
const modalStyle = {
  width: '100%',
  height: document.body.offsetHeight + 'px',
  padding: '10px',
  backgroundColor: 'rgb(51,51,51)',
  color: '#fff',
  textAlign: 'center',
  boxSizing: 'border-box',
};
const modalContentStyle = {
  width: '70%',
  margin: '17% auto 0',
};
const contactPhone = 'xxxx';
const copyBtnId = 'copyBtn';
let clipboard = null;

function onClickResource(row, index) {
  selectedResource.value = row;
  if (row.has_permissions) {
    navigateToDetail(row, index);
  } else {
    showModal.value = true;
  }
}

function goToActivationPage() {
  router.push('/m/activation');
}

function copyContact() {
  initClipboard();
  clipboard.on('success', (e) => {
    console.log('copy succ');
    e.clearSelection();
    showModal.value = false;
  });
  clipboard.on('error', (e) => {
    console.log('copy fail');
  });
}

function initClipboard() {
  clipboard && clipboard.destroy();
  clipboard = null;
  clipboard = new Clipboard(`#${copyBtnId}`, {
    container: document.querySelector(`#${copyBtnId}`),
  });
}
</script>

<style lang="scss" scoped>
.resource-list-container {
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 0 10px 10px;
  background: #fff;
  box-sizing: border-box;
  text-align: left;
  display: flex;
  flex-direction: column;
  // .category {
  //   display: flex;
  //   flex-wrap: wrap;
  //   width: 100%;
  //   overflow-x: scroll;
  //   & > .n-tag {
  //     margin-bottom: 10px;
  //     margin-right: 10px;
  //   }
  // }
  .search-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    .user {
      margin-left: 10px;
      min-width: 34px;
    }
  }
  .tabs-wrap {
    flex: 1;
    .poster-card-wrap {
      color: #999;
      margin-bottom: 10px;
      .test {
        height: 100px;
      }
      .poster {
        position: relative;
        .icon {
          position: absolute;
          bottom: 5px;
          right: 5px;
        }
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #666;
          opacity: 0.7;
          .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      .name {
        color: #000;
        font-weight: bold;
      }
    }
  }
  .child-category-list {
    text-align: center;
    font-size: 13px;
    display: flex;
    overflow-x: scroll;
    margin: 10px 0;
    .item {
      margin-right: 20px;
      white-space: nowrap;
      &:last-child {
        margin-right: 0;
      }
      .poster {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}
</style>
<style></style>
