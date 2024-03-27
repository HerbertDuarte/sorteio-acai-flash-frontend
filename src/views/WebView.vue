<script setup lang="ts">
import FormWebLogin from "@/components/forms/FormWebLogin.vue";
import FormWebRegister from "@/components/forms/FormWebRegister.vue";
import { ref } from "vue";
const isRegisting = ref(false);

function startRegister() {
  isRegisting.value = true;
}

function startLogin() {
  isRegisting.value = false;
}

</script>
<template>
  <main class="bg-[#FCF2FD] h-dvh bg-frutas bg-center bg-cover">
    <img class="md:block hidden absolute bottom-0 right-0 w-56 sm:w-64" src="../assets/images/logo-rosa.png"
      alt="logo açaí flash na cor rosa" />
    <div class="bg-white/10 size-full flex justify-center items-center">
      <FormWebLogin v-if="!isRegisting" @start-register="startRegister" />
      <FormWebRegister v-if="isRegisting" @start-login="startLogin" />
    </div>
  </main>
</template>
