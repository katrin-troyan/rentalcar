export const formatMileage = (value) => {
  if (!value) return "";
  return new Intl.NumberFormat("en-US").format(value);
};

export const parseNumberInput = (value) => value.replace(/\s/g, '');