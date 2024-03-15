<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { type ILogin } from "@/stores/auth";
import { ref } from "vue";
const auth = useAuthStore();
const isRegisting = ref(false);

const formLogin = ref<ILogin>({
  email: "",
  password: "",
});

const formRegister = ref({
  cpf: "",
  name: "",
  tel: "",
  cep: "",
  log: "",
  num: "",
  bairro: "",
  city: "",
});

function handleSubmit(e: Event) {
  e.preventDefault();
  auth.login(formLogin.value);
}

function startRegister() {
  isRegisting.value = true;
}

function startLogin() {
  isRegisting.value = false;
}
</script>
<template>
  <main class="bg-[#FCF2FD] h-dvh bg-frutas bg-center bg-cover">
    <img
      class="absolute bottom-0 right-0 w-56 sm:w-64"
      src="../assets/logo-rosa.png"
      alt="logo açaí flash na cor rosa"
    />
    <div class="bg-white/10 size-full flex justify-center items-center">
      <form
        v-if="!isRegisting"
        class="bg-white w-full max-w-[360px] flex flex-col px-9 py-6 gap-2 rounded-2xl shadow-2xl"
        @submit="handleSubmit"
      >
        <p class="text-center text-xl pb-4">Login</p>

        <label class="text-sm font-medium text-zinc-500 px-2" for="password"
          >Usuário</label
        >

        <input
          class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
          v-model="formLogin.email"
          type="email"
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
        <button
          class="bg-[#A438A8] bg-gradient-to-t from-[#78297a] hover:opacity-80 rounded-3xl p-3 my-6 text-sm font-medium text-white"
        >
          LOGIN
        </button>

        <p class="text-center pt-4">
          Não é registrado?
          <button class="text-[#FBAE39] hover:underline" @click="startRegister">
            Registrar-se
          </button>
        </p>
      </form>

      <form
        v-if="isRegisting"
        class="bg-white w-full max-w-[660px] flex flex-col px-9 py-6 rounded-2xl shadow-2xl m-3"
        @submit="handleSubmit"
      >
        <p class="text-center text-xl pb-4">Registre-se</p>
        <div class="flex justify-center items-center w-full gap-6">
          <div class="flex-1 flex flex-col gap-2">
            <label class="text-sm font-medium text-zinc-500 px-2" for="password"
              >CPF</label
            >
            <input
              class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
              v-model="formRegister.cpf"
              type="text"
            />
            <label class="text-sm font-medium text-zinc-500 px-2" for="password"
              >Nome</label
            >
            <input
              class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
              v-model="formRegister.name"
              type="email"
            />
            <label class="text-sm font-medium text-zinc-500 px-2" for="password"
              >Telefone</label
            >
            <input
              class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
              v-model="formRegister.tel"
              type="email"
            />
            <label class="text-sm font-medium text-zinc-500 px-2" for="password"
              >CEP</label
            >
            <input
              class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
              v-model="formRegister.cep"
              type="password"
              id="password"
            />
          </div>
          <div class="flex-1 flex flex-col gap-2">
            <label class="text-sm font-medium text-zinc-500 px-2" for="password"
              >Logradouro</label
            >
            <input
              class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
              v-model="formRegister.log"
              type="text"
            />
            <label class="text-sm font-medium text-zinc-500 px-2" for="password"
              >Número</label
            >
            <input
              class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
              v-model="formRegister.num"
              type="email"
            />
            <label class="text-sm font-medium text-zinc-500 px-2" for="password"
              >Bairro</label
            >
            <input
              class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
              v-model="formRegister.bairro"
              type="email"
            />
            <label class="text-sm font-medium text-zinc-500 px-2" for="password"
              >Cidade</label
            >
            <input
              class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
              v-model="formRegister.city"
              type="password"
              id="password"
            />
          </div>
        </div>
        <div class="flex justify-center items-center">
          <button
            class="bg-[#A438A8] bg-gradient-to-t from-[#78297a] hover:opacity-80 rounded-3xl p-3 my-6 text-sm font-medium text-white w-full max-w-64"
          >
            REGISTRAR
          </button>
        </div>

        <p class="text-center">
          Já possui cadastro?
          <button class="text-[#FBAE39] hover:underline" @click="startLogin">
            Entrar
          </button>
        </p>
      </form>
    </div>
  </main>
</template>
