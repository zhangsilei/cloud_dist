<template>
  <div class="users-manage-container">
    <n-space class="filter">
      <n-form-item label-placement="left" label="关键字">
        <n-input
          v-model:value="filter.query"
          placeholder="用户名/用户ID/激活码"
        ></n-input>
      </n-form-item>
      <n-form-item label-placement="left">
        <n-button type="primary" @click="query"> 查询 </n-button>
      </n-form-item>
      <n-form-item label-placement="left">
        <n-button @click="reset"> 重置 </n-button>
      </n-form-item>
    </n-space>

    <n-data-table
      :max-height="tableMaxHeight"
      :loading="loading"
      :columns="columns"
      :data="userList"
      :pagination="true"
      :bordered="false"
    />

    <popup-window
      v-model="isShowPwdAlert"
      title="重置密码"
      :width="300"
      @on-confirm="resetPwd"
    >
      <div>确定重置密码吗？</div>
      <div>重置后新密码为：123456</div>
    </popup-window>
  </div>
</template>

<script setup>
import {
  createDiscreteApi,
  NFormItem,
  NInput,
  NForm,
  NButton,
  NDataTable,
  NSpace,
} from 'naive-ui';
import { ref, h, onMounted, reactive, computed } from 'vue';
import PopupWindow from '@/components/pc/PopupWindow.vue';
import { getUserList, updateUser } from '@/api/user';
import { getTableMaxHeight } from '@/common/global';

const filter = reactive({ query: null });

function query() {}

function reset() {}

let userList = ref([]);
let loading = ref(true);
let tableMaxHeight = ref(0);
let isShowPwdAlert = ref(false);
let selectedRow = ref(null);

const userParams = ref({
  page_num: 1,
  page_size: 10,
});
const columns = [
  {
    title: '用户ID',
    key: 'id',
  },
  {
    title: '用户名',
    key: 'user_name',
  },
  {
    title: '用户类型',
    key: 'user_type',
  },
  {
    title: '操作',
    key: 'action',
    render(row) {
      return h('div', { style: { color: '#18a058', cursor: 'pointer' } }, [
        h(
          'span',
          {
            style: { 'margin-right': '10px' },
            onClick: () => {
              // TODO: 跳转到详情页
            },
          },
          '详情'
        ),
        h(
          'span',
          {
            onClick: () => {
              selectedRow.value = row;
              isShowPwdAlert.value = true;
            },
          },
          '重置密码'
        ),
      ]);
    },
  },
];

onMounted(() => {
  const filterHeight = 58;
  const tableHeaderHeight = 47;
  const paginationHeight = 28 + 12;
  const containerPadding = 10 * 2;
  tableMaxHeight.value =
    document.querySelector('.users-manage-container').offsetHeight -
    filterHeight -
    tableHeaderHeight -
    paginationHeight -
    containerPadding;
});

const { message } = createDiscreteApi(['message']);

async function renderUserList() {
  const res = await getUserList(userParams.value);
  userList.value = res.users || [];
  loading.value = false;
}

renderUserList();

async function resetPwd() {
  await updateUser(selectedRow.value.id, { password: '123456' });
  isShowPwdAlert.value = false;
  message.success('操作成功！');
}
</script>

<style lang="scss" scoped>
.users-manage-container {
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
}
</style>
