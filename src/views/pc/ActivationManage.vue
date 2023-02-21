<template>
  <div class="activation-code-manage-container">
    <n-space class="filter">
      <n-form-item label-placement="left" label="激活分区">
        <n-select
          v-model:value="activationParams.category_id"
          label-field="name"
          value-field="id"
          :options="categoryListWithOneLevel"
          style="width: 150px"
          clearable
        />
      </n-form-item>
      <n-form-item label-placement="left" label="状态">
        <n-select
          v-model:value="activationParams.activated"
          :options="statusOptions"
          style="width: 150px"
          clearable
        />
      </n-form-item>
      <n-form-item label-placement="left" label="关键字">
        <n-input
          v-model:value="activationParams.key"
          placeholder="激活码"
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

    <n-space class="action">
      <n-button type="primary" @click="activation.isShow = true">
        新增激活码
      </n-button>
    </n-space>

    <!-- <n-form
        size="medium"
        label-placement="left"
        label-width="auto"
        inline
        :model="filterFormData"
      >
        <n-form-item label="激活分区">
          <n-select
            v-model:value="filterFormData.dist"
            placeholder="请选择"
            :options="statusOptions"
            style="width: 150px"
          />
        </n-form-item>
        <n-form-item label="状态">
          <n-select
            v-model:value="filterFormData.status"
            :options="statusOptions"
            placeholder="请选择"
            style="width: 150px"
          />
        </n-form-item>
        <n-form-item label="关键字">
          <n-input
            v-model:value="filterFormData.cdkey"
            placeholder="激活码"
          ></n-input>
        </n-form-item>
        <n-form-item>
          <n-button
            type="primary"
            attr-type="button"
            @click="query"
            style="margin-right: 20px"
          >
            查询
          </n-button>
          <n-button attr-type="button" @click="reset"> 重置 </n-button>
        </n-form-item>
      </n-form> -->

    <!-- <div class="actions">
      <n-button
        type="primary"
        attr-type="button"
        style="margin-bottom: 10px"
        @click="isShowCdkeyAlert = true"
      >
        新增激活码
      </n-button>
    </div> -->

    <div style="display: flex; flex-direction: column">
      <n-data-table
        :loading="loading"
        :columns="columns"
        :data="dataList"
        :bordered="false"
        :on-update:page="(page) => (activationParams.page_num = page)"
        :on-update:page-size="(size) => (activationParams.page_size = size)"
      />
      <n-pagination
        v-model:page="activationParams.page_num"
        :item-count="total"
        :on-update:page="changePage"
        style="align-self: flex-end; margin-top: 10px"
      />
    </div>

    <popup-window
      v-model="activation.isShow"
      :title="activation.title"
      @on-confirm="onActivationConfirm"
    >
      <n-form
        ref="activationRef"
        :model="activation.formData"
        :rules="activation.rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="激活分区" path="category_id">
          <n-select
            v-model:value="activation.formData.category_id"
            label-field="name"
            value-field="id"
            :options="categoryListWithOneLevel"
          />
        </n-form-item>
        <n-form-item label="有效期" path="valid_duration">
          <n-select
            v-model:value="activation.formData.valid_duration"
            :options="validDurationOptions"
          />
        </n-form-item>
        <n-form-item label="数量" path="activation_code_count">
          <n-input v-model:value="activation.formData.activation_code_count" />
        </n-form-item>
      </n-form>
    </popup-window>
  </div>
</template>

<script setup>
import {
  createDiscreteApi,
  NSelect,
  NFormItem,
  NBreadcrumbItem,
  NIcon,
  NInput,
  NForm,
  NTag,
  NSpace,
  NGrid,
  NGridItem,
  NButton,
  NInputNumber,
  NDataTable,
  NPagination,
} from 'naive-ui';
import { ref, h, reactive, watch } from 'vue';
import PopupWindow from '@/components/pc/PopupWindow';
import { getCategorieList } from '@/api/categories';
import { createActivationCode, getActivationCodeList } from '@/api/activation';
import moment from 'moment';

const { message } = createDiscreteApi(['message']);

