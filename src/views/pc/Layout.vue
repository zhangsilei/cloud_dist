<template>
  <div class="layout-container">
    <n-layout has-sider style="width: 100%; height: 100%">
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="50"
        :width="170"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <img
          class="logo"
          src="https://img2.baidu.com/it/u=1882482103,2575197468&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
        />
        <n-menu v-model:value="activeKey" :options="menuOptions" />
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
import { defineComponent, h, ref } from 'vue';
import { NIcon } from 'naive-ui';
import {
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NMenu,
  NPageHeader,
  NDropdown,
  NButton,
} from 'naive-ui';
import { IosVideocam } from '@vicons/ionicons4';
import { Users, Settings } from '@vicons/tabler';
import { ShieldKeyhole20Regular } from '@vicons/fluent';

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default defineComponent({
  components: {
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NMenu,
    NPageHeader,
    NDropdown,
    NButton,
  },
  name: 'Layout',
  setup() {
    return {
      activeKey: ref(null),
      menuOptions: [
        {
          key: 'divider-1',
          type: 'divider',
        },
        {
          label: () =>
            h(
              'a',
              {
                href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              },
              '内容管理'
            ),
          key: 'hear-the-wind-sing',
          icon: renderIcon(IosVideocam),
        },
        {
          label: () =>
            h(
              'a',
              {
                href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              },
              '激活码管理'
            ),
          key: 'hear-the-wind-sing',
          icon: renderIcon(ShieldKeyhole20Regular),
        },
        {
          label: () =>
            h(
              'a',
              {
                href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              },
              '用户列表'
            ),
          key: 'hear-the-wind-sing',
          icon: renderIcon(Users),
        },
        {
          label: () =>
            h(
              'a',
              {
                href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
              },
              '参数设置'
            ),
          key: 'hear-the-wind-sing',
          icon: renderIcon(Settings),
        },
      ],
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
});
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
    padding: 20px;
    background: #f0f2f5;
  }
}
</style>

<style lang="scss">
.n-page-header {
  height: 50px;
}
</style>
