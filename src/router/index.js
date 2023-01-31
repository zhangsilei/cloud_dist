import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/views/pc/Layout.vue';
import SignIn from '@/views/pc/SignIn';
import SignUp from '@/views/pc/SignUp';
import MSignIn from '@/views/m/SignIn';

const pcRoutes = [
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
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'videos',
        name: '内容管理-视频',
        component: () => import('../views/pc/Videos.vue'),
      },
    ],
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
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
  routes: pcRoutes.concat(mRoutes),
});

export default router;
