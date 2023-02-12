<template>
  <div class="res-details-container">
    <div class="header">
      <div class="title">
        <div class="name">{{ resName }}</div>
        <div>{{ resCurrentNum }}/{{ resTotalNums }}个文件</div>
      </div>
      <n-icon class="close-btn" size="20">
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
        <swiper-slide class="res-item">
          <video class="res" controls>
            <source
              src="https://www.runoob.com/try/demo_source/movie.mp4"
              type="video/mp4"
            />
            <source
              src="https://www.runoob.com/try/demo_source/movie.ogg"
              type="video/ogg"
            />
            您的浏览器不支持 HTML5 video 标签。
          </video>
        </swiper-slide>
        <swiper-slide class="res-item">
          <n-image
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            lazy
          />
        </swiper-slide>
        <swiper-slide class="res-item">
          <video class="res" controls>
            <source
              src="https://www.runoob.com/try/demo_source/movie.mp4"
              type="video/mp4"
            />
            <source
              src="https://www.runoob.com/try/demo_source/movie.ogg"
              type="video/ogg"
            />
            您的浏览器不支持 HTML5 video 标签。
          </video>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Close } from '@vicons/ionicons5';
import { NIcon, NImage } from 'naive-ui';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';

defineProps({
  resName: {
    required: true,
    type: String,
    default: 'xxx.mp4',
  },
  resTotalNums: {
    required: true,
    type: [String, Number],
    default: '100',
  },
});

const resCurrentNum = ref(1);

const modules = [Navigation];
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style lang="scss" scoped>
$headerHeight: 45px;
.res-details-container {
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
        .res {
          height: 100%;
        }
      }
    }
  }
}
</style>
