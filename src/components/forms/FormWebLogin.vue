<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import LoadingComponent from "../ui/loading/LoadingComponent.vue";
import ButtonComponent from "../ui/ButtonComponent.vue";

import { validateWebLoginForm } from "@/assets/js/validators/validate-web-login-form";
import { useToast } from "../ui/toast";
import { LogInIcon } from "lucide-vue-next";

interface IWebLogin {
  cpf: string
}

const auth = useAuthStore();
const formLogin = ref<IWebLogin>({
  cpf: "",
});
const { toast } = useToast();

function removeSymbols(text: string) {
  return (text.replace(",", "")
    .replace(".", "").replace("-", "")
    .replace("(", "").replace(")", ""))
    .replace(" ", "").replace(" ", "")
    .replace(".", "")
}

function handleSubmit(e: Event) {
  e.preventDefault();
  const treatedCPF = removeSymbols(formLogin.value.cpf)
  const error = validateWebLoginForm({ cpf: treatedCPF })
  if (error) {
    toast({
      variant: "destructive",
      title: "Erro de formulário",
      description: error,
    });

    return
  }
}

</script>

<template>
  <LoadingComponent v-if="auth.isLoading" />
  <form class="bg-white w-full max-w-[360px] flex flex-col px-9 py-6 gap-2 rounded-2xl shadow-2xl"
    @submit="handleSubmit">
    <div class="flex items-center gap-2 text-[#820497]">
      <LogInIcon :size="20" :stroke-width="2.5" />
      <h1 class=" uppercase font-semibold">Login</h1>
    </div>

    <p class="pb-4 text-sm text-zinc-400">Faça o login com seu CPF para resgatar seu bilhete do sorteio <span
        class="text-[#820497]">Açaí Flash</span></p>
    <label class="text-sm font-medium text-zinc-500 px-2" for="cpf">CPF</label>
    <input v-mask-cpf class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formLogin.cpf" type="cpf"
      id="cpf" />

    <ButtonComponent text="Resgatar" />

    <p class="text-center pt-4">
      Não é registrado?
      <button class="text-[#FBAE39] hover:underline" @click="$emit('startRegister')">
        Registrar-se
      </button>
    </p>
  </form>
</template>
