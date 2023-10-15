export const useClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.log(error);
  }
};
