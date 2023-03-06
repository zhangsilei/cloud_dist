<template>
  <div class="activation-container">
    <!-- 头部导航 -->
    <PageHeader
      title="Activation code"
      @back="goBack"
      style="padding: 0 10px"
    />
    <!-- 激活码表单 -->
    <n-form
      class="form"
      ref="formRef"
      :model="formData"
      :rules="rules"
      :show-require-mark="false"
    >
      <n-form-item label="Please enter an activation code." path="code">
        <n-input v-model:value="formData.code" placeholder="activation code" />
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
import { useActivationCode } from '@/api/activation';
import { createDiscreteApi, NForm, NFormItem, NInput, NButton } from 'naive-ui';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import PageHeader from '@/components/m/PageHeader';

const router = useRouter();
const { message } = createDiscreteApi(['message']);

// 头部导航
function goBack() {
  router.go(-1);
}

// 激活码表单
const formRef = ref(null);
const formData = reactive({
  code: null,
});
const rules = {
  code: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入激活码',
  },
};

function submit() {
  formRef.value
    ?.validate(async (errors) => {
      if (!errors) {
        try {
          await useActivationCode(formData.code);
          message.success('Activation Completed');
        } catch (e) {
          message.error('Invalid activation code!');
        }
      }
    })
    .catch();
}
</script>

<style lang="scss" scoped>
.activation-container {
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
