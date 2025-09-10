export const formatMileage = (mileage) => {
  if (mileage == null) return "";
  return `${new Intl.NumberFormat("uk-UA").format(mileage)} km`;
};