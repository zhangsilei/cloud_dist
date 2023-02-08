<template>
  <div class="signbase-container">
    <template v-if="!isShowSucc">
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
          :model="formData"
          :rules="rules"
          label-placement="top"
        >
          <n-form-item label="Username">
            <n-input
              v-model:value="formData.user_name"
              placeholder="Username"
            />
          </n-form-item>
          <n-form-item label="Password">
            <n-input v-model:value="formData.password" placeholder="Password" />
          </n-form-item>
          <n-form-item v-if="isSignup" label="Invitation Code">
            <n-input
              v-model:value="formData.invitation_code"
              placeholder="Invitation Code"
            />
          </n-form-item>
          <n-form-item label="Verification code">
            <n-input
              style="width: 50%"
              v-model:value="formData.captcha_code"
              placeholder="Verification code"
            />
            <img :src="pic" class="verify-img" />
            <ios-refresh class="refresh-btn" @click="renderCode" />
          </n-form-item>
          <n-form-item>
            <n-button
              style="width: 100%"
              color="#e03248"
              attr-type="button"
              :loading="loading"
              @click="onClick"
            >
              {{ btnName }}
            </n-button>
          </n-form-item>
        </n-form>
      </div>
    </template>
    <template v-else>
      <div class="register-succ">
        <img src="../assets/succ.png" />
        <h3>恭喜，注册成功</h3>
        <n-button type="primary" ghost>
          即将跳转登录页面（{{ countdown }} 秒后自动进入）
        </n-button>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { NAvatar, NForm, NFormItem, NInput, NButton, NIcon } from 'naive-ui';
import { IosRefresh } from '@vicons/ionicons4';
import { createCaptcha } from '@/api/captcha';
import { register, login } from '@/api/user';
import { setRole, setToken, setUser } from '@/common/cookie';
import { isUser } from '@/common/global';

export const TYPE_SIGN_IN = 0;
export const TYPE_SIGN_UP = 1;

export default defineComponent({
  components: { NAvatar, NForm, NFormItem, NInput, NButton, NIcon, IosRefresh },
  name: 'SignBase',
  props: {
    type: {
      type: Number,
      default: TYPE_SIGN_IN,
      required: true,
    },
    user_name: {
      type: String,
      default: '',
      required: false,
    },
    password: {
      type: String,
      default: '',
      required: false,
    },
  },
  data() {
    return {
      formData: {
        user_name: '',
        password: '',
        invitation_code: '',
        captcha_code: '',
        captcha_id: '',
      },
      rules: [],
      pic: '',
      countdown: 3,
      isShowSucc: false,
      loading: false,
    };
  },
  computed: {
    isSignup() {
      return this.type === TYPE_SIGN_UP;
    },
    btnName() {
      return this.isSignup ? 'Sign Up' : 'Sign In';
    },
  },
  watch: {
    '$route.query': {
      handler: function (val) {
        if (val) {
          this.autoFill();
        }
      },
      immediate: true,
    },
  },
  async created() {
    this.renderCode();
  },
  methods: {
    async onClick() {
      if (this.loading) return;
      this.loading = true;
      try {
        if (this.isSignup) {
          await register(this.formData);
          this.isShowSucc = true;
          this.countdownInterval();
          this.loading = false;
        } else {
          const { token, user_name, user_type } = await login(this.formData);
          this.loading = false;
          setToken(token);
          setRole(user_type);
          setUser(user_name);
          this.$router.push({ path: '/' });
        }
      } catch (e) {
        this.renderCode();
      } finally {
        this.loading = false;
      }
    },
    async renderCode() {
      const { pic, captcha_id } = await createCaptcha();
      this.pic = pic;
      this.formData.captcha_id = captcha_id;
    },
    countdownInterval() {
      const timer = setInterval(() => {
        if (this.countdown == 1) {
          clearInterval(timer);
          this.$router.push({
            path: '/signin',
            query: {
              user_name: this.formData.user_name,
              password: this.formData.password,
            },
          });
          return;
        }
        this.countdown--;
      }, 1000);
    },
    autoFill() {
      const { user_name, password } = this.$route.query;
      this.formData.user_name = user_name;
      this.formData.password = password;
    },
  },
});
</script>

<style lang="scss" scoped>
.signbase-container {
  width: 50%;
  max-width: 350px;
  .form {
    text-align: left;
    .verify-img {
      width: 45%;
      height: 34px;
      margin-left: 5px;
    }
    .refresh-btn {
      cursor: pointer;
      height: 18px;
    }
  }
  .register-succ {
    img {
      width: 50px;
    }
  }
}
</style>
