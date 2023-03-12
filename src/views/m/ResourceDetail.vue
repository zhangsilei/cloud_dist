<template>
  <div class="resource-detail-container">
    <n-page-header :title="title" @back="handleBack">
      <template #extra>
        <n-space v-if="currentResource">
          <n-icon
            v-if="currentResource.is_like"
            color="red"
            size="20"
            @click="unlike"
          >
            <Heart />
          </n-icon>
          <n-icon v-else size="20" @click="like">
            <HeartOutline />
          </n-icon>
        </n-space>
      </template>
    </n-page-header>

    <swiper
      v-if="currentResource"
      :direction="'vertical'"
      class="mySwiper"
      @swiper="onSwiper"
      @slideChange="onSourceChange"
    >
      <swiper-slide v-for="item in dataList">
        <template v-if="item.resource_type === 'VIDEO'">
          <video
            :id="'video' + item.id"
            muted
            controls
            controlsList="nodownload"
            style="width: 100%"
          ></video>
        </template>
        <template v-else>
          <img
            :src="parseUrlToPath(item.picture_url)"
            style="width: auto; height: 100%"
          />
          <!-- <n-image :src="parseUrlToPath(item.picture_url)" lazy /> -->
        </template>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
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
import { computed, ref, nextTick, watch, onMounted } from 'vue';
import { Heart, HeartOutline } from '@vicons/ionicons5';
import { postLike, deleteLike } from '@/api/like';
import { useRouter, useRoute } from 'vue-router';
import { parse } from 'qs';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import { getResourceList } from '@/api/resource';
import { getLikeList } from '@/api/like';
import { parseUrlToPath } from '@/common/global';
import Hls from 'hls.js';

const router = useRouter();
const route = useRoute();

const queryObj = parse(route.query);

const totalNum = ref(0);
const currentNum = ref(0);
const currentResource = ref(null);
const dataList = ref([]);
const page_num = ref(1);

const title = computed(() => {
  return currentNum.value + '/' + totalNum.value;
});

watch(currentResource, (val) => {
  if (val.resource_type === 'VIDEO') {
    nextTick(() => {
      play();
    });
  }
});

init();

async function init() {
  if (route.query.isFromFavorite) {
    getLikes();
  } else {
    getResources();
  }
}

async function getResources() {
  const res = await getResourceList({
    page_num: page_num.value,
    page_size: queryObj.page_size,
    resource_type: queryObj.resource_type,
    category_id: queryObj.category_id,
    order_by: queryObj.order_by,
    key: queryObj.key,
  });
  const data = res.resources || [];
  dataList.value.push(...data);

  if (page_num.value < route.query.page_num) {
    page_num.value++;
    getResources();
    return;
  }

  totalNum.value = res.total;
  dataList.value.find((item, index) => {
    if (item.id == route.query.id) {
      currentNum.value = index + 1;
      currentResource.value = item;
    }
  });
}

async function getLikes() {
  const res = await getLikeList({
    page_num: page_num.value,
    page_size: queryObj.page_size,
    resource_type: queryObj.resource_type,
    favorite_type: queryObj.favorite_type,
  });
  const data = (res.likes || []).map((item) => {
    return {
      ...item.resource,
      is_like: item.is_like,
      has_permissions: item.has_permissions,
    };
  });
  dataList.value.push(...data);

  if (page_num.value < route.query.page_num) {
    page_num.value++;
    getLikes();
    return;
  }

  totalNum.value = res.total;
  dataList.value.find((item, index) => {
    if (item.id == route.query.id) {
      currentNum.value = index + 1;
      currentResource.value = item;
    }
  });
}

function play() {
  if (Hls.isSupported()) {
    const instance = new Hls();
    const video = document.querySelector(`#video${currentResource.value.id}`);
    instance.loadSource(parseUrlToPath(currentResource.value.video_url));
    instance.attachMedia(video);
    video.play();
  } else {
    console.warn('当前浏览器不支持Hls.js');
  }
}

function onSwiper(swiper) {
  swiper.slideTo(currentNum.value - 1);
}

function onSourceChange(swiper) {
  getNextData(swiper.realIndex).then(() => {
    currentNum.value = swiper.realIndex + 1;
    currentResource.value = dataList.value[swiper.realIndex];
  });
}

function getNextData(index) {
  const isFromFavorite = route.query.isFromFavorite;
  return new Promise((resolve) => {
    if (
      index === dataList.value.length - 1 &&
      dataList.value.length < totalNum.value
    ) {
      page_num.value++;
      if (isFromFavorite) {
        getLikes().then(() => resolve());
      } else {
        getResources().then(() => resolve());
      }
    } else {
      resolve();
    }
  });
}

async function like() {
  if (!currentResource.value.is_like) {
    try {
      await postLike({
        resource_id: currentResource.value.id,
      });
      currentResource.value.is_like = true;
    } catch (e) {}
  }
}

async function unlike() {
  if (currentResource.value.is_like) {
    try {
      await deleteLike({
        resource_id: currentResource.value.id,
      });
      currentResource.value.is_like = false;
    } catch (e) {}
  }
}

function handleBack() {
  router.go(-1);
}
</script>

<style lang="scss" scoped>
.resource-detail-container {
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 0 10px 10px;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  // .large-img {
  //   width: 98%;
  //   margin: 0 auto;
  // }
  // .slide-img {
  //   height: 100%;
  // }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #000;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
