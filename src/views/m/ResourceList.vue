<template>
  <div class="resource-list-container">
    <!-- 头部导航 -->
    <page-header :title="title" @back="goBack">
      <template #extra>
        <n-icon
          :component="IosSearch"
          size="20"
          depth="3"
          style="vertical-align: middle"
        />
      </template>
    </page-header>

    <!-- 子分区列表 -->
    <div v-if="showChildCategory" class="child-category-list">
      <div
        class="item"
        v-for="item in categoryList"
        @click="navigateToList(item)"
      >
        <img class="poster" :src="parseUrlToPath(item.picture_url)" />
        <div>{{ item.name }}</div>
      </div>
    </div>

    <!-- <div class="category">
      <n-tag
        v-for="item in checkList"
        size="small"
        round
        :color="selectedTag.id === item.id ? activeStyle : undefined"
        @click="selectCatogry(item)"
      >
        Game1
      </n-tag>
    </div> -->

    <!-- 排序标签 -->
    <n-space>
      <n-tag
        v-for="item in tags"
        size="small"
        round
        checkable
        :checked="sort === item.key"
        @update:checked="onTagChecked(item)"
      >
        {{ item.label }}
      </n-tag>
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
            v-for="row in resourceList"
            class="poster-card-wrap"
            justify="space-between"
            align="center"
            :wrap="false"
          >
            <n-space>
              <div class="poster">
                <n-image
                  preview-disabled
                  width="50"
                  :src="parseUrlToPath(row.picture_url)"
                />
                <n-icon
                  v-if="row.resource_type === 'VIDEO'"
                  class="icon"
                  size="15"
                  color="#fff"
                  :component="SmartDisplayFilled"
                />
              </div>
              <div>
                <div class="name">{{ row.name }}</div>
                <div class="time">{{ formatDate(row.created_time) }}</div>
              </div>
            </n-space>
            <n-space :size="5">
              <n-icon
                v-if="row.like_time"
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
        </n-tab-pane>

        <!-- <n-tab-pane
          v-for="item in categoryList"
          :name="item.name"
          :tab="item.name"
          @click="navigateToDetail(item)"
        >
          <template v-if="item.type === 0">
            <n-image
              v-for="_item in item.items"
              preview-disabled
              width="50"
              class="poster"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
          </template>
          <template v-else-if="item.type === 1">
            <div class="poster-card-wrap">
              <video controls>
                <source
                  src="https://www.runoob.com/try/demo_source/movie.mp4"
                  type="video/mp4"
                />
                您的浏览器不支持Video标签。
              </video>
              <div class="info-wrap">
                <div class="name">Mario.mp4</div>
                <div class="time">15:30:25 | 2.43M</div>
                <div class="like">
                  <n-icon
                    size="20"
                    v-if="item.isLike.value"
                    color="red"
                    @click="unlike(item)"
                  >
                    <Heart />
                  </n-icon>
                  <n-icon size="20" v-else @click="like(item)">
                    <HeartOutline />
                  </n-icon>
                  <div>1988</div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="item.type === 2">
            <n-image
              v-for="_item in item.items"
              preview-disabled
              width="50"
              class="poster"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
          </template>
        </n-tab-pane> -->
      </n-tabs>
    </div>
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
} from 'naive-ui';
import { ref, reactive, onMounted, computed } from 'vue';
import { stringify } from 'qs';
import { Heart, HeartOutline } from '@vicons/ionicons5';
import { postLike, deleteLike } from '@/api/like';
import { getResourceList } from '@/api/resource';
import { MdCash, IosSearch } from '@vicons/ionicons4';
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
  RESOURCE_TYPE_VIDEO,
  POPULAR_CATEGORY_KEY,
  DIR_FAVORITE_KEY,
  DIR_MY_FAVORITE_KEY,
  parseUrlToPath,
  formatDate,
} from '@/common/global';
import PageHeader from '@/components/m/PageHeader';
import { getCategorieList } from '@/api/categories';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
const router = useRouter();

// 头部导航
const title = route.query.name;

function goBack() {
  router.push('/m/resource');
}

// 子分区列表
const category = route.query.category_id;
const categoryList = ref([]);

async function renderCategoryList() {
  // TODO: mock picture_url
  const a = store.state.selectedCategory.items.map((item) => {
    return {
      ...item,
      picture_url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
    };
  });
  categoryList.value = a;
  // categoryList.value = store.state.selectedCategory.items;
}

renderCategoryList();
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
const sort = ref(DEFAULT_SORT_KEY);
const tags = [
  {
    key: DEFAULT_SORT_KEY,
    label: DEFAULT_SORT_LABEL,
  },
  {
    key: POPULAR_SORT_KEY,
    label: POPULAR_SORT_LABEL,
  },
];
function onTagChecked(item) {
  if (item.key !== sort.value) {
    sort.value = item.key;
  }
}

// 目录标签页
const tabs = [
  { key: 'VIDEO', label: DIR_VIDEOS_LABEL },
  { key: 'PICTURE', label: DIR_PHOTOS_LABEL },
];
const tabHeight = ref(0);

const showChildCategory = computed(() => {
  return category != DIR_MY_FAVORITE_KEY && category != DIR_FAVORITE_KEY;
});

function onTabChange(val) {
  query.resource_type = val;
  renderResourceList();
}

onMounted(() => {
  tabHeight.value =
    document.body.offsetHeight - (showChildCategory.value ? 220 : 130) + 'px';
});

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
const query = reactive({
  page_size: 10,
  page_num: 1,
  category_id: category,
  key: null,
  order_by: sort.value,
  resource_type: 'VIDEO',
  // order_type: '',
});

async function renderResourceList() {
  const res = await getResourceList(query);
  resourceList.value = res.resources || [];
}

renderResourceList();

function navigateToDetail(item) {
  router.push({
    path: '/m/resource/detail',
    query: {
      list: stringify(item),
    },
  });
}

async function like(item) {
  try {
    await postLike({
      resource_id: item.id,
    });
    item.like_time = 1;
  } catch (e) {}
}

async function unlike(item) {
  await deleteLike({
    resource_id: item.id,
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
