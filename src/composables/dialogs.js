import { Dialog } from "quasar";
import { useRules } from "./inputRules";

export const useDialog = () => {
  const { vLinks } = useRules();

  const dialog = (message) => {
    Dialog.create({ title: "Error", message });
  };

  const dialogConfirm = (msg, callback) => {
    Dialog.create({
      title: "Confirmar",
      message: msg,
      cancel: true,
      persistent: true,
    }).onOk(() => {
      callback();
    });
  };

  const dialogPromp = (message, value, callback) => {
    Dialog.create({
      title: "Actualizar",
      message,
      prompt: {
        model: value,
        isValid: vLinks,
        type: "text",
      },
      cancel: true,
      persistent: true,
    })
      .onOk((data) => {
        callback(data);
      })
      .onCancel(() => {});
  };

  return {
    dialog,
    dialogConfirm,
    dialogPromp,
  };
};
