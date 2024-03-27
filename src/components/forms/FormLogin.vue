<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import { type ILogin } from "@/stores/auth";
import LoadingComponent from "../ui/loading/LoadingComponent.vue";
import ButtonComponent from "../ui/ButtonComponent.vue";
import {LogInIcon} from "lucide-vue-next"
import { validateLoginForm } from "@/assets/js/validators/validate-login-form";
import { useToast } from "../ui/toast";

const auth = useAuthStore();
const formLogin = ref<ILogin>({
  username: "",
  password: "",
});
const { toast } = useToast();

function handleSubmit(e: Event) {
  e.preventDefault();


  const error = validateLoginForm(formLogin.value)
  if (error) {
    toast({
      variant: "destructive",
      title: "Erro de formulário",
      description: error,
    });

    return
  }
  auth.login(formLogin.value);
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
    <p class="pb-4 pl-1 text-sm text-zinc-400">Faça o login para acessar o painel administrativo do
      <span class="text-[#820497]">Açaí Flash</span></p>
    <label class="text-sm font-medium text-zinc-500 px-2" for="username">Usuário</label>
    <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formLogin.username" type="username"
      id="username" />
    <label class="text-sm font-medium text-zinc-500 px-2" for="password">Senha</label>
    <input class="bg-zinc-200 p-3 rounded-3xl outline-none text-sm" v-model="formLogin.password" type="password"
      id="password" />
    <ButtonComponent text="Login" />
  </form>
</template>
