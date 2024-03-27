<script setup lang="ts">
import { ref } from 'vue';
import Button from '../ui/button/Button.vue';
import Input from '../ui/input/Input.vue';
import Checkbox from '../ui/checkbox/Checkbox.vue';
const props = defineProps(["user"])
const editPassword = ref(false)
const formEditUser = ref({
 nome: props?.user?.nome,
 email: props?.user?.email,
 login: props?.user?.login,
 oldPassword: "",
 newPassword: "",
 confirmNewPassword: "",
})

</script>
<template>
 <form class="w-full flex flex-col justify-center items-start">
  <label class="text-sm font-medium text-zinc-500 pb-1 pl-1" for="name">Nome</label>
  <Input class=" text-sm w-full mb-3 rounded-xl" v-model="formEditUser.nome" id="name" type="text" />

  <label class="text-sm font-medium text-zinc-500 pb-1 pl-1" for="email">Email</label>
  <Input class=" text-sm w-full mb-3 rounded-xl" v-model="formEditUser.email" id="email" type="email" />

  <label class="text-sm font-medium text-zinc-500 pb-1 pl-1" for="login">Login</label>
  <Input class=" text-sm w-full mb-3 rounded-xl" v-model="formEditUser.login" id="login" type="text" />

  <div class="flex items-center gap-1 pb-6 pt-2 pl-1">
   <Checkbox v-model:checked="editPassword" id="editPassword"/>
   <label class="text-sm font-medium text-zinc-500" for="editPassword">Editar senha</label>
  </div>
  <div v-if="editPassword" class="w-full">
   <label class="text-sm font-medium text-zinc-500 pb-1 pl-1" for="oldPassword">Senha atual</label>
   <Input class=" text-sm w-full mb-3 rounded-xl" v-model="formEditUser.oldPassword" id="oldPassword" type="password" />
   <label class="text-sm font-medium text-zinc-500 pb-1 pl-1" for="oldPassword">Nova senha</label>
   <Input class=" text-sm w-full mb-3 rounded-xl" v-model="formEditUser.newPassword" id="oldPassword" type="password" />
   <label class="text-sm font-medium text-zinc-500 pb-1 pl-1" for="oldPassword">Confirmação nova senha</label>
   <Input class=" text-sm w-full mb-3 rounded-xl" v-model="formEditUser.confirmNewPassword" id="oldPassword"
    type="password" />
  </div>

  <div class="space-x-2 pt-4">
   <Button @click="$router.push('/')" variant="secondary" class="rounded-xl">
    Voltar
   </Button>
   <Button class="rounded-xl">
    Atualizar
   </Button>
  </div>
 </form>
</template>