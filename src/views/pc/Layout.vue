<template>
  <div class="layout-container">
    <n-layout has-sider style="width: 100%; height: 100%">
      <!-- show-trigger -->
      <n-layout-sider
        bordered
        collapse-mode="width"
        :width="role === 0 ? 200 : 250"
        :collapsed="collapsed"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <img
          class="logo"
          src="https://img2.baidu.com/it/u=1882482103,2575197468&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
        />
        <n-divider style="margin: 10px 0 0" />
        <menu-bar v-if="role === 0" />
        <zone-nav v-else />
      </n-layout-sider>
      <n-layout>
        <n-layout-header>
          <n-page-header>
            <template #extra>
              <n-dropdown :options="options" placement="bottom-start">
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
} from 'naive-ui';
import MenuBar from '@/components/pc/MenuBar';
import ZoneNav from '@/components/pc/ZoneNav';

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
    MenuBar,
    ZoneNav,
  },
  name: 'Layout',
  setup() {
    return {
      role: 1,
      options: [
        {
          label: '修改密码',
          key: '1',
        },
        {
          label: '退出登录',
          key: '2',
        },
      ],
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
