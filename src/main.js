import { createApp } from 'vue';
import App from './App.vue';
import { isMobile } from './common/global';
import router from './router';
import store from './store';

router.beforeEach((to, from, next) => {
  if (isMobile()) {
    to.path = `/m${to.path}`;
  }
  next();
});

const app = createApp(App);

app.use(store).use(router).mount('#app');
