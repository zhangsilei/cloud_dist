<template>
  <div class="settings-manage-container">
    <div class="website">
      <n-form
        ref="websiteFormRef"
        :model="settingsData"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
      >
        <n-form-item label="网站名称">
          <n-input
            v-model:value="settingsData.name.value"
            placeholder="请输入网站名称"
          />
        </n-form-item>
        <n-form-item label="logo">
          <n-upload directory-dnd @change="onUpload">
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
        <n-form-item label="当前logo图片">
          <n-image v-if="logoUrl" width="100" :src="logoUrl"></n-image>
        </n-form-item>
        <n-form-item>
          <n-button type="primary" @click="save"> 保存 </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script setup>
import { Add } from '@vicons/ionicons5';
import {
  createDiscreteApi,
  NIcon,
  NInput,
  NForm,
  NFormItem,
  NUpload,
  NUploadDragger,
  NText,
  NP,
  NButton,
  NImage,
} from 'naive-ui';
import { ref, reactive } from 'vue';
import { getSettingConfigs, updateSettingConfigs } from '@/api/setting';
import { parseUrlToPath } from '@/common/global';
import { postPicture } from '@/api/file';

const { message, dialog } = createDiscreteApi(['message', 'dialog']);

const KEY_NAME = 'name';
const KEY_LOGO = 'logo';
const websiteFormRef = ref(null);
const settingsData = reactive({
  name: {
    id: 1,
    value: null,
  },
  logo: {
    id: 2,
    value: ref(null),
  },
});
const logoUrl = ref('');

async function save() {
  if (settingsData.name.value) {
    await updateSettingConfigs(settingsData.name.id, {
      value: settingsData.name.value,
      // key: KEY_NAME,
    });
  }
  if (settingsData.logo.value) {
    await updateSettingConfigs(settingsData.logo.id, {
      value: settingsData.logo.value,
      // key: KEY_LOGO,
    });
  }
  message.success('操作成功！');
}

async function render() {
  const res = await getSettingConfigs();
  const dataList = res.system_configs || [];
  if (dataList.length) {
    const nameSetting = dataList.find((item) => item.key === KEY_NAME);
    const logoSetting = dataList.find((item) => item.key === KEY_LOGO);
    if (nameSetting) {
      // settingsData.name.id = nameSetting.id;
      settingsData.name.value = nameSetting.value;
    }
    if (logoSetting) {
      // settingsData.logo.id = logoSetting.id;
      settingsData.logo.value = logoSetting.value;
      logoUrl.value = parseUrlToPath(logoSetting.value);
    }
  }
}

const uplodFile = ref(null);

function onUpload({ file }) {
  uplodFile.value = file;
  file.status = 'uploading';
  file.percentage = 0;
  const timer = setInterval(() => {
    if (uplodFile.value.status === 'finished') {
      clearInterval(timer);
      return;
    }
    uplodFile.value.percentage += Math.random() * 30;
  }, 1000);
  postPicture(file).then(({ url }) => {
    settingsData.logo.value = url;
    logoUrl.value = parseUrlToPath(url);
    uplodFile.value.percentage = 100;
    setTimeout(() => {
      uplodFile.value.status = 'finished';
    }, 0);
  });
}

render();
</script>

<style lang="scss" scoped>
.settings-manage-container {
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  .website {
    max-width: 400px;
  }
}
</style>
