<template>
  <div class="resource-container">
    <!-- 头部搜索 -->
    <div class="search-wrap">
      <n-input round placeholder="搜索" :on-focus="onFocusSearch">
        <template #prefix>
          <n-icon :component="IosSearch" />
        </template>
      </n-input>
      <n-avatar class="user" round :src="userHeader" @click="navigateToUser" />
    </div>
    <!-- 一级分类标签 -->
    <div class="tags-wrap">
      <n-tag
        v-for="item in tags"
        size="small"
        round
        strong
        :color="selectedTag.id === item.id ? activeTagStyle : undefined"
        @click="changeTag(item)"
      >
        {{ item.name }}
      </n-tag>
    </div>
    <!-- 子分类列表 -->
    <template v-if="selectedTag">
      <n-spin
        v-if="selectedTag.has_permissions"
        class="list-wrap"
        :show="loading"
      >
        <n-grid x-gap="12" y-gap="12" :cols="4">
          <n-gi v-for="item in dataList" @click="onClickChildCategory(item)">
            <img class="poster" :src="parseUrlToPath(item.icon)" />
            <div>
              <n-ellipsis style="max-width: 75px">
                {{ item.name }}
              </n-ellipsis>
            </div>
          </n-gi>
        </n-grid>
      </n-spin>
      <div v-else>
        <div>
          <n-button color="rgb(237, 56, 56)" @click="goToActivationPage">
            输入激活码
          </n-button>
          <n-button
            :data-clipboard-text="contactPhone"
            :id="copyBtnId"
            style="margin-left: 15px"
            @click="copyContact"
          >
            联系客服
          </n-button>
        </div>
        <div v-html="selectedTag.description" style="margin-top: 15px"></div>
      </div>
    </template>
  </div>
</template>

<script setup>
import {
  createDiscreteApi,
  NTag,
  NInput,
  NAvatar,
  NIcon,
  NImage,
  NGrid,
  NGi,
  NSpin,
  NEllipsis,
  NButton,
} from 'naive-ui';
import { MdCash, IosSearch } from '@vicons/ionicons4';
import { ref, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
import { getCategorieList } from '@/api/categories';
import { getResourceList } from '@/api/resource';
import {
  DIR_MY_FAVORITE_LABEL,
  DIR_MY_FAVORITE_KEY,
  DIR_FAVORITE_KEY,
  DIR_FAVORITE_LABEL,
  POPULAR_CATEGORY_KEY,
  POPULAR_CATEGORY_VALUE,
  parseUrlToPath,
  favoriteTypeEnum,
} from '@/common/global';
import userHeader from '@/assets/header_user.png';
import myFavorite from '@/assets/my_favorite.png';
import favorite from '@/assets/my_favorite.png';
import { useStore } from 'vuex';
import Clipboard from 'clipboard';

const store = useStore();
const router = useRouter();
const { message } = createDiscreteApi(['message']);

// 头部搜索
function navigateToUser() {
  router.push('/m/profile');
}

// 分类标签
const tags = ref(null);
const selectedTag = ref(null);
const activeTagStyle = { textColor: '#ed3939', borderColor: '#ed3939' };

async function renderTags() {
  const res = await getCategorieList();
  const dataList = res.items || [];
  // 默认popular为第一个一级分区
  dataList.unshift({
    id: POPULAR_CATEGORY_KEY,
    name: POPULAR_CATEGORY_VALUE,
    has_permissions: true,
  });
  tags.value = dataList;
  selectedTag.value = dataList[0] || {};
}

function changeTag(item) {
  selectedTag.value = item;
  store.commit('SET_SELECTED_CATEGORY', item);
}

renderTags();

// 子分类列表
const loading = ref(false);
const dataList = ref([]);
const dataListParams = reactive({
  page_num: 1,
  page_size: 10,
  category_id: null,
});
const contactPhone = 'xxxx';
const copyBtnId = 'copyBtn';
let clipboard = null;

function copyContact() {
  initClipboard();
  clipboard.on('success', (e) => {
    console.log('copy succ');
    e.clearSelection();
    message.success('已复制联系方式');
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

async function renderList() {
  loading.value = true;
  dataList.value = [];
  if (selectedTag.value.id !== POPULAR_CATEGORY_KEY) {
    // const res = await getResourceList(dataListParams);
    // dataList.value = res.resources || [];
    dataList.value = selectedTag.value.items || [];
  } else {
    dataList.value = [
      {
        id: favoriteTypeEnum.MY_FAVORITE,
        name: favoriteTypeEnum.getDesc('MY_FAVORITE'),
        icon: myFavorite,
      },
      {
        id: favoriteTypeEnum.FAVORITE,
        name: favoriteTypeEnum.getDesc('FAVORITE'),
        icon: favorite,
      },
    ];
  }
  loading.value = false;
}

watch(selectedTag, (val) => {
  // dataListParams.category_id = val.id;
  renderList();
});

function onFocusSearch() {
  navigateToList({ isFromSearch: true });
}

function onClickChildCategory(item) {
  const isFavorite = [
    favoriteTypeEnum.MY_FAVORITE,
    favoriteTypeEnum.FAVORITE,
  ].includes(item.id);
  if (isFavorite) {
    navigateToList({ isFromFavorite: true, category_id: item.id });
  } else {
    navigateToList({ category_id: item.id, name: item.name });
  }
}

function navigateToList(query) {
  router.push({
    path: '/m/resource/list',
    query,
  });
}

function goToActivationPage() {
  router.push('/m/activation');
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
  text-align: left;
  display: flex;
  flex-direction: column;
  .search-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user {
      margin-left: 10px;
      min-width: 34px;
    }
  }
  .tags-wrap {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    // flex-wrap: wrap;
    width: 100%;
    overflow-x: scroll;
    & > .n-tag {
      margin-bottom: 10px;
      margin-right: 10px;
    }
  }
  .list-wrap {
    flex: 1;
    overflow-y: scroll;
    text-align: center;
    font-size: 13px;
    .poster {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .name {
      white-space: nowrap;
    }
  }
}
</style>
