import { ref, watch } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "@/components/ui/toast/use-toast";

export type Nivel = "Master" | "Administrador";
export type Situacao = "Ativo" | "Inativo";

export interface IUser {
  id: string;
  email: string;
  createdAt: string;
  deletedAt?: null;
  login: string;
  nivel: Nivel;
  nome: string;
  situacao: Situacao;
  updatedAt: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", () => {
  const accessToken = ref<string | undefined>("");
  const isAuthenticated = ref<boolean>(false);
  const user = ref<IUser | undefined>(undefined);
  const isLoading = ref<boolean>(false);
  const api_url = process.env.API_URL as string;
  const api = axios.create({
    baseURL: api_url,
  });

  const { toast } = useToast();

  function verifyLogin(): void {
    if (localStorage.getItem("access_token") !== null) {
      /* lógica de request de login para confirmar o login do usuario */
      const previusToken: string = String(localStorage.getItem("access_token"));
      accessToken.value = previusToken;
      if (localStorage.getItem("user") !== null) {
        /* lógica de request de login para confirmar o login do usuario */
        const userLogged: IUser = JSON.parse(
          String(localStorage.getItem("user"))
        );
        user.value = userLogged;
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");
      }
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
    }
  }

  async function login(body: ILogin): Promise<void> {
    try {
      isLoading.value = true;
      const { data } = await api.post("/auth/login", body);
      const newUser: IUser = data.user;
      accessToken.value = data.access_token;
      user.value = newUser;
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Erro de autenticação",
        description: "Email e/ou senha incorretos.",
      });
    } finally {
      isLoading.value = false;
    }
  }

  function logout(): void {
    isLoading.value = true;
    user.value = undefined;
    accessToken.value = undefined;
    isLoading.value = false;
  }

  watch(user, () => {
    if (user.value) {
      isAuthenticated.value = true;
      localStorage.setItem("user", JSON.stringify(user.value));
    } else {
      isAuthenticated.value = false;
      localStorage.removeItem("user");
    }
  });

  watch(accessToken, () => {
    if (accessToken.value) {
      isAuthenticated.value = true;
      localStorage.setItem("access_token", accessToken.value);
    } else {
      isAuthenticated.value = false;
      localStorage.removeItem("access_token");
    }
  });

  return {
    isAuthenticated,
    user,
    login,
    logout,
    verifyLogin,
    accessToken,
    api,
    isLoading,
  };
});
