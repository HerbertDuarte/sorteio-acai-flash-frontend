<script setup lang="ts">
import { ref } from "vue";
import ButtonComponent from "../ui/ButtonComponent.vue";

const formRegister = ref({
  cpf: "",
  name: "",
  tel: "",
  cep: "",
  log: "",
  num: "",
  neighborhood: "",
  city: "",
});

function handleSubmit(e: Event) {
  e.preventDefault();
  console.log(formRegister.value);
}
</script>

<template>
  <form
    class="bg-white w-full max-w-[660px] flex flex-col px-9 py-6 rounded-2xl shadow-2xl m-3"
    @submit="handleSubmit"
  >
    <p class="text-center text-xl pb-4">Registre-se</p>
    <div class="flex justify-center items-center w-full gap-6">
      <div class="flex-1 flex flex-col gap-2">
        <label class="text-sm font-medium text-zinc-500 px-2" for="cpf"
          >CPF</label
        >
        <input
          class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
          v-model="formRegister.cpf"
          v-mask-cpf
          id="cpf"
          type="text"
        />
        <label class="text-sm font-medium text-zinc-500 px-2" for="name"
          >Nome</label
        >
        <input
          class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
          v-model="formRegister.name"
          id="name"
          type="text"
        />
        <label class="text-sm font-medium text-zinc-500 px-2" for="tel"
          >Telefone</label
        >
        <input
          class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
          v-model="formRegister.tel"
          v-mask-phone.br
          type="text"
          id="tel"
        />
        <label class="text-sm font-medium text-zinc-500 px-2" for="cep"
          >CEP</label
        >
        <input
          class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
          v-model="formRegister.cep"
          v-mask-cep
          type="text"
          id="cep"
        />
      </div>
      <div class="flex-1 flex flex-col gap-2">
        <label class="text-sm font-medium text-zinc-500 px-2" for="log"
          >Logradouro</label
        >
        <input
          class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
          v-model="formRegister.log"
          type="text"
          id="log"
        />
        <label class="text-sm font-medium text-zinc-500 px-2" for="num"
          >Número</label
        >
        <input
          class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
          v-model="formRegister.num"
          type="text"
          id="num"
        />
        <label class="text-sm font-medium text-zinc-500 px-2" for="neighborhood"
          >Bairro</label
        >
        <input
          class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
          v-model="formRegister.neighborhood"
          type="text"
          id="neighborhood"
        />
        <label class="text-sm font-medium text-zinc-500 px-2" for="city"
          >Cidade</label
        >
        <input
          class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm"
          v-model="formRegister.city"
          type="text"
          id="city"
        />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <ButtonComponent :maxWidth="300" text="Registrar" />
    </div>

    <p class="text-center">
      Já possui cadastro?
      <button
        class="text-[#FBAE39] hover:underline"
        @click="$emit('startLogin')"
      >
        Entrar
      </button>
    </p>
  </form>
</template>
