export const useRules = () => {
  const vEmail = (val) => {
    if (!val.trim()) return "requerido";
    else if (val.length < 5) return "Email necesita mas de 5 caracteres";
    else if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val))
      return "Email formato incorrecto";
  };

  const vPassword = (val) => {
    if (!val.trim()) return "requerido";
    else if (val.length < 6) return "Password necesita mas de 5 caracteres";
  };

  const vLinks = (val) => {
    if (!val.trim()) return "requerido";
    else if (
      !/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(
        val
      )
    )
      return "formato url invalido";

    return true;
  };

  return {
    vEmail,
    vPassword,
    vLinks,
  };
};
