<template>
  <div class="layout-container">
    <n-layout has-sider style="width: 100%; height: 100%">
      <!-- show-trigger -->
      <n-layout-sider
        bordered
        collapse-mode="width"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <img
          class="logo"
          src="https://img2.baidu.com/it/u=1882482103,2575197468&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
        />
        <n-divider style="margin: 10px 0 0" />
        <menu-bar v-if="isAdmin" />
        <zone-nav v-if="isUser" />
      </n-layout-sider>
      <n-layout>
        <n-layout-header>
          <n-page-header>
            <template #extra>
              <n-dropdown
                placement="bottom-start"
                :options="options"
                @select="onSelect"
              >
                <n-button :bordered="false" style="padding: 0 4px">
                  <img
                    style="height: 10px; margin-right: 5px"
                    src="https://img2.baidu.com/it/u=1882482103,2575197468&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
                  />
                  <span class="user">admin</span>
                </n-button>
              </n-dropdown>
            </template>
          </n-page-header>
        </n-layout-header>
        <n-layout-content class="content">
          <router-view></router-view>
        </n-layout-content>
      </n-layout>
    </n-layout>
    <!-- 修改密码弹窗 -->
    <popup-window
      v-model="isShowPwdAlert"
      title="修改密码"
      @on-confirm="updatePwd"
    >
      <n-form
        ref="formRef"
        :model="formDataPwd"
        :rules="pwdRules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="新密码" path="pwd">
          <n-input v-model:value="formDataPwd.pwd" placeholder="请输入" />
        </n-form-item>
        <n-form-item label="确认密码" path="rePwd">
          <n-input v-model:value="formDataPwd.rePwd" placeholder="请输入" />
        </n-form-item>
      </n-form>
    </popup-window>
  </div>
</template>

<script>
import {
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NPageHeader,
  NDropdown,
  NButton,
  NDivider,
  NForm,
  NFormItem,
  NInput,
} from 'naive-ui';
import { ref, reactive } from 'vue';
import MenuBar from '@/components/pc/MenuBar';
import ZoneNav from '@/components/pc/ZoneNav';
import PopupWindow from '@/components/pc/PopupWindow';
import { isUser, isAdmin } from '@/common/global';

export default {
  components: {
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NPageHeader,
    NDropdown,
    NButton,
    NDivider,
    NForm,
    NFormItem,
    NInput,
    MenuBar,
    ZoneNav,
    PopupWindow,
  },
  name: 'Layout',
  watch: {
    isShowPwdAlert(val) {
      if (!val) {
        this.formDataPwd.pwd = '';
        this.formDataPwd.rePwd = '';
      }
    },
  },
  setup() {
    const TYPE_MODPWD = 0;
    const TYPE_LOGOUT = 1;
    const isShowPwdAlert = ref(false);
    const formDataPwd = reactive({
      pwd: '',
      rePwd: '',
    });
    const formRef = ref(null);

    const logout = () => {};

    const onSelect = (key, opt) => {
      if (key === TYPE_MODPWD) {
        isShowPwdAlert.value = true;
      } else if (key === TYPE_LOGOUT) {
        logout();
      }
    };

    const updatePwd = () => {
      formRef.value
        ?.validate((errors) => {
          if (!errors) {
            // TODO: 更新密码
            isShowPwdAlert.value = false;
          }
        })
        .catch((e) => {});
    };

    const checkSamePwd = (rule, val) => {
      return formDataPwd.pwd === val;
    };

    return {
      options: [
        {
          label: '修改密码',
          key: TYPE_MODPWD,
        },
        {
          label: '退出登录',
          key: TYPE_LOGOUT,
        },
      ],
      isShowPwdAlert,
      pwdRules: {
        pwd: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请输入新密码',
        },
        rePwd: {
          required: true,
          trigger: ['blur', 'input'],
          message: '两次密码输入不一致',
          validator: checkSamePwd,
        },
      },
      formDataPwd,
      formRef,
      isUser: isUser(),
      isAdmin: isAdmin(),
      onSelect,
      updatePwd,
    };
  },
};
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  .logo {
    // width: 50%;
    height: 40px;
    margin-top: 10px;
  }
  .user {
    margin-right: 10px;
  }
  .content {
    padding: 10px;
    height: calc(100% - 50px);
    background: #f0f2f5;
    text-align: initial;
  }
}
</style>

<style lang="scss">
.n-page-header {
  height: 50px;
}
</style>
