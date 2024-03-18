<script setup lang="ts">
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import { useAuthStore } from "@/stores/auth";
import { ChevronDownIcon } from "@radix-icons/vue";
const auth = useAuthStore();
</script>

<template>
  <header
    class="bg-[#72256D] border-b-4 border-[#FBAE39] p-2 flex justify-between items-center"
  >
    <img class="h-12" src="../assets/logolaranja.png" alt="logo laranja" />
    <div>
      <div class="flex justify-between items-center gap-2 bg-white p-1 rounded">
        <div class="size-6 bg-zinc-200 flex justify-center items-center rounded-full">
          H
        </div>
        <div class="text-sm">
          Herbert Duarte
        </div>
        <ChevronDownIcon/>
      </div>
    </div>
  </header>
  <main class="flex flex-col justify-center items-center w-full">
    <h1>Home</h1>
    <RouterLink to="/about"> About </RouterLink>
    <ButtonComponent :maxWidth="200" text="Logout" @click="auth.logout" />
  </main>
</template>
