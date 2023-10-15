import { api } from "src/boot/axios";

export const useAuth = () => {
  const login = async (email, password) => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });
      sessionStorage.setItem("user", "true");

      return res.data;
    } catch (error) {
      if (error.response.data.errors) throw error.response.data.errors;
      throw [error.response.data];
    }
  };

  const register = async (email, password) => {
    try {
      const res = await api.post("/auth/register", {
        email,
        password,
      });
      sessionStorage.setItem("user", "true");

      return res.data;
    } catch (error) {
      if (error.response.data.errors) return error.response.data.errors;
      return [error.response.data];
    }
  };

  return {
    login,
    register,
  };
};
