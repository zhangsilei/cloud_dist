<template>
  <div class="cdkey-container">
    <div class="filter">
      <n-form
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
      </n-form>
    </div>

    <div class="actions">
      <n-button
        type="primary"
        attr-type="button"
        style="margin-bottom: 10px"
        @click="isShowCdkeyAlert = true"
      >
        新增激活码
      </n-button>
    </div>

    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="true"
      :bordered="false"
    />

    <popup-window
      v-model="isShowCdkeyAlert"
      confirm-text="创建激活码"
      @on-confirm="addCdkey"
    >
      <n-form
        ref="cdkeyFormRef"
        :model="cdkeyFormData"
        :rules="rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="激活分区" path="dist">
          <n-input v-model:value="cdkeyFormData.dist" placeholder="请选择" />
        </n-form-item>
        <n-form-item label="有效期" path="expiration">
          <n-select
            v-model:value="cdkeyFormData.expiration"
            :options="expirationOptions"
            placeholder="请选择"
          />
        </n-form-item>
        <n-form-item label="数量" path="amount">
          <n-input v-model:value="cdkeyFormData.amount" placeholder="请输入" />
        </n-form-item>
      </n-form>
    </popup-window>
  </div>
</template>

<script>
import {
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
} from 'naive-ui';
import { ref, h } from 'vue';
import PopupWindow from '@/components/pc/PopupWindow';

const TYPE_CDKEY_USED = 0;
const TYPE_CDKEY_UN_USED = 1;

export default {
  name: 'Cdkey',
  components: {
    NForm,
    NSelect,
    NFormItem,
    NInput,
    NButton,
    NDataTable,
    NInputNumber,
    PopupWindow,
  },
  watch: {
    isShowCdkeyAlert(val) {
      if (!val) {
        this.cdkeyFormData.dist = null;
        this.cdkeyFormData.expiration = null;
        this.cdkeyFormData.amount = null;
      }
    },
  },
  setup() {
    const query = () => {};
    const reset = () => {};
    const cdkeyFormRef = ref(null);
    const isShowCdkeyAlert = ref(false);
    const addCdkey = () => {
      cdkeyFormRef.value
        ?.validate((errors) => {
          if (!errors) {
            isShowCdkeyAlert.value = false;
          }
        })
        .catch((e) => {});
    };

    return {
      isShowCdkeyAlert,
      filterFormData: ref({
        dist: null,
        status: null,
        cdkey: null,
      }),
      statusOptions: [
        {
          label: '已使用',
          value: TYPE_CDKEY_USED,
        },
        {
          label: '未使用',
          value: TYPE_CDKEY_UN_USED,
        },
      ],
      query,
      reset,
      cdkeyFormRef,
      cdkeyFormData: ref({
        dist: null,
        expiration: null,
        amount: null,
      }),
      rules: {
        dist: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请选择分区',
        },
        expiration: {
          required: true,
          trigger: ['blur', 'change'],
          message: '请选择有效期',
          type: 'number',
        },
        amount: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请输入数量',
        },
      },
      expirationOptions: [
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
      ],
      addCdkey,
      columns: [
        {
          title: '编号',
          key: 'id',
        },
        {
          title: '激活码',
          key: 'code',
        },
        {
          title: '激活分区',
          key: 'category_id',
        },
        {
          title: '有效期',
          key: 'valid_duration',
        },
        {
          title: '状态',
          key: 'status',
          render(row) {
            return h(
              'span',
              {
                style: {
                  color: row.use_time ? 'red' : 'green',
                },
              },
              row.use_time ? '已使用' : '未使用'
            );
          },
        },
        {
          title: '创建时间',
          key: 'created_time',
        },
        {
          title: '用户ID',
          key: 'user_id',
          render(row) {
            return h('span', null, row.user_id || '--');
          },
        },
        {
          title: '使用时间',
          key: 'use_time',
          render(row) {
            return h('span', null, row.use_time || '--');
          },
        },
      ],
      data: [
        {
          id: '0001',
          code: '098797832',
          category_id: 'Game/Mobile game/Videos',
          valid_duration: '3个月',
          created_time: '2022.02.16 15:20:34',
          user_id: '001',
          use_time: '2022.02.16 15:20:34',
        },
        {
          id: '0001',
          code: '098797832',
          category_id: 'Game/Mobile game/Videos',
          valid_duration: '1个月',
          created_time: '2022.02.16 15:20:34',
          user_id: '',
          use_time: '',
        },
        {
          id: '0001',
          code: '098797832',
          category_id: 'Game/Mobile game/Videos',
          valid_duration: '3个月',
          created_time: '2022.02.16 15:20:34',
          user_id: '001',
          use_time: '2022.02.16 15:20:34',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cdkey-container {
  width: 100%;
  height: 100%;
}
</style>
