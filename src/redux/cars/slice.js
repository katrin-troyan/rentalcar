import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchCarById } from "./operations";

const initialState = {
  cars: [],
  totalCars: 0,
  totalPages: 0,
  page: 1,
  isLoading: false,
  error: null,
  carDetails: null,
  isCarDetailsLoading: false,
  carDetailsError: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearCarDetails(state) {
      state.carDetails = null;
      state.carDetailsError = null;
      state.isCarDetailsLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload.cars;
        state.totalCars = action.payload.totalCars;
        state.totalPages = action.payload.totalPages;
        state.page = action.payload.page;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


      .addCase(fetchCarById.pending, (state) => {
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
      });
  },
});

export const { clearCarDetails } = carsSlice.actions;
export default carsSlice.reducer;