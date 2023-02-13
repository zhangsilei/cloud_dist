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
import { Category } from '@vicons/carbon';
import { RouterLink, useRoute } from 'vue-router';

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default {
  components: { NMenu },
  name: 'MenuBar',
  setup(props, context) {
    const route = useRoute();

    return {
      activeKey: ref(route.name),
      menuOptions: [
        {
          label: () =>
            h(
              RouterLink,
              {
                to: { path: '/resource/manage' },
              },
              '内容管理'
            ),
          key: 'resourceManage',
          icon: renderIcon(IosVideocam),
        },
        {
          label: () =>
            h(
              RouterLink,
              {
                to: { path: '/activation/manage' },
              },
              '激活码管理'
            ),
          key: 'activationManage',
          icon: renderIcon(ShieldKeyhole20Regular),
        },
        // {
        //   label: () =>
        //     h(
        //       RouterLink,
        //       {
        //         to: { path: '/categorie/manage' },
        //       },
        //       '分区管理'
        //     ),
        //   key: 'categorieManage',
        //   icon: renderIcon(Category),
        // },
        {
          label: () =>
            h(
              RouterLink,
              {
                to: { path: '/users/manage' },
              },
              '用户列表'
            ),
          key: 'usersManage',
          icon: renderIcon(Users),
        },
        {
          label: () =>
            h(
              RouterLink,
              {
                to: { path: '/settings/manage' },
              },
              '参数设置'
            ),
          key: 'settingsManage',
          icon: renderIcon(Settings),
        },
      ],
    };
  },
};
</script>
