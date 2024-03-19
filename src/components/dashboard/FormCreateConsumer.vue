<script setup lang="ts">
import { ref } from "vue";
import Input from "../ui/input/Input.vue";
import Button from "../ui/button/Button.vue";
import DialogTitle from "../ui/dialog/DialogTitle.vue";
import DialogHeader from "../ui/dialog/DialogHeader.vue";
import DialogClose from "../ui/dialog/DialogClose.vue";
import DialogDescription from "../ui/dialog/DialogDescription.vue";

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
 <form class="bg-white w-full max-w-[660px] flex flex-col px-9 py-6 rounded-2xl shadow-2xl m-3" @submit="handleSubmit">
  <DialogHeader>
   <DialogTitle class="uppercase text-md font-bold text-[#72256D]">
    Cadastrar cliente
   </DialogTitle>
   <DialogDescription>
    É necessário cadastrar o cliente para atrubuir um bilhete a ele. Caso o cliente já exista, tente cadastrar
    um bilhete usando o CPF.
   </DialogDescription>
  </DialogHeader>
  <div class="flex justify-center items-center w-full gap-2">
   <div class="flex-1 flex flex-col gap-2">
    <label class="text-sm font-medium text-zinc-500 px-2" for="cpf">CPF</label>
    <Input class="rounded-xl" v-model="formRegister.cpf" v-mask-cpf id="cpf" type="text" />
    <label class="text-sm font-medium text-zinc-500 px-2" for="name">Nome</label>
    <Input class="rounded-xl" v-model="formRegister.name" id="name" type="text" />
    <label class="text-sm font-medium text-zinc-500 px-2" for="tel">Telefone</label>
    <Input class="rounded-xl" v-model="formRegister.tel" v-mask-phone.br type="text" id="tel" />
    <label class="text-sm font-medium text-zinc-500 px-2" for="cep">CEP</label>
    <Input class="rounded-xl" v-model="formRegister.cep" v-mask-cep type="text" id="cep" />
   </div>
   <div class="flex-1 flex flex-col gap-2">
    <label class="text-sm font-medium text-zinc-500 px-2" for="log">Logradouro</label>
    <Input class="rounded-xl" v-model="formRegister.log" type="text" id="log" />
    <label class="text-sm font-medium text-zinc-500 px-2" for="num">Número</label>
    <Input class="rounded-xl" v-model="formRegister.num" type="text" id="num" />
    <label class="text-sm font-medium text-zinc-500 px-2" for="neighborhood">Bairro</label>
    <Input class="rounded-xl" v-model="formRegister.neighborhood" type="text" id="neighborhood" />
    <label class="text-sm font-medium text-zinc-500 px-2" for="city">Cidade</label>
    <Input class="rounded-xl" v-model="formRegister.city" type="text" id="city" />
   </div>
  </div>
  <div class="flex justify-end items-center gap-2">
   <DialogClose as-child>
    <Button variant="secondary" class="rounded-xl min-w-32">
     Cancelar
    </Button>
   </DialogClose>
   <Button class="rounded-xl min-w-32">
    Cadatrar
   </Button>
  </div>
 </form>
</template>
