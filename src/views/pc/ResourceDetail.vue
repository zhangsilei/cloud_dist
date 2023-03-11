<template>
  <div class="res-detail-container">
    <div class="header">
      <div class="title">
        <div class="name">{{ state.resName }}</div>
        <div>{{ state.resCurrentNum }}/{{ state.resTotalNums }}个文件</div>
      </div>
      <n-icon class="close-btn" size="20" @click="goToResourcePage">
        <close class="close-icon" />
      </n-icon>
    </div>

    <div class="content">
      <swiper
        :navigation="true"
        :modules="modules"
        class="res-swiper"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="res-item" v-for="item in state.dataList">
          <template v-if="item.resource_type === 'VIDEO'">
            <video
              :id="'video' + item.id"
              class="res"
              muted
              controls
              controlsList="nodownload"
            >
              <!-- <source
                :src="parseUrlToPath(item.video_url)"
                type="application/x-mpegURL"
              /> -->
            </video>
          </template>
          <template v-else>
            <img :id="'picture' + item.id" :src="parseUrlToPath(item.picture_url)" style="width;: 100%" />
            <!-- <n-image :src="parseUrlToPath(item.picture_url)" lazy /> -->
          </template>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, nextTick } from 'vue';
import { Close } from '@vicons/ionicons5';
import { NIcon, NImage } from 'naive-ui';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';
import { useRoute, useRouter } from 'vue-router';
import { getResourceList } from '@/api/resource';
import {
  RESOURCE_TYPE_VIDEO,
  RESOURCE_TYPE_PICTURE,
  parseUrlToPath,
} from '@/common/global';
import Hls from 'hls.js';

const route = useRoute();
const router = useRouter();

const state = reactive({
  dataList: [],
  resCurrentNum: 0,
  resTotalNums: 0,
  resName: '',
  currentRes: ref(null),
});

async function renderResources() {
  const res = await getResourceList(route.query);
  const dataList = res.resources || [];
  state.dataList = dataList;
  state.resTotalNums = res.total;
  dataList.find((item, index) => {
    if (item.id == route.query.currentId) {
      state.resCurrentNum = index + 1;
      state.resName = item.name;
      state.currentRes = item;
    }
  });
}

renderResources();

function play() {
  if (Hls.isSupported()) {
    const instance = new Hls();
    const video = document.querySelector(
      `#${'video' + state.currentRes.id}`
    );
    instance.loadSource(parseUrlToPath(state.currentRes.video_url));
    instance.attachMedia(video);
    video.play();
  } else {
    console.warn('当前浏览器不支持Hls.js');
  }
}

// function setPictureStyle(item) {
//   const el = document.querySelector('picture' + item.id);
//   debugger;
// }

watch(
  () => state.currentRes,
  (val) => {
    if (val.resource_type === 'VIDEO') {
      nextTick(() => {
        play();
      });
    }
  }
);

const modules = [Navigation];
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = (swiper) => {
  state.resCurrentNum = swiper.realIndex + 1;
  console.log('slide change');
};

function goToResourcePage() {
  router.push({
    path: '/resource',
    query: {
      reload: true
    }
  });
}
</script>

<style lang="scss" scoped>
$headerHeight: 45px;
.res-detail-container {
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #999;
    height: $headerHeight;
    color: #fff;
    .title {
      text-align: center;
      .name {
        font-weight: bold;
      }
    }
    .close-btn {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      .close-icon {
        cursor: pointer;
      }
    }
  }
  .content {
    height: calc(100% - $headerHeight);
    background: #000;
    .res-swiper {
      height: 100%;
      .res-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        .res {
          height: 100%;
        }
      }
    }
  }
}
</style>
