export const selectCars = (state) => state.cars.cars;
export const selectTotalCars = (state) => state.cars.totalCars;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectCurrentPage = (state) => state.cars.page;
export const selectIsLoadingCars = (state) => state.cars.isLoading;
export const selectCarsError = (state) => state.cars.error;

export const selectCarDetails = (state) => state.cars.carDetails;
export const selectIsLoadingCarDetails = (state) => state.cars.isCarDetailsLoading;
export const selectCarDetailsError = (state) => state.cars.carDetailsError;

export const selectBrands = state => state.cars.brands;
export const selectIsLoadingBrands = state => state.cars.isLoadingBrands;
export const selectBrandsError = state => state.cars.brandsError;