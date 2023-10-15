import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "src/boot/axios";

export const useUserStore = defineStore("userStore", () => {
  const token = ref("");
  const expiresIn = ref("");

  const refresh = async () => {
    try {
      const res = await api.post("/auth/refresh");

      token.value = res.data.token;
      expiresIn.value = res.data.expiresIn;
      sessionStorage.setItem("user", "true");
      console.log("token refrescado");
      setTime();
    } catch (error) {
      console.log(error);
      sessionStorage.removeItem("user");
    }
  };

  const setTime = () => {
    setTimeout(() => {
      refresh();
      console.log("token actualizado" + Date.now());
    }, expiresIn.value * 1000);
  };

  const logout = async () => {
    try {
      await api.get("/auth/logout");
    } catch (error) {
      console.log(error);
    } finally {
      sessionStorage.removeItem("user");
      token.value = "";
      expiresIn.value = "";
    }
  };

  return {
    token,
    expiresIn,
    refresh,
    logout,
  };
});