const TYPE_USED = true;
const TYPE_UNUSED = false;
const statusOptions = [
  {
    label: '已使用',
    value: TYPE_USED,
  },
  {
    label: '未使用',
    value: TYPE_UNUSED,
  },
];
const validDurationOptions = [
  {
    label: '1个月',
    value: 30,
  },
  {
    label: '2个月',
    value: 30 * 2,
  },
  {
    label: '3个月',
    value: 30 * 3,
  },
  {
    label: '6个月',
    value: 30 * 6,
  },
  {
    label: '1年',
    value: 365,
  },
  {
    label: '2年',
    value: 365 * 2,
  },
  {
    label: '3年',
    value: 365 * 3,
  },
  {
    label: '4年',
    value: 365 * 4,
  },
];
const columns = [
  {
    title: '编号',
    key: 'activation_code.id',
  },
  {
    title: '激活码',
    key: 'activation_code.code',
  },
  {
    title: '激活分区',
    key: 'category.name',
  },
  {
    title: '有效期',
    key: 'activation_code.valid_duration',
    render(row) {
      return h('span', null, row.activation_code.valid_duration + '天');
    },
  },
  {
    title: '状态',
    key: 'status',
    render(row) {
      return h(
        'span',
        {
          style: {
            color: row.activation_code.user_id ? 'red' : 'green',
          },
        },
        row.activation_code.user_id ? '已使用' : '未使用'
      );
    },
  },
  {
    title: '创建时间',
    key: 'created_time',
    render(row) {
      return h(
        'span',
        null,
        moment(row.activation_code.created_time * 1000).format(
          'YYYY-MM-DD HH:mm:ss'
        ) || '--'
      );
    },
  },
  {
    title: '用户ID',
    key: 'user_id',
    render(row) {
      return h('span', null, row.activation_code.user_id || '--');
    },
  },
  {
    title: '使用时间',
    key: 'use_time',
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
];

let loading = ref(true);
let categoryListWithOneLevel = ref(null);

getCategoryListWithOneLevel();

async function getCategoryListWithOneLevel() {
  const res = await getCategorieList();
  categoryListWithOneLevel.value = res.items || [];
  loading.value = false;
}

const query = () => {
  activationParams.value.page_num = 1;
  renderActivationList();
};
const reset = () => {
  activationParams.value.category_id = null;
  activationParams.value.activated = null;
  activationParams.value.key = null;
};

const activationRef = ref(null);
const activation = reactive({
  isShow: false,
  title: '创建激活码',
  formData: ref({
    category_id: null,
    valid_duration: null,
    activation_code_count: null,
  }),
  rules: {
    category_id: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择分区',
      type: 'number',
    },
    valid_duration: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请选择有效期',
      type: 'number',
    },
    activation_code_count: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入数量',
    },
  },
});

function onActivationConfirm() {
  activationRef.value
    ?.validate(async (errors) => {
      if (!errors) {
        await createActivationCode({
          ...activation.formData,
          activation_code_count: parseInt(
            activation.formData.activation_code_count
          ),
        });
        activation.isShow = false;
        message.success('操作成功！');
        renderActivationList();
      }
    })
    .catch();
}

watch(
  () => activation.isShow,
  (val) => {
    if (!val) {
      for (const key in activation.formData) {
        if (Object.hasOwnProperty.call(activation.formData, key)) {
          activation.formData[key] = null;
        }
      }
    }
  }
);

const activationParams = ref({
  page_num: 1,
  page_size: 10,
  category_id: null,
  activated: null,
  key: null,
});
const total = ref(0);

const dataList = ref([]);

async function renderActivationList() {
  const res = await getActivationCodeList(activationParams.value);
  dataList.value = res.activation_codes || [];
  total.value = res.total;
}

function changePage(page) {
  activationParams.value.page_num = page;
  renderActivationList();
}

renderActivationList();

// [
//   {
//     label: '111分区',
//     value: 1,
//   },
// ];

// const TYPE_CDKEY_USED = 0;
// const TYPE_CDKEY_UN_USED = 1;

