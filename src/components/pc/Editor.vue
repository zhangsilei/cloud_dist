<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" />
    <Editor
      style="height: 300px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeUnmount, shallowRef, onMounted } from 'vue';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { getToken } from '@/common/cookie';

const emit = defineEmits(['onChange']);
const props = defineProps({
  html: {
    required: true,
    type: String,
    default: '',
  },
});

//富文本编辑器
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
const valueHtml = ref(props.html);
const editorConfig = {
  placeholder: '请输入内容...',
  MENU_CONF: {
    uploadImage: {
      server: 'http://140.210.213.108/',
      headers: {
        token: getToken(),
      },
      fieldName: 'picture',
    },
  },
};

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const handleChange = (editor) => {
  const html = editor.getHtml();
  emit('onChange', html);
};
</script>
