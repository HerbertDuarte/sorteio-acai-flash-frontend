<script setup lang="ts">
import { ref, watch } from "vue";
import ButtonComponent from "../ui/ButtonComponent.vue";
import { validateRegisterForm } from "@/assets/js/validators/validate-register-form";
import { UserPlusIcon } from "lucide-vue-next";

const formRegister = ref({
  cpf: "",
  name: "",
  tel: "",
  city: "",
});

function removeSymbols(text: string) {
  return (text.replace(",", "")
    .replace(".", "").replace("-", "")
    .replace("(", "").replace(")", ""))
    .replace(" ", "").replace(" ", "")
    .replace(".", "")
}

function handleSubmit(e: Event) {
  e.preventDefault();
  const treatedForm = {
    ...formRegister.value, tel: removeSymbols(formRegister.value.tel),
    cpf: removeSymbols(formRegister.value.cpf),
  }

  const error = validateRegisterForm(treatedForm)
  if (error) {

  }
}

</script>

<template>
  <form class="bg-white w-full max-w-[660px] flex flex-col px-9 py-6 rounded-2xl shadow-2xl m-3" @submit="handleSubmit">
    <div class="flex items-center gap-2 text-[#820497] pb-1">
      <UserPlusIcon :size="20" :stroke-width="2.5" />
      <h1 class=" uppercase font-semibold">Registre-se</h1>
    </div>
    <p class="pb-4 text-sm text-zinc-400">Preencha os dados abaixo para registrar-se e poder participar dos sorteios do
      <span class="text-[#820497]">Açaí Flash</span></p>
    <div class="flex sm:flex-row flex-col justify-center items-center w-full gap-2 sm:gap-6">
      <div class="w-full flex flex-col gap-2 ">
        <label class="text-sm font-medium text-zinc-500 px-2" for="name">Nome</label>
        <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formRegister.name" id="name"
          type="text" />
        <label class="text-sm font-medium text-zinc-500 px-2" for="cpf">CPF</label>
        <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formRegister.cpf" v-mask-cpf id="cpf"
          type="text" />
      </div>
      <div class="w-full flex flex-col gap-2">
        <label class="text-sm font-medium text-zinc-500 px-2" for="tel">Telefone</label>
        <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formRegister.tel" v-mask-phone.br
          type="text" id="tel" />
        <label class="text-sm font-medium text-zinc-500 px-2" for="city">Cidade</label>
        <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formRegister.city" type="text"
          id="city" />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <ButtonComponent :maxWidth="300" text="Registrar" />
    </div>

    <p class="text-center">
      Já possui cadastro?
      <button class="text-[#FBAE39] hover:underline" @click="$emit('startLogin')">
        Entrar
      </button>
    </p>
  </form>
</template>
