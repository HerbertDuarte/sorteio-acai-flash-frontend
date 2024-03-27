import ConsumerView from "@/views/ConsumerView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import ProfileView from "@/views/ProfileView.vue";
import UserView from "@/views/UserView.vue";
import WebView from "@/views/WebView.vue";

export const routes = [

  {
    path: "/",
    name: "login",
    component: LoginView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/web",
    name: "web",
    component: WebView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/consumer",
    name: "consumer",
    component: ConsumerView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    meta: {
      requiresAuth: true,
    },
  },
];
