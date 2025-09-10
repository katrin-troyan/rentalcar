export const formatAddress = (address) => {
  if (!address) return { city: "", country: "" };

  const parts = address.split(",");
  const city = parts[1]?.trim() || "";
  const country = parts[2]?.trim() || "";

  return { city, country };
};