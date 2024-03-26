<script setup lang="ts">
import FormLogin from "@/components/forms/FormLogin.vue";
import FormRegister from "@/components/forms/FormRegister.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const isRegisting = ref(false);

function startRegister() {
  isRegisting.value = true;
}

function startLogin() {
  isRegisting.value = false;
}

onMounted(() => {
  useRouter().push("/")
})
</script>
<template>
  <main class="bg-[#FCF2FD] h-dvh bg-frutas bg-center bg-cover">
    <img class="absolute bottom-0 right-0 w-56 sm:w-64" src="../assets/images/logo-rosa.png"
      alt="logo açaí flash na cor rosa" />
    <div class="bg-white/10 size-full flex justify-center items-center">
      <FormLogin v-if="!isRegisting" @start-register="startRegister" />
      <FormRegister v-if="isRegisting" @start-login="startLogin" />
    </div>
  </main>
</template>
