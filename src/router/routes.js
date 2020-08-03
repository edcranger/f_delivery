import store from "../store/index";
console.log(store.getters["auth/isLoggedIn"]);

const ifAuthenticated = (to, from, next) => {
  if (store.getters["auth/isLoggedIn"]) {
    next();
    return;
  }
  next("/login");
};

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      requiresAuth: true,
    },
    beforeEnter: ifAuthenticated,
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/dashboard", component: () => import("pages/Index.vue") },
      {
        path: "/deliveries",
        props: true,
        component: () => import("pages/Deliveries.vue"),
      },
      {
        path: "/delivery-profile",
        props: true,
        component: () => import("pages/DeliveryProfile.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("layouts/Login.vue"),
  },
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue"),
  });
}

export default routes;
