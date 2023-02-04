<template>
  <div class="popup-window-container">
    <n-modal v-model:show="showModal" size="mini" :trap-focus="false">
      <n-card
        :style="`width: ${width}px`"
        :title="title"
        role="dialog"
        closable
        :segmented="{
          content: true,
          footer: true,
        }"
        @close="showModal = false"
        :footer-style="{
          display: 'flex',
          justifyContent: 'flex-end',
        }"
      >
        <slot></slot>
        <template v-if="isShowFooter" #footer>
          <n-space :align="'center'">
            <n-button v-if="isShowCancel" text @click="cancel">取消</n-button>
            <n-button type="primary" @click="confirm"
              >{{ confirmText }}
            </n-button>
          </n-space>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>

<script>
import { NIcon, NModal, NButton, NCard, NSpace } from 'naive-ui';
import { ref, computed } from 'vue';
import { Close } from '@vicons/ionicons5';

export default {
  name: 'PopupWindow',
  components: { NModal, NIcon, NButton, NCard, NSpace },
  props: {
    modelValue: {
      required: false,
      type: Boolean,
      default: '',
    },
    show: {
      required: false,
      type: Boolean,
      default: false,
    },
    title: {
      required: false,
      type: String,
      default: '',
    },
    isShowFooter: {
      required: false,
      type: Boolean,
      default: true,
    },
    width: {
      required: false,
      type: Number,
      default: 600,
    },
    isShowCancel: {
      required: false,
      type: Boolean,
      default: true,
    },
    confirmText: {
      required: false,
      type: String,
      default: '确定',
    },
  },
  setup(props, context) {
    let showModal = computed({
      get: function () {
        return props.modelValue;
      },
      set: function (value) {
        context.emit('update:modelValue', value);
      },
    });
    const cancel = () => {
      showModal = false;
      context.emit('onCancel');
    };
    const confirm = () => {
      showModal = false;
      context.emit('onConfirm');
    };

    return {
      Close,
      showModal,
      cancel,
      confirm,
    };
  },
};
</script>

<style lang="scss" scoped>
.popup-window-container {
}
</style>
