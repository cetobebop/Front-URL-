import { Notify } from "quasar";

export const useNotify = () => {
  const errorNotify = (msg) => {
    Notify.create({
      message: msg,
      color: "red",
    });
  };

  const successNotify = (msg) => {
    Notify.create({
      message: msg,
      color: "green",
    });
  };

  return {
    errorNotify,
    successNotify,
  };
};
