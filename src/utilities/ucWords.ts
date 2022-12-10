export const ucWords = (str) => {
  return (str + "").replace(/^([a-z])|\s+([a-z])/g, ($1) => {
    return $1.toUpperCase();
  });
};
