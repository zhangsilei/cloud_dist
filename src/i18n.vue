<template>
  <n-config-provider
    style="width: 100%; height: 100%"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <app />
  </n-config-provider>
</template>

<script setup>
import App from './App.vue';
import { NConfigProvider } from 'naive-ui';
import { zhCN, dateZhCN } from 'naive-ui';
</script>
