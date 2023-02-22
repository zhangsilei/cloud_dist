<template>
  <n-page-header
    style="padding: 0 10px; border-bottom: 1px solid #eee"
    :title="title"
    @back="back"
  ></n-page-header>
</template>

<script setup>
import { NPageHeader } from 'naive-ui';

const emit = defineEmits(['back']);
const props = defineProps({
  title: {
    required: false,
    type: String,
    default: '',
  },
});

function back() {
  emit('back');
}
</script>
