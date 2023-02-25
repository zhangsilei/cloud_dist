<template>
  <div class="video-card-container">
    <div class="card">
      <img class="poster" :src="poster" />
      <div class="info">
        <n-icon :component="IosHeart" color="#999" />
        <span class="like-num">{{ likeNum }}</span>
        <n-icon
          :component="VideoClip20Filled"
          color="#999"
          style="margin-right: 10px"
        />
        <n-dropdown trigger="hover" :options="options" @select="handleSelect">
          <n-icon :component="MessageFilled" color="#999" />
        </n-dropdown>
      </div>
      <div
        v-if="!authority"
        @mouseenter="isShowAction = true"
        @mouseleave="isShowAction = false"
      >
        <div class="mask"></div>
        <div class="no-authority">无权限</div>
        <div v-if="isShowAction" class="actions">
          <div @click="isShowCdkeyAlert = true">输入激活码</div>
          <div @click="isShowContactAlert = true">联系客服</div>
        </div>
      </div>
    </div>
    <div>{{ fileName }}</div>

    <popup-window
      v-model="isShowCdkeyAlert"
      title="输入激活码"
      @on-confirm="setCdkey"
    >
      <n-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="激活码" path="cdKey">
          <n-input v-model:value="formData.cdKey" placeholder="请输入" />
        </n-form-item>
      </n-form>
    </popup-window>

    <popup-window
      v-model="isShowContactAlert"
      confirm-text="复制联系方式"
      :width="300"
      :is-show-footer="false"
    >
      <div>联系客服获取购买链接，客服联系方式（tg）：{{ contactPhone }}</div>
      <n-button
        style="margin-left: 75px; margin-top: 15px"
        type="primary"
        :id="copyContactBtn"
        :data-clipboard-text="contactPhone"
        :is-show-footer="false"
        @click="copyContact"
      >
        复制联系方式
      </n-button>
    </popup-window>
  </div>
</template>

<script>
import {
  NIcon,
  NModal,
  NForm,
  NFormItem,
  NInput,
  NButton,
  NDropdown,
} from 'naive-ui';
import { ref, reactive, onMounted } from 'vue';
import { IosHeart } from '@vicons/ionicons4';
import { VideoClip20Filled } from '@vicons/fluent';
import { MessageFilled } from '@vicons/antd';
import PopupWindow from '@/components/pc/PopupWindow';
import Clipboard from 'clipboard';
import { isAdmin } from '@/common/global';

export default {
  name: 'VideoCard',
  components: {
    NIcon,
    NModal,
    NForm,
    NFormItem,
    NInput,
    NButton,
    NDropdown,
    PopupWindow,
  },
  props: {
    id: {
      required: true,
      type: Number,
      default: 0,
    },
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
    authority: {
      required: true,
      type: Boolean,
      default: false,
    },
    poster: {
      required: true,
      type: String,
      default: '',
    },
  },
  watch: {
    isShowCdkeyAlert(val) {
      if (!val) {
        this.formData.cdKey = '';
      }
    },
  },
  setup(props, context) {
    const formData = reactive({ cdKey: '' });
    const formRef = ref(null);
    const isShowCdkeyAlert = ref(false);
    const isShowContactAlert = ref(false);

    // 激活码
    const setCdkey = () => {
      formRef.value
        ?.validate((errors) => {
          if (!errors) {
            isShowCdkeyAlert.value = false;
          }
        })
        .catch((e) => {});
    };

    // 联系方式
    const copyContactBtn = 'copyContactBtn';
    let clipboard = null;

    const copyContact = () => {
      clipboard.on('success', (e) => {
        console.log('copy succ');
        e.clearSelection();
        initClipboard();
      });
      clipboard.on('error', (e) => {
        console.log('copy fail');
      });
    };

    const initClipboard = () => {
      clipboard && clipboard.destroy();
      clipboard = null;
      clipboard = new Clipboard(`#${copyContactBtn}`);
    };

    onMounted(() => {
      initClipboard();
    });

    const TYPE_EDIT = 0;
    const TYPE_DETAIL = 1;
    const TYPE_DELETE = 2;

    function handleSelect(key) {
      if (key === TYPE_EDIT) {
        context.emit('onEdit');
      } else if (key === TYPE_DETAIL) {
        context.emit('onDetail');
      } else if (key === TYPE_DELETE) {
        context.emit('onDelete');
      }
    }

    const adminOptions = [
      {
        label: '编辑',
        key: TYPE_EDIT,
      },
      {
        label: '详细信息',
        key: TYPE_DETAIL,
      },
      {
        label: '删除',
        key: TYPE_DELETE,
      },
    ];
    const userOptions = [
      {
        label: '详细信息',
        key: TYPE_DETAIL,
      },
    ];

    return {
      IosHeart,
      VideoClip20Filled,
      MessageFilled,
      isShowAction: ref(false),
      isShowCdkeyAlert,
      isShowContactAlert,
      formRef,
      formData,
      rules: {
        cdKey: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请输入激活码',
        },
      },
      contactPhone: 'xxxx',
      copyContactBtn,
      setCdkey,
      copyContact,
      options: isAdmin() ? adminOptions : userOptions,
      handleSelect,
    };
  },
};
</script>

<style lang="scss" scoped>
.video-card-container {
  .card {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90px;
    background: #f0f2f5;
    .poster {
      width: 100%;
      height: 100%;
      flex: 1;
    }
    .info {
      position: absolute;
      left: 5px;
      bottom: 5px;
      display: flex;
      align-items: flex-end;
      color: #fff;
      line-height: 14px;
      .like-num {
        margin-right: 10px;
        color: #999;
      }
    }
    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }
    .no-authority {
      position: absolute;
      top: 5px;
      left: 5px;
      color: #fff;
    }
    .actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      background: #fff;
      font-size: 13px;
      & > div {
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
      & > div:hover {
        background: #f1cdcd;
        color: rgb(237, 56, 56);
      }
    }
  }
}
</style>
