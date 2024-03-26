import { ref, watch } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "@/components/ui/toast/use-toast";
export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", () => {
  const accessToken = ref<string | undefined>("");
  const isAuthenticated = ref<boolean>(false);
  const user = ref<IUser | undefined>(undefined);
  const isLoading = ref<boolean>(false);
  const api = axios.create({
    baseURL: "http://localhost:3333",
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
      const { data } = await api.post("/user/auth", body);
      const newUser: IUser = data.user;
      accessToken.value = data.access_token;
      user.value = newUser;
      localStorage.setItem("user", JSON.stringify(newUser));
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
