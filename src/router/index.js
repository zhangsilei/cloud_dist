import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/views/pc/Layout.vue';
import SignIn from '@/views/SignIn';
import SignUp from '@/views/SignUp';
import { ROLE_ADMIN, ROLE_USER } from '@/common/global';

export const commonRoutes = [
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

export const pcRoutes = [
  {
    name: 'home',
    path: '/',
    component: Layout,
    children: [
      {
        path: '/resource',
        name: 'resource',
        authority: ROLE_USER,
        component: () => import('../views/pc/UserVideos.vue'),
      },
      {
        path: '/resource/manage',
        name: 'resourceManage',
        authority: ROLE_ADMIN,
        component: () => import('../views/pc/AdminVideos.vue'),
      },
      {
        path: '/cdkey',
        name: 'cdkey',
        authority: ROLE_ADMIN,
        component: () => import('../views/pc/Cdkey.vue'),
      },
      {
        path: '/users',
        name: 'users',
        authority: ROLE_ADMIN,
        component: () => import('../views/pc/Users.vue'),
      },
      {
        path: '/settings',
        name: 'settings',
        authority: ROLE_ADMIN,
        component: () => import('../views/pc/Settings.vue'),
      },
    ],
  },
];

export const mRoutes = [
  {
    path: '/m/resource',
    name: 'resource',
    authority: ROLE_USER,
    component: () => import('../views/m/resource.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // routes: commonRoutes.concat(isMobile() ? mRoutes : pcRoutes),
  // routes: commonRoutes,
  routes: commonRoutes.concat(mRoutes).concat(pcRoutes),
});

export default router;
