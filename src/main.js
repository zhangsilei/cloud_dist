import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const pcDeviceWidth = 900;

router.beforeEach((to, from, next) => {
  if (window.screen.width < pcDeviceWidth) {
    to.path = `/m${to.path}`;
  }
  next();
});

createApp(App).use(store).use(router).mount('#app');
