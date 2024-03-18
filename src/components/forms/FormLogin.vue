<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import { type ILogin } from "@/stores/auth";
import ButtonComponent from "../ui/ButtonComponent.vue";
const auth = useAuthStore();
const formLogin = ref<ILogin>({
  email: "",
  password: "",
});

function handleSubmit(e: Event) {
  e.preventDefault();
  auth.login(formLogin.value);
}
</script>

<template>
  <form
    class="bg-white w-full max-w-[360px] flex flex-col px-9 py-6 gap-2 rounded-2xl shadow-2xl"
    @submit="handleSubmit"
  >
    <p class="text-center text-xl pb-4">Login</p>

    <label class="text-sm font-medium text-zinc-500 px-2" for="email"
      >Email</label
    >

    <input
      class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
      v-model="formLogin.email"
      type="email"
      id="email"
    />
    <label class="text-sm font-medium text-zinc-500 px-2" for="password"
      >Senha</label
    >
    <input
      class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
      v-model="formLogin.password"
      type="password"
      id="password"
    />
    <ButtonComponent text="Login" />

    <p class="text-center pt-4">
      Não é registrado?
      <button
        class="text-[#FBAE39] hover:underline"
        @click="$emit('startRegister')"
      >
        Registrar-se
      </button>
    </p>
  </form>
</template>
