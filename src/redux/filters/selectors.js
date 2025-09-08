export const selectBrand = (state) => state.filters.brand;
export const selectPrice = (state) => state.filters.price;
export const selectMileageFrom = (state) => state.filters.mileageFrom;
export const selectMileageTo = (state) => state.filters.mileageTo;
export const selectAllFilters = (state) => ({
  brand: state.filters.brand,
  price: state.filters.price,
  mileageFrom: state.filters.mileageFrom,
  mileageTo: state.filters.mileageTo,
});