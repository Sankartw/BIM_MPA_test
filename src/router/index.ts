import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/test",
    name: "Test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("@/views/Test.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach(async (to, _from, next) => {
  //檢查或嘗試取得token，否則取得登入url
  const { valid, url } = await store.dispatch('checkToken') as { valid: boolean, url?: string };
  if (!valid) {
    location.assign(url!);
    return;
  }
  //檢查路由權限
  // if (to.meta && to.meta.permission) {
  //   const roles = (store.getters.identity as Identity).roles
  //   let hasP = false;
  //   if (roles) {
  //     roles.forEach(role => {
  //       (role.includes('Admin') || role.includes('SafeCheck') ) && (hasP = true);
  //     })
  //     !hasP && await store.dispatch('logout');
  //   }
  //   if (!roles.includes(to.meta.permission)) {
  //     next("Unauthorized");
  //     return;
  //   }
  // }
  next();
});

export default router;
