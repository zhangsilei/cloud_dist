<template>
  <div class="users-manage-container">
    <n-space class="filter">
      <n-form-item label-placement="left" label="关键字">
        <n-input
          v-model:value="userParams.key"
          placeholder="用户名/用户ID/激活码"
          clearable
        ></n-input>
      </n-form-item>
      <n-form-item label-placement="left">
        <n-button type="primary" @click="query"> 查询 </n-button>
      </n-form-item>
      <n-form-item label-placement="left">
        <n-button @click="reset"> 重置 </n-button>
      </n-form-item>
    </n-space>

    <div style="display: flex; flex-direction: column">
      <n-data-table
        :max-height="tableMaxHeight"
        :loading="loading"
        :columns="columns"
        :data="userList"
        :bordered="false"
      />
      <n-pagination
        v-model:page="userParams.page_num"
        :item-count="total"
        :on-update:page="changePage"
        style="align-self: flex-end; margin-top: 10px"
      />
    </div>

    <n-drawer v-model:show="activation.isShow" :width="700">
      <n-drawer-content closable>
        <template #header>
          <n-space align="center">
            <n-avatar round size="small" :src="header" />
            <div style="font-size: 14px">{{ username }}</div>
          </n-space>
        </template>
        <div style="display: flex; flex-direction: column">
          <n-data-table
            :max-height="maxHeight"
            :loading="activation.loading"
            :columns="activation.columns"
            :data="activation.dataList"
            :bordered="false"
            :on-update:page="(page) => (activation.params.page_num = page)"
            :on-update:page-size="
              (size) => (activation.params.page_size = size)
            "
          />
          <n-pagination
            v-model:page="activation.params.page_num"
            :item-count="activation.total"
            :on-update:page="activation.changePage"
            style="align-self: flex-end; margin-top: 10px"
          />
        </div>
      </n-drawer-content>
    </n-drawer>

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
  NPagination,
  NDrawer,
  NDrawerContent,
  NImage,
  NAvatar,
} from 'naive-ui';
import { ref, h, onMounted, reactive, computed } from 'vue';
import PopupWindow from '@/components/pc/PopupWindow.vue';
import { getUserList, updateUser } from '@/api/user';
import { getActivationCodeList } from '@/api/activation';
import { getTableMaxHeight, isAdmin } from '@/common/global';
import adminHeader from '@/assets/header_admin.png';
import userHeader from '@/assets/header_user.png';
import { getUser, getUserId } from '@/common/cookie';
import moment from 'moment';
import Clipboard from 'clipboard';

const header = isAdmin() ? adminHeader : userHeader;
const username = getUser();
const activation = reactive({
  loading: false,
  isShow: false,
  dataList: [],
  total: 0,
  params: {
    page_num: 1,
    page_size: 10,
    user_id: getUserId(),
  },
  columns: [
    {
      title: '激活码',
      key: 'activation_code.code',
      width: 130,
      render(row) {
        return h(
          // NButton,
          'span',
          {
            'data-clipboard-text': row.activation_code.code,
            id: row.activation_code.code,
            // onClick() {
            //   copyContact(row.activation_code.code);
            //   message.success('复制成功！');
            // },
          },
          row.activation_code.code
        );
      },
    },
    {
      title: '激活分区',
      key: 'category.name',
      width: 160,
      ellipsis: {
        tooltip: true,
      },
    },
    {
      title: '有效期',
      key: 'activation_code.valid_duration',
      render(row) {
        return h(
          'span',
          null,
          row.activation_code.valid_duration / (3600 * 24) + '天'
        );
      },
    },
    {
      title: '激活时间',
      key: 'activation_code.use_time',
      render(row) {
        return h(
          'span',
          null,
          row.activation_code.use_time
            ? moment(row.activation_code.use_time * 1000).format(
                'YYYY-MM-DD HH:mm:ss'
              )
            : '--'
        );
      },
    },
    {
      title: '到期时间',
      key: 'activation_code.expiration_time',
      render(row) {
        return h(
          'span',
          null,
          row.activation_code.expiration_time
            ? moment(row.activation_code.use_time * 1000).format(
                'YYYY-MM-DD HH:mm:ss'
              )
            : '--'
        );
      },
    },
  ],
  changePage: (page) => {
    activation.params.page_num = page;
    renderActivationList();
  },
});
const maxHeight = ref(0);
let clipboard = null;

const copyContact = (id) => {
  if (!clipboard) {
    initClipboard(id);
  }
  clipboard.on('success', (e) => {
    console.log('copy succ');
    e.clearSelection();
    initClipboard(id);
  });
  clipboard.on('error', (e) => {
    console.log('copy fail');
  });
};

const initClipboard = (id) => {
  clipboard && clipboard.destroy();
  clipboard = null;
  clipboard = new Clipboard(`#${id}`);
};

onMounted(() => {
  maxHeight.value = document.body.clientHeight - 63 - 38 - 80;
});

async function renderActivationList() {
  activation.loading = true;
  const res = await getActivationCodeList(activation.params);
  activation.dataList = res.activation_codes || [];
  activation.total = res.total;
  activation.loading = false;
}

function query() {
  userParams.value.page_num = 1;
  renderUserList();
}

function reset() {
  userParams.value.key = null;
}

let userList = ref([]);
let loading = ref(true);
let tableMaxHeight = ref(0);
let isShowPwdAlert = ref(false);
let selectedRow = ref(null);

const total = ref(0);
const userParams = ref({
  page_num: 1,
  page_size: 10,
  key: null,
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
    title: '激活码数量',
    key: 'activation_code_num',
    render(row) {
      return h(
        'span',
        {
          style: {
            color: 'rgb(24, 160, 88)',
            cursor: 'pointer',
          },
          onClick: () => {
            activation.isShow = true;
            renderActivationList();
          },
        },
        row.activation_code_num
      );
    },
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
  total.value = res.total;
}

function changePage(page) {
  userParams.value.page_num = page;
  renderUserList();
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
