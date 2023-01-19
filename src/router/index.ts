import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";

export const homeRoute: RouteRecordRaw = {
  path: "/",
  component: () => import("../components/triggerAuth.vue"),
  name: "home",
};

export const authRoute: RouteRecordRaw = {
  path: "/authenticate",
  component: () => import("../components/receiveAuth.vue"),
  name: "authenticate",
};
const routes: RouteRecordRaw[] = [homeRoute, authRoute];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

const route = router.resolve(authRoute);
export const redirectUri = new URL(route.href, window.location.origin).href;