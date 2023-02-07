import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/views/pc/Layout.vue';
import SignIn from '@/views/SignIn';
import SignUp from '@/views/SignUp';
import { isAdmin, isMobile } from '@/common/global';

const commonRoutes = [
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
];

const pcRoutes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'videos',
        name: 'videos',
        component: () =>
          isAdmin
            ? import('../views/pc/AdminVideos.vue')
            : import('../views/pc/UserVideos.vue'),
      },
      {
        path: 'cdkey',
        name: 'cdkey',
        component: () => import('../views/pc/Cdkey.vue'),
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('../views/pc/Users.vue'),
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('../views/pc/Settings.vue'),
      },
    ],
  },
];

const mRoutes = [
  // {
  //   path: '/m/signin',
  //   name: 'signin',
  //   component: MSignIn,
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: commonRoutes.concat(isMobile() ? mRoutes : pcRoutes),
});

export default router;
