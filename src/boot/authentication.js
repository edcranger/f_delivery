// "async" is optional
export default async ({ store, router }) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters["auth/isLoggedIn"]) {
        next("/login");
      }
    } else {
      next();
    }
  });
};
