<template>
  <n-page-header
    style="border-bottom: 1px solid #eee"
    :title="title"
    @back="back"
  >
    <template #extra>
      <slot name="extra"></slot>
    </template>
  </n-page-header>
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
