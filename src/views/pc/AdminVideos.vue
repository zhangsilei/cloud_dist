<template>
  <div class="admin-videos-container">
    <div class="top">
      <n-breadcrumb separator=">">
        <n-breadcrumb-item> Game </n-breadcrumb-item>
        <n-breadcrumb-item> Mobile game </n-breadcrumb-item>
      </n-breadcrumb>
      <n-input round placeholder="Search">
        <template #prefix>
          <n-icon :component="IosSearch" />
        </template>
      </n-input>
    </div>

    <div class="sort">
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
        <n-grid-item v-for="(item, index) in state.fileNames" :key="index">
          <dir-card :file-name="item"></dir-card>
        </n-grid-item>
        <n-grid-item v-for="(item, index) in state.dataList" :key="index">
          <video-card
            :file-name="item.fileName"
            :like-num="item.likeNum"
            :authority="item.authority"
          ></video-card>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<script>
import {
  NBreadcrumb,
  NBreadcrumbItem,
  NIcon,
  NInput,
  NTag,
  NSpace,
  NGrid,
  NGridItem,
} from 'naive-ui';
import { MdCash, IosSearch } from '@vicons/ionicons4';
import { reactive } from 'vue';
import DirCard from '@/components/pc/DirCard';
import VideoCard from '@/components/pc/VideoCard';

const SORT_TYPE_DEFAULT = 0;
const SORT_TYPE_POPULAR = 1;

export default {
  components: {
    NBreadcrumb,
    NBreadcrumbItem,
    NIcon,
    MdCash,
    NInput,
    NTag,
    NSpace,
    NGrid,
    NGridItem,
    DirCard,
    VideoCard,
  },
  name: 'UserVideos',
  computed: {
    isDefault() {
      return this.state.sortType === SORT_TYPE_DEFAULT;
    },
    isPorpular() {
      return this.state.sortType === SORT_TYPE_POPULAR;
    },
    activeStyle() {
      return { textColor: '#ed3939', borderColor: '#ed3939' };
    },
  },
  setup() {
    const state = reactive({
      sortType: SORT_TYPE_DEFAULT,
      fileNames: ['Favorite', 'Videos', 'Photos'],
      dataList: [
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: false },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
        { likeNum: 10, fileName: 'xxxx.mp4', authority: true },
      ],
    });

    return {
      IosSearch,
      SORT_TYPE_DEFAULT,
      SORT_TYPE_POPULAR,
      state,
    };
  },
  methods: {
    sort(type) {
      this.state.sortType = type;
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-videos-container {
  background: #fff;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  .top {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
