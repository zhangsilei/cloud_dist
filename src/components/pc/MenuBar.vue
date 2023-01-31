<template>
  <div class="menu-bar-container">
    <n-menu
      v-model:value="activeKey"
      :options="menuOptions"
      style="text-align: left"
    />
  </div>
</template>

<script>
import { h, ref } from 'vue';
import { NMenu, NIcon } from 'naive-ui';
import { IosVideocam } from '@vicons/ionicons4';
import { Users, Settings } from '@vicons/tabler';
import { ShieldKeyhole20Regular } from '@vicons/fluent';
import { RouterLink } from 'vue-router';

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default {
  components: { NMenu },
  name: 'MenuBar',
  setup() {
    return {
      activeKey: ref(null),
      menuOptions: [
        {
          label: () =>
            h(
              RouterLink,
              {
                to: { path: '/videos' },
              },
              '内容管理'
            ),
          key: 'videos',
          icon: renderIcon(IosVideocam),
        },
        {
          label: () =>
            h(
              RouterLink,
              {
                to: { path: '/cdkey' },
              },
              '激活码管理'
            ),
          key: 'cdkey',
          icon: renderIcon(ShieldKeyhole20Regular),
        },
        {
          label: () =>
            h(
              RouterLink,
              {
                to: { path: '/users' },
              },
              '用户列表'
            ),
          key: 'users',
          icon: renderIcon(Users),
        },
        {
          label: () =>
            h(
              RouterLink,
              {
                to: { path: '/settings' },
              },
              '参数设置'
            ),
          key: 'settings',
          icon: renderIcon(Settings),
        },
      ],
    };
  },
};
</script>
