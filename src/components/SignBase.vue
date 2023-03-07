<template>
  <div class="signbase-container">
    <template v-if="!isShowSucc">
      <div class="logo">
        <n-avatar round :size="48" :src="userheader" />
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
            <n-input
              v-model:value="formData.password"
              placeholder="Password"
              type="password"
            />
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
              @keyup.enter="onClick"
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
    <template v-if="isSignup">
      <div class="footer signup">
        <div>
          By clicking "Sign Up", you agree to ****‘s Terms of Service and
          Privacy Policy.
        </div>
        <div>
          Already have an account?
          <span class="pointer underline" @click="navigateToSignIp">
            Sign in
          </span>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="footer signin">
        <div class="pointer underline" @click="isShowForgot = true">
          Forget Password?
        </div>
        <div class="pointer" @click="navigateToSignUp">Sign up</div>
      </div>
    </template>

    <popup-window v-model="isShowForgot" :width="300" :is-show-footer="false">
      <div>如果你的密码忘记了，请联系客服。 客服tg号：{{ contactPhone }}</div>
      <n-button
        style="margin-left: 75px; margin-top: 15px"
        color="#e03248"
        attr-type="button"
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
import { defineComponent } from 'vue';
import { NAvatar, NForm, NFormItem, NInput, NButton, NIcon } from 'naive-ui';
import { IosRefresh } from '@vicons/ionicons4';
import { createCaptcha } from '@/api/captcha';
import { register, login } from '@/api/user';
import { setRole, setToken, setUser, setUserId } from '@/common/cookie';
import { isUser } from '@/common/global';
import Clipboard from 'clipboard';
import PopupWindow from '@/components/pc/PopupWindow';
import userheader from '@/assets/header_user.png';

export const TYPE_SIGN_IN = 0;
export const TYPE_SIGN_UP = 1;

export default defineComponent({
  components: {
    NAvatar,
    NForm,
    NFormItem,
    NInput,
    NButton,
    NIcon,
    IosRefresh,
    PopupWindow,
  },
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
      isShowForgot: false,
      loading: false,
      contactPhone: 'xxxx',
      copyContactBtn: 'copyContactBtn',
      clipboard: null,
      userheader,
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
  mounted() {
    this.initClipboard();
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
          const { token, user_name, user_type, id } = await login(
            this.formData
          );
          this.loading = false;
          setToken(token);
          setRole(user_type);
          setUser(user_name);
          setUserId(id);
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
    navigateToSignUp() {
      this.$router.push('/signup');
    },
    navigateToSignIp() {
      this.$router.push('/signin');
    },
    copyContact() {
      this.clipboard.on('success', (e) => {
        console.log('copy succ');
        e.clearSelection();
        this.initClipboard();
      });
      this.clipboard.on('error', (e) => {
        console.log('copy fail');
      });
    },
    initClipboard() {
      this.clipboard && this.clipboard.destroy();
      this.clipboard = null;
      this.clipboard = new Clipboard(`#${this.copyContactBtn}`);
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
  .footer {
    display: flex;
    color: rgb(127, 127, 127);
    .pointer {
      cursor: pointer;
    }
    .underline {
      text-decoration: underline;
    }
  }
  .signin {
    justify-content: space-between;
  }
  .signup {
    flex-direction: column;
    align-items: center;
  }
}
@media screen and (max-width: 400px) {
  .signbase-container {
    width: 80%;
  }
}
</style>
