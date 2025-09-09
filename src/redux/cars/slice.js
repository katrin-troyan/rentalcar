import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarById, fetchBrands } from './operations';

const initialState = {
  cars: [],
  totalCars: 0,
  totalPages: 0,
  page: 1,
  isLastPage: false,
  isLoading: false,
  error: null,

  carDetails: null,
  isCarDetailsLoading: false,
  carDetailsError: null,

  brands: [],
  isLoadingBrands: false,
  brandsError: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    clearCars(state) {
      state.cars = [];
      state.page = 1;
      state.isLastPage = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
  
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.meta.arg.page === 1) {
        state.cars = action.payload.cars;
      } else {
        state.cars = [...state.cars, ...action.payload.cars];
      }
      state.totalCars = action.payload.totalCars;
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page; 
      state.isLastPage = action.payload.cars.length < 12;
    })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCarById.pending, state => {
        state.isCarDetailsLoading = true;
        state.carDetailsError = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isCarDetailsLoading = false;
        state.carDetails = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isCarDetailsLoading = false;
        state.carDetailsError = action.payload;
      })

      .addCase(fetchBrands.pending, state => {
        state.isLoadingBrands = true;
        state.brandsError = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoadingBrands = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.isLoadingBrands = false;
        state.brandsError = action.payload;
      });
  },
});

export const { clearCars } = carsSlice.actions;
export default carsSlice.reducer;
