import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/apiClient";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ brand, price, mileageFrom, mileageTo, page = 1, limit = 12 }, thunkAPI) => {
    try {
      const params = {
        page,
        limit,
      };

      if (brand) params.brand = brand;
      if (price) params.price = price;
      if (mileageFrom) params.mileageFrom = mileageFrom;
      if (mileageTo) params.mileageTo = mileageTo;

      const data = await apiClient.get("/cars", { params });
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id, thunkAPI) => {
    try {
      const data = await apiClient.get(`/cars/${id}`);
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBrands = createAsyncThunk(
  "cars/fetchBrands",
  async (_, thunkAPI) => {
    try {
      const brands = await apiClient.get("/brands");
      return brands; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);