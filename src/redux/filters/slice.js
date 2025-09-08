import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchCarById } from "./carsOperations";

const initialState = {
  items: [],          
  carDetails: null,   
  brand: "",          
  price: "",          
  mileageFrom: "",    
  mileageTo: "",      
  page: 1,            
  limit: 12,          
  total: 0,           
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "filters",
   initialState,
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
      state.page = 1; 
    },
    setPrice(state, action) {
      state.price = action.payload;
      state.page = 1;
    },
    setMileageFrom(state, action) {
      state.mileageFrom = action.payload;
      state.page = 1;
    },
    setMileageTo(state, action) {
      state.mileageTo = action.payload;
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    resetCars(state) {
      state.items = [];
      state.page = 1;
      state.total = 0;
      state.error = null;
    },
    resetFilters(state) {
      state.brand = "";
      state.price = "";
      state.mileageFrom = "";
      state.mileageTo = "";
      state.page = 1;
    },
  },
})

export const {
  setBrand,
  setPrice,
  setMileageFrom,
  setMileageTo,
  setPage,
  resetCars,
  resetFilters,
} = carsSlice.actions;
export const filtersReducer = slice.reducer;