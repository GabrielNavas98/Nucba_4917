export const capitaliza = (string) => {
  if (!string) return "";
  return string.toUpperCase();
};

export const reverseString = (string) => {
  return string.split("").reverse().join("");
};
