<template>
  <div class="resource-detail-container">
    <n-page-header :title="title" @back="handleBack">
      <template #extra>
        <n-space>
          <n-icon v-if="currentResource.isLike" color="red" @click="like">
            <Heart />
          </n-icon>
          <n-icon v-else @click="unlike">
            <HeartOutline />
          </n-icon>
        </n-space>
      </template>
    </n-page-header>

    <!-- <template v-if="type == 1">
      <video controls>
        <source
          src="https://www.runoob.com/try/demo_source/movie.mp4"
          type="video/mp4"
        />
        您的浏览器不支持Video标签。
      </video>
    </template>
    <template v-else-if="type == 2">
      <img class="large-img" :src="currentResource.url" />
    </template> -->
    <swiper
      :direction="'vertical'"
      class="mySwiper"
      @slideChange="onSourceChange"
    >
      <swiper-slide>
        <img src="https://img95.699pic.com/photo/50008/9194.jpg_wh860.jpg" />
      </swiper-slide>
      <swiper-slide>
        <video controls controlsList="nodownload" autoplay>
          <source
            src="https://www.runoob.com/try/demo_source/movie.mp4"
            type="video/mp4"
          />
          您的浏览器不支持Video标签。
        </video>
      </swiper-slide>
      <swiper-slide>
        <img src="https://img95.699pic.com/photo/50008/9194.jpg_wh860.jpg" />
      </swiper-slide>
      <swiper-slide>
        <video controls controlsList="nodownload">
          <source
            src="https://www.runoob.com/try/demo_source/movie.mp4"
            type="video/mp4"
          />
          您的浏览器不支持Video标签。
        </video>
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
import { computed, ref } from 'vue';
import { Heart, HeartOutline } from '@vicons/ionicons5';
import { postLike, deleteLike } from '@/api/like';
import { useRouter, useRoute } from 'vue-router';
import { parse } from 'qs';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

const router = useRouter();
const route = useRoute();

let totalNum = 9;
let currentNum = ref(1);
const title = computed(() => {
  return currentNum.value + '/' + totalNum;
});
const currentResource = ref(null);

function onSourceChange(swiper) {
  currentNum.value = swiper.activeIndex + 1;
}

const queryObj = parse(route.query);
queryObj.list = parse(queryObj.list);
currentResource.value = queryObj.list.items[0];
const type = queryObj.list.type;

async function like() {
  await postLike({
    resource_id: currentResource.value.resource_id,
  });
}

async function unlike() {
  await deleteLike({
    resource_id: currentResource.value.resource_id,
  });
}

function handleBack() {
  router.push('/m/resource/list');
}
</script>

<style lang="scss" scoped>
.resource-detail-container {
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 10px;
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
<style>
.n-page-header {
  height: auto;
  margin-bottom: 15px;
}
</style>
