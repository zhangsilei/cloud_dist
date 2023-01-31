<template>
  <div class="signbase-container">
    <div class="logo">
      <n-avatar
        round
        :size="48"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </div>
    <div class="form">
      <n-form
        ref="formRef"
        :label-width="80"
        :model="formValue"
        :rules="rules"
        :size="size"
        label-placement="top"
      >
        <n-form-item label="Username">
          <n-input v-model:value="formValue.userName" placeholder="Username" />
        </n-form-item>
        <n-form-item label="Password">
          <n-input v-model:value="formValue.password" placeholder="Password" />
        </n-form-item>
        <n-form-item label="Verification code">
          <n-input
            style="width: 50%"
            v-model:value="formValue.verifyCode"
            placeholder="Verification code"
          />
          <img src="../assets/verifyCode.png" class="verify-img" />
          <ios-refresh class="refresh-btn" />
        </n-form-item>
        <n-form-item>
          <n-button
            style="width: 100%"
            color="#e03248"
            attr-type="button"
            @click="onClick"
          >
            {{ btnName }}
          </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { NAvatar, NForm, NFormItem, NInput, NButton, NIcon } from 'naive-ui';
import { IosRefresh } from '@vicons/ionicons4';

export const TYPE_SIGN_IN = 0;
export const TYPE_SIGN_UP = 1;

export default defineComponent({
  components: { NAvatar, NForm, NFormItem, NInput, NButton, NIcon, IosRefresh },
  name: 'SignBase',
  props: {
    type: Number,
    default: TYPE_SIGN_IN,
    required: true,
  },
  data() {
    return {
      formValue: {
        userName: '',
        password: '',
        verifyCode: '',
      },
      rules: [],
    };
  },
  computed: {
    btnName() {
      const typeMap = {
        [TYPE_SIGN_IN]: 'Sign In',
        [TYPE_SIGN_UP]: 'Sign Up',
      };
      return typeMap[this.type];
    },
  },
  methods: {
    onClick() {},
  },
});
</script>

<style lang="scss" scoped>
.signbase-container {
  width: 50%;
  max-width: 350px;
  .verify-img {
    width: 45%;
    height: 34px;
  }
  .refresh-btn {
    cursor: pointer;
    height: 18px;
  }
}
</style>
