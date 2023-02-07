<template>
  <div class="users-container">
    <div class="filter">
      <n-form
        size="medium"
        label-placement="left"
        label-width="auto"
        inline
        :model="filterFormData"
      >
        <n-form-item label="关键字">
          <n-input
            v-model:value="filterFormData.query"
            placeholder="用户名/用户ID/激活码"
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

    <n-data-table
      :columns="columns"
      :data="data"
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

<script>
import { NFormItem, NInput, NForm, NButton, NDataTable } from 'naive-ui';
import { ref, h, onMounted } from 'vue';
import PopupWindow from '@/components/pc/PopupWindow.vue';
import { getUserList } from '@/api/user';

export default {
  name: 'Users',
  components: { NFormItem, NInput, NForm, NButton, NDataTable, PopupWindow },
  setup() {
    const filterFormData = ref({
      query: '',
    });
    const isShowPwdAlert = ref(false);
    const query = () => {};
    const reset = () => {};
    const resetPwd = () => {
      // TODO: 重置密码接口
      isShowPwdAlert.value = false;
    };
    const data = (async () => {
      const res = await getUserList();
      debugger;
    })();
    // [
    //   {
    //     id: '1',
    //     user_id: '0001',
    //     user_name: '张三',
    //     user_type: 1,
    //   },
    //   {
    //     id: '2',
    //     user_id: '0002',
    //     user_name: '李四',
    //     user_type: 2,
    //   },
    // ];

    // onMounted(() => {
    //   data = getUserList();
    // })

    return {
      filterFormData,
      query,
      reset,
      columns: [
        {
          title: '编号',
          key: 'id',
        },
        {
          title: '用户ID',
          key: 'user_id',
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
          render() {
            return h(
              'div',
              { style: { color: '#18a058', cursor: 'pointer' } },
              [
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
                  { onClick: () => (isShowPwdAlert.value = true) },
                  '重置密码'
                ),
              ]
            );
          },
        },
      ],
      data: [
        {
          id: '1',
          user_id: '0001',
          user_name: '张三',
          user_type: 1,
        },
        {
          id: '2',
          user_id: '0002',
          user_name: '李四',
          user_type: 2,
        },
      ],
      isShowPwdAlert,
      resetPwd,
    };
  },
};
</script>
