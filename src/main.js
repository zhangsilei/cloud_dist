import { createApp } from 'vue';
import App from './App.vue';
import i18n from '@/i18n';
import { getRole, getToken } from './common/cookie';
import { isAdmin, isMobile, ROLE_ADMIN, ROLE_USER } from './common/global';
import router, { commonRoutes, mRoutes, pcRoutes } from './router';
import store from './store';

router.beforeEach((to, from, next) => {
  const addRoute = () => {
    getRoutes().forEach((route) => {
      if (route.children) {
        route.children.forEach((r) => router.addRoute('home', r));
      } else {
        router.addRoute(route);
      }
      // router.addRoute(route);
    });
  };

  const getDefaultPath = () => {
    return getToken()
      ? isMobile()
        ? '/m/resource'
        : isAdmin()
        ? '/resource/manage'
        : '/resource'
      : '/signin';
  };

  const getFlatRoutes = (routes) => {
    let flatRoutes = [];

    if (isMobile()) {
      flatRoutes = routes.map((route) => route.path);
    } else {
      routes.forEach((route) => {
        if (route.children) {
          route.children.forEach((route) => {
            flatRoutes.push(route.path);
          });
        } else {
          flatRoutes.push(route.path);
        }
      });
    }
    return flatRoutes;
    // for (let i = 0; i < routes.length; i++) {
    //   const route = routes[i];
    //   if (route.children && route.children.length) {
    //     return hasRoute(route.children, route.path, flatRoutes);
    //   }
    //   flatRoutes.push(parentPath + route.path);
    //   // return to.path === route.path || to.path.substring(1) === route.path;
    // }

    // console.log(flatRoutes, 'ccccc');
    // return flatRoutes;
  };

  const hasRoute = () => {
    const routes = getRoutes();
    const flatRoutes = getFlatRoutes(routes);
    return flatRoutes.includes(to.path);
  };

  const getRoutes = () => {
    let routes = [];

    if (!getToken()) return commonRoutes;

    if (isMobile()) {
      routes = mRoutes;
    } else {
      pcRoutes.forEach((route) => {
        routes.push({
          ...route,
          children: route.children.filter((r) => r.authority === getRole()),
        });
      });
    }

    return routes.concat(commonRoutes);
  };

  // addRoute();

  // if (!hasRoute() || to.path === '/') {
  //   next(getDefaultPath());
  //   return;
  // }
  const whiteList = ['/signin', '/signup', '/res/details'];
  if (!getToken() && !whiteList.includes(to.path)) {
    next({ path: '/signin' });
    return;
  }

  if (!router.hasRoute(to.name) || to.path === '/') {
    next(getDefaultPath());
    return;
  }

  // console.log(router.getRoutes());
  next();
});

const app = createApp(i18n);

app.use(store).use(router).mount('#app');
