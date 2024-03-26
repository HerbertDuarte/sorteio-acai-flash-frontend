<script setup lang="ts">
import { RouterView } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { onMounted } from "vue"
import LoginView from "@/views/LoginView.vue";
import HeaderComponent from "./components/layout/HeaderComponent.vue";
import Toaster from '@/components/ui/toast/Toaster.vue'
import UserView from "./views/UserView.vue";
const auth = useAuthStore()

onMounted(() => {
  auth.verifyLogin()
})

</script>

<template>
  <Toaster />
  <LoginView v-if="!auth.isAuthenticated" />
  <HeaderComponent v-if="auth.isAuthenticated" />
  <RouterView v-if="auth.isAuthenticated" />
</template>