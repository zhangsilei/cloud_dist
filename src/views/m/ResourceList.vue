<template>
  <div class="resource-list-container">
    <!-- 头部导航 -->
    <n-page-header :title="title" @back="goBack"></n-page-header>

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

    <!-- 目录标签页 -->
    <div class="tabs-wrap">
      <n-tabs type="line" default-value="Videos" animated>
        <n-tab-pane
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
            <div class="video-wrap">
              <video controls>
                <source
                  src="https://www.runoob.com/try/demo_source/movie.mp4"
                  type="video/mp4"
                />
                您的浏览器不支持Video标签。
              </video>
              <div class="video-info">
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
        </n-tab-pane>
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
} from 'naive-ui';
import { ref, reactive } from 'vue';
import { stringify } from 'qs';
import { Heart, HeartOutline } from '@vicons/ionicons5';
import { postLike, deleteLike } from '@/api/like';
import { getResourceList } from '@/api/resource';

const route = useRoute();
const router = useRouter();

// 头部导航
const title = route.query.name;

function goBack() {
  router.push('/m/resource');
}

// 目录标签页
const tabs = ref(null);
const dataList = ref(null);
const categoryParams = reactive({
  // TODO: 500
  // category_id: route.query.category_id,
});

async function renderTabs() {
  const res = await getResourceList(categoryParams);
}

renderTabs();

// 资源列表

const selectedTag = ref(null);
const checkList = [
  {
    id: 0,
  },
  {
    id: 1,
  },
];
selectedTag.value = checkList[0];

const activeStyle = { textColor: '#ed3939', borderColor: '#ed3939' };

const categoryList = [
  {
    isLike: ref(false),
    id: 0,
    type: 0,
    name: 'Favorite',
    items: [
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
    ],
  },
  {
    isLike: ref(false),
    id: 1,
    type: 1,
    name: 'Videos',
    items: [
      {
        id: 10,
        url: 'https://www.runoob.com/try/demo_source/movie.mp4',
      },
      {
        id: 10,
        url: 'https://www.runoob.com/try/demo_source/movie.mp4',
      },
      {
        id: 10,
        url: 'https://www.runoob.com/try/demo_source/movie.mp4',
      },
      {
        id: 10,
        url: 'https://www.runoob.com/try/demo_source/movie.mp4',
      },
      {
        id: 10,
        url: 'https://www.runoob.com/try/demo_source/movie.mp4',
      },
    ],
  },
  {
    isLike: ref(false),
    id: 2,
    type: 2,
    name: 'Photos',
    items: [
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
      {
        id: 10,
        url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      },
    ],
  },
];

function navigateToDetail(item) {
  router.push({
    path: '/m/resource/detail',
    query: {
      list: stringify(item),
    },
  });
}

async function like(item) {
  item.isLike = true;
  // await postLike({
  //   resource_id: item.resource_id,
  // });
}

async function unlike(item) {
  await deleteLike({
    resource_id: item.resource_id,
  });
}
</script>

<style lang="scss" scoped>
.resource-list-container {
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 10px;
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
    .video-wrap {
      display: flex;
      video {
        width: 50%;
      }
      .video-info {
        flex: 1;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .name {
          font-weight: bold;
        }
        .time,
        .like {
          color: #999;
        }
        .like {
          display: flex;
          align-items: center;
        }
      }
    }
  }
  .poster {
    margin-right: 6px;
    margin-bottom: 6px;
    width: 18%;
  }
}
</style>
<style>
.n-page-header {
  height: auto;
  margin-bottom: 15px;
}
.n-tabs {
  height: 100%;
}
</style>
