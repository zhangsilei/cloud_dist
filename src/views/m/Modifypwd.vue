<template>
  <div class="modifypwd-container">
    <!-- 头部导航 -->
    <PageHeader title="Update password" @back="goBack" />
    <!-- 修改密码表单 -->
    <n-form
      class="form"
      ref="formRef"
      :model="formData"
      :rules="rules"
      :show-require-mark="false"
    >
      <n-form-item label="New Password" path="password">
        <n-input
          v-model:value="formData.password"
          type="password"
          placeholder="New Password"
        />
      </n-form-item>
      <n-form-item label="Confirm Password" path="confirmPwd">
        <n-input
          v-model:value="formData.confirmPwd"
          type="password"
          placeholder="Confirm Password"
        />
      </n-form-item>
      <n-form-item>
        <n-button class="submit" block color="rgb(237, 56, 56)" @click="submit">
          Confirm
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup>
import { createDiscreteApi, NForm, NFormItem, NInput, NButton } from 'naive-ui';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import PageHeader from '@/components/m/PageHeader';
import { getUserId } from '@/common/cookie';
import { updateUser } from '@/api/user';

const router = useRouter();
const { message } = createDiscreteApi(['message']);

// 头部导航
function goBack() {
  router.go(-1);
}

// 修改密码表单
const formRef = ref(null);
const formData = reactive({
  password: null,
  confirmPwd: null,
});
const rules = {
  password: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入密码',
  },
  confirmPwd: {
    required: true,
    trigger: ['blur', 'input'],
    message: '两次密码输入不一致',
    validator: checkSamePwd,
  },
};

function checkSamePwd(rule, val) {
  return formData.password === val;
}

function submit() {
  formRef.value
    ?.validate(async (errors) => {
      if (!errors) {
        await updateUser(getUserId(), { password: formData.password });
        message.success('Success!');
      }
    })
    .catch();
}
</script>

<style lang="scss" scoped>
.modifypwd-container {
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: left;
  .form {
    padding: 15px 30px;
    .submit {
      margin-top: 50px;
    }
  }
}
</style>
