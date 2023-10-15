export const useRemoveItem = (itemId, array) => {
  return array.filter((item) => item._id !== itemId);
};
