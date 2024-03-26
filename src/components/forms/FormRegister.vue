<script setup lang="ts">
import { ref, watch } from "vue";
import ButtonComponent from "../ui/ButtonComponent.vue";
import { validateRegisterForm } from "@/assets/js/validators/validate-register-form";

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
const treatedForm = ref({
  cpf: "",
  name: "",
  tel: "",
  cep: "",
  log: "",
  num: "",
  neighborhood: "",
  city: "",
})

const formValid = ref(false)

function removeSymbols(text: string) {
  return (text.replace(",", "")
  .replace(".","").replace("-", "")
  .replace("(", "").replace(")", ""))
  .replace(" ", "").replace(" ","")
  .replace(".", "")
}

function handleSubmit(e: Event) {
  e.preventDefault();
  console.log(treatedForm.value);
}

watch(()=> formRegister.value,()=>{
  treatedForm.value = { 
    ...formRegister.value, tel: removeSymbols(formRegister.value.tel), 
    cpf: removeSymbols(formRegister.value.cpf), 
    cep: removeSymbols(formRegister.value.cep) 
  }

  formValid.value = validateRegisterForm(treatedForm.value)
},{deep:true})
</script>

<template>
  <form class="bg-white w-full max-w-[660px] flex flex-col px-9 py-6 rounded-2xl shadow-2xl m-3" @submit="handleSubmit">
    <p class="text-center text-xl pb-4">Registre-se</p>
    <div class="flex justify-center items-center w-full gap-6">
      <div class="flex-1 flex flex-col gap-2">
        <label class="text-sm font-medium text-zinc-500 px-2" for="cpf">CPF</label>
        <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formRegister.cpf" v-mask-cpf id="cpf"
          type="text" />
        <label class="text-sm font-medium text-zinc-500 px-2" for="name">Nome</label>
        <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formRegister.name" id="name"
          type="text" />
        <label class="text-sm font-medium text-zinc-500 px-2" for="tel">Telefone</label>
        <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formRegister.tel" v-mask-phone.br
          type="text" id="tel" />
        <label class="text-sm font-medium text-zinc-500 px-2" for="cep">CEP</label>
        <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formRegister.cep" v-mask-cep
          type="text" id="cep" />
      </div>
      <div class="flex-1 flex flex-col gap-2">
        <label class="text-sm font-medium text-zinc-500 px-2" for="log">Logradouro</label>
        <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formRegister.log" type="text"
          id="log" />
        <label class="text-sm font-medium text-zinc-500 px-2" for="num">Número</label>
        <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formRegister.num" type="text"
          id="num" />
        <label class="text-sm font-medium text-zinc-500 px-2" for="neighborhood">Bairro</label>
        <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formRegister.neighborhood" type="text"
          id="neighborhood" />
        <label class="text-sm font-medium text-zinc-500 px-2" for="city">Cidade</label>
        <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formRegister.city" type="text"
          id="city" />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <ButtonComponent :isActive="formValid" :maxWidth="300" text="Registrar" />
    </div>

    <p class="text-center">
      Já possui cadastro?
      <button class="text-[#FBAE39] hover:underline" @click="$emit('startLogin')">
        Entrar
      </button>
    </p>
  </form>
</template>
