import { createRouter, createWebHashHistory } from 'vue-router';
import { ROLE_ADMIN, ROLE_USER } from '@/common/global';
import SignIn from '@/views/SignIn';
import SignUp from '@/views/SignUp';
import Layout from '@/views/pc/Layout.vue';

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
        component: () => import('../views/pc/Resource.vue'),
        beforeEnter: (to, from, next) => {
          if (from.path === '/resource/detail') {
            to.params.reload = true;
          }
          next();
        },
      },
      {
        path: '/resource/detail',
        name: 'resourceDetail',
        authority: ROLE_USER,
        component: () => import('../views/pc/ResourceDetail.vue'),
      },
      {
        path: '/resource/manage',
        name: 'resourceManage',
        authority: ROLE_ADMIN,
        component: () => import('../views/pc/ResourceManage.vue'),
      },
      {
        path: '/activation/manage',
        name: 'activationManage',
        authority: ROLE_ADMIN,
        component: () => import('../views/pc/ActivationManage.vue'),
      },
      {
        path: '/users/manage',
        name: 'usersManage',
        authority: ROLE_ADMIN,
        component: () => import('../views/pc/UsersManage.vue'),
      },
      {
        path: '/settings/manage',
        name: 'settingsManage',
        authority: ROLE_ADMIN,
        component: () => import('../views/pc/SettingsManage.vue'),
      },
      {
        path: '/categorie/manage',
        name: 'categorieManage',
        authority: ROLE_ADMIN,
        component: () => import('../views/pc/CategorieManage.vue'),
      },
    ],
  },
];

export const mRoutes = [
  {
    path: '/m/resource',
    name: 'mResource',
    authority: ROLE_USER,
    component: () => import('../views/m/resource.vue'),
  },
  {
    path: '/m/resource/list',
    name: 'mResourceList',
    authority: ROLE_USER,
    component: () => import('../views/m/ResourceList.vue'),
  },
  {
    path: '/m/resource/detail',
    name: 'mResourceDetail',
    authority: ROLE_USER,
    component: () => import('../views/m/ResourceDetail.vue'),
  },
  {
    path: '/m/profile',
    name: 'mProfile',
    authority: ROLE_USER,
    component: () => import('../views/m/Profile.vue'),
  },
  {
    path: '/m/modifypwd',
    name: 'mModifypwd',
    authority: ROLE_USER,
    component: () => import('../views/m/Modifypwd.vue'),
  },
  {
    path: '/m/activation',
    name: 'mActivation',
    authority: ROLE_USER,
    component: () => import('../views/m/Activation.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // routes: commonRoutes.concat(isMobile() ? mRoutes : pcRoutes),
  // routes: commonRoutes,
  routes: commonRoutes.concat(mRoutes).concat(pcRoutes),
});

export default router;
