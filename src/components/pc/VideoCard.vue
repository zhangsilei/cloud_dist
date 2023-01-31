<template>
  <div class="video-card-container">
    <n-popselect
      v-model:value="value"
      :options="options"
      trigger="hover"
      placement="top"
    >
      <div>
        <div class="card">
          <img
            class="dir"
            src="https://img2.baidu.com/it/u=1882482103,2575197468&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
          />
        </div>
        <div>{{ fileName }}</div>
      </div>
    </n-popselect>
  </div>
</template>

<script>
import { NPopselect } from 'naive-ui';
import { ref } from 'vue';

export default {
  name: 'VideoCard',
  components: { NPopselect },
  props: {
    likeNum: {
      required: true,
      type: Number,
      default: 0,
    },
    fileName: {
      required: true,
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      value: ref(null),
      options: [
        {
          label: '输入激活码',
          value: 0,
        },
        {
          label: '联系客服',
          value: 1,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.video-card-container {
  .card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90px;
    background: #f0f2f5;
    .dir {
      width: 100%;
      height: 100%;
      flex: 1;
    }
  }
}
</style>
