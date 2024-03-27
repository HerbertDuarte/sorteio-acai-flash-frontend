import {
  createRouter,
  createWebHistory,
  type NavigationGuardWithThis,
} from "vue-router";
import { routes } from "./routes";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore();
  const isAuthenticated = auth.isAuthenticated;
  console.log(to.meta.requiresAuth, isAuthenticated);

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "login" });
  } else if (!to.meta.requiresAuth && isAuthenticated) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
