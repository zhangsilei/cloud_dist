<template>
  <div class="layout-container">
    <n-layout has-sider style="width: 100%; height: 100%">
      <!-- show-trigger -->
      <n-layout-sider
        collapse-mode="width"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <div
          style="display: flex; align-items: center; justify-content: center"
        >
          <img class="logo" :src="logoUrl" />
          <div style="margin-left: 10px">{{ webName }}</div>
        </div>
        <n-divider style="margin: 10px 0 0" />
        <menu-bar v-if="isAdmin" />
        <categorie-tree v-if="isUser" />
      </n-layout-sider>
      <n-layout>
        <n-layout-header>
          <n-page-header style="height: 61px">
            <template #extra>
              <span style="margin-right: 10px;">在线人数：{{ online_num }}</span>
              <n-dropdown
                placement="bottom-start"
                :options="options"
                @select="onSelect"
              >
                <n-button :bordered="false" style="padding: 0 4px">
                  <n-space align="center">
                    <n-avatar round size="small" :src="header" />
                    <span class="user">{{ user }}</span>
                  </n-space>
                </n-button>
              </n-dropdown>
            </template>
          </n-page-header>
        </n-layout-header>
        <n-layout-content class="content">
          <router-view></router-view>
          <!-- <template v-if="isAdmin">
            <div class="admin-content">
              <zone-nav v-if="isShowNav" />
              <router-view></router-view>
            </div>
          </template>
          <tempalte v-else>
            <router-view></router-view>
          </tempalte> -->
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
  createDiscreteApi,
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
  NAvatar,
  NSpace,
} from 'naive-ui';
import { ref, reactive } from 'vue';
import MenuBar from '@/components/pc/MenuBar';
import CategorieTree from '@/components/pc/CategorieTree';
import PopupWindow from '@/components/pc/PopupWindow';
import { isUser, isAdmin, logout, parseUrlToPath } from '@/common/global';
import { getUser, getUserId } from '@/common/cookie';
import { updateUser } from '@/api/user';
import router from '@/router';
import { getSettingConfigs, updateSettingConfigs } from '@/api/setting';
import adminHeader from '@/assets/header_admin.png';
import userHeader from '@/assets/header_user.png';

const { message } = createDiscreteApi(['message']);
const header = isAdmin() ? adminHeader : userHeader;

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
    NAvatar,
    NSpace,
    MenuBar,
    CategorieTree,
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
  computed: {
    isShowNav() {
      return this.$route.path === '/resource/manage';
    },
  },
  setup(props, context) {
    const TYPE_MODPWD = 0;
    const TYPE_LOGOUT = 1;
    const TYPE_CDKEY = 2;
    const isShowPwdAlert = ref(false);
    const formDataPwd = reactive({
      pwd: '',
      rePwd: '',
    });
    const formRef = ref(null);

    const onSelect = (key, opt) => {
      if (key === TYPE_MODPWD) {
        isShowPwdAlert.value = true;
      } else if (key === TYPE_LOGOUT) {
        logout();
      }
    };

    const updatePwd = () => {
      formRef.value
        ?.validate(async (errors) => {
          if (!errors) {
            await updateUser(getUserId(), { password: formDataPwd.pwd });
            message.success('操作成功！');
            logout();
            isShowPwdAlert.value = false;
          }
        })
        .catch((e) => {});
    };

    const checkSamePwd = (rule, val) => {
      return formDataPwd.pwd === val;
    };

    const options = (() => {
      const commonOpts = [
        {
          label: '修改密码',
          key: TYPE_MODPWD,
        },
        {
          label: '退出登录',
          key: TYPE_LOGOUT,
        },
      ];
      return commonOpts;
    })();

    const logoUrl = ref(null);
    const webName = ref(null);
    const online_num = ref(0);
    const KEY_NAME = 'name';
    const KEY_LOGO = 'logo';

    async function render() {
      const res = await getSettingConfigs();
      const dataList = res.system_configs || [];
      online_num.value = res.online_num;
      webName.value = dataList.find((item) => item.key === KEY_NAME).value;
      logoUrl.value = parseUrlToPath(
        dataList.find((item) => item.key === KEY_LOGO).value
      );
    }

    render();

    return {
      options,
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
      user: getUser(),
      header,
      logoUrl,
      webName,
      online_num,
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
    height: calc(100% - 61px);
    background: #f0f2f5;
    text-align: initial;
    .admin-content {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<style lang="scss">
.n-page-header {
  height: 50px;
}
</style>
