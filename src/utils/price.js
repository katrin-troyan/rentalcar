export const priceOptions = [30, 40, 50, 60, 70, 80, 100];

export function formatPrice(value) {
  return {
    listLabel: value,         
    selectedLabel: `To $${value}` 
  };
}