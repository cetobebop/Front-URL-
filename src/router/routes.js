import { useRedirect } from "src/composables/redirect";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          auth: true,
        },
      },
      { path: "/login", component: () => import("pages/userLogin.vue") },
      {
        path: "/register",
        component: () => import("pages/RegisterPage.vue"),
      },
      {
        path: "/:shortid",
        component: () => import("pages/RedirectPage.vue"),
        meta: {
          auth: true,
        },
        beforeEnter: useRedirect,
      },
      {
        path: "/404",
        component: () => import("pages/ErrorNotFound.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