// export default {
//   name: 'CdkeyManage',
//   components: {
//     NForm,
//     NSelect,
//     NFormItem,
//     NInput,
//     NButton,
//     NDataTable,
//     NInputNumber,
//     PopupWindow,
//   },
//   watch: {
//     isShowCdkeyAlert(val) {
//       if (!val) {
//         this.cdkeyFormData.dist = null;
//         this.cdkeyFormData.expiration = null;
//         this.cdkeyFormData.amount = null;
//       }
//     },
//   },
//   setup() {
//     const query = () => {};
//     const reset = () => {};
//     const cdkeyFormRef = ref(null);
//     const isShowCdkeyAlert = ref(false);
//     const addCdkey = () => {
//       cdkeyFormRef.value
//         ?.validate((errors) => {
//           if (!errors) {
//             isShowCdkeyAlert.value = false;
//           }
//         })
//         .catch((e) => {});
//     };

//     return {
//       isShowCdkeyAlert,
//       filterFormData: ref({
//         dist: null,
//         status: null,
//         cdkey: null,
//       }),
//       statusOptions: [
//         {
//           label: '已使用',
//           value: TYPE_CDKEY_USED,
//         },
//         {
//           label: '未使用',
//           value: TYPE_CDKEY_UN_USED,
//         },
//       ],
//       query,
//       reset,
//       cdkeyFormRef,
//       cdkeyFormData: ref({
//         dist: null,
//         expiration: null,
//         amount: null,
//       }),
//       rules: {
//         dist: {
//           required: true,
//           trigger: ['blur', 'input'],
//           message: '请选择分区',
//         },
//         expiration: {
//           required: true,
//           trigger: ['blur', 'change'],
//           message: '请选择有效期',
//           type: 'number',
//         },
//         amount: {
//           required: true,
//           trigger: ['blur', 'input'],
//           message: '请输入数量',
//         },
//       },
//       expirationOptions: [
//         {
//           label: '1个月',
//           value: 30,
//         },
//         {
//           label: '2个月',
//           value: 30 * 2,
//         },
//         {
//           label: '3个月',
//           value: 30 * 3,
//         },
//         {
//           label: '6个月',
//           value: 30 * 6,
//         },
//         {
//           label: '1年',
//           value: 365,
//         },
//         {
//           label: '2年',
//           value: 365 * 2,
//         },
//         {
//           label: '3年',
//           value: 365 * 3,
//         },
//         {
//           label: '4年',
//           value: 365 * 4,
//         },
//       ],
//       addCdkey,
//       columns: [
//         {
//           title: '编号',
//           key: 'id',
//         },
//         {
//           title: '激活码',
//           key: 'code',
//         },
//         {
//           title: '激活分区',
//           key: 'category_id',
//         },
//         {
//           title: '有效期',
//           key: 'valid_duration',
//         },
//         {
//           title: '状态',
//           key: 'status',
//           render(row) {
//             return h(
//               'span',
//               {
//                 style: {
//                   color: row.use_time ? 'red' : 'green',
//                 },
//               },
//               row.use_time ? '已使用' : '未使用'
//             );
//           },
//         },
//         {
//           title: '创建时间',
//           key: 'created_time',
//         },
//         {
//           title: '用户ID',
//           key: 'user_id',
//           render(row) {
//             return h('span', null, row.user_id || '--');
//           },
//         },
//         {
//           title: '使用时间',
//           key: 'use_time',
//           render(row) {
//             return h('span', null, row.use_time || '--');
//           },
//         },
//       ],
//       data: [
//         {
//           id: '0001',
//           code: '098797832',
//           category_id: 'Game/Mobile game/Videos',
//           valid_duration: '3个月',
//           created_time: '2022.02.16 15:20:34',
//           user_id: '001',
//           use_time: '2022.02.16 15:20:34',
//         },
//         {
//           id: '0001',
//           code: '098797832',
//           category_id: 'Game/Mobile game/Videos',
//           valid_duration: '1个月',
//           created_time: '2022.02.16 15:20:34',
//           user_id: '',
//           use_time: '',
//         },
//         {
//           id: '0001',
//           code: '098797832',
//           category_id: 'Game/Mobile game/Videos',
//           valid_duration: '3个月',
//           created_time: '2022.02.16 15:20:34',
//           user_id: '001',
//           use_time: '2022.02.16 15:20:34',
//         },
//       ],
//     };
//   },
// };
//
</script>

<style lang="scss" scoped>
.activation-code-manage-container {
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  .action {
    margin-bottom: 15px;
  }
}
</style>
