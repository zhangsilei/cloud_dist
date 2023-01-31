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
import { NMenu, NIcon, NDropdown } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { EllipsisHorizontalSharp } from '@vicons/ionicons5';

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default {
  components: { NMenu, NDropdown },
  name: 'ZoneNav',
  setup() {
    return {
      activeKey: ref(null),
      menuOptions: [
        {
          label: () =>
            h('div', { class: 'nav-item' }, [
              h('div', null, 'Game'),
              h(
                NDropdown,
                {
                  placement: 'bottom-start',
                  options: [
                    {
                      label: '新建分区',
                      key: '1',
                    },
                    {
                      label: '新建下级分区',
                      key: '2',
                    },
                    {
                      label: '编辑',
                      key: '3',
                    },
                  ],
                },
                renderIcon(EllipsisHorizontalSharp)
              ),
            ]),
          key: 'Game',
          children: [
            {
              label: 'Mobile game',
              key: 'Mobile game',
              children: [
                {
                  label: 'Favorite',
                  key: 'Favorite',
                },
                {
                  label: 'Videos',
                  key: 'Videos',
                },
                {
                  label: 'Photos',
                  key: 'Photos',
                },
              ],
            },
          ],
        },
        {
          label: 'Moutain',
          key: 'Moutain',
          children: [],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.n-menu .n-submenu .n-menu-item-content {
  display: flex;
  & > .n-menu-item-content-header {
    display: flex;
    order: 2;
    width: 100%;
    & > .nav-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
  & > .n-menu-item-content__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 1;
    margin-right: 15px;
  }
}
</style>
