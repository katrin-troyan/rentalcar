export const getShortNumericId = (uuid) => {
  if (!uuid) return "";
  const digits = uuid.replace(/\D/g, "");
  return digits.slice(-4);
};