<template>
  <div class="settings-manage-container">
    <div class="website">
      <n-form
        ref="websiteFormRef"
        :model="websiteFormData"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="网站名称">
          <n-input
            v-model:value="websiteFormData.name"
            placeholder="请输入网站名称"
          />
        </n-form-item>
        <n-form-item label="logo">
          <n-upload
            multiple
            directory-dnd
            action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            :max="5"
          >
            <n-upload-dragger>
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <add />
                </n-icon>
              </div>
              <n-text style="font-size: 16px"> 上传图片 </n-text>
              <n-p depth="3" style="margin: 8px 0 0 0">
                (图片大小不超过1M）
              </n-p>
            </n-upload-dragger>
          </n-upload>
        </n-form-item>
        <n-form-item>
          <n-button type="primary" @click="save"> 保存 </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script>
import { Add } from '@vicons/ionicons5';
import {
  NIcon,
  NInput,
  NForm,
  NFormItem,
  NUpload,
  NUploadDragger,
  NText,
  NP,
  NButton,
} from 'naive-ui';
import { ref } from 'vue';

export default {
  name: 'SettingsManage',
  components: {
    NIcon,
    NInput,
    NForm,
    NFormItem,
    NUpload,
    NUploadDragger,
    NText,
    NP,
    NButton,
  },
  setup() {
    const websiteFormRef = ref(null);
    const websiteFormData = ref({
      name: '',
    });
    const save = () => {};

    return {
      Add,
      websiteFormRef,
      websiteFormData,
      save,
    };
  },
};
</script>

<style lang="scss" scoped>
.settings-manage-container {
  .website {
    max-width: 400px;
  }
}
</style>
