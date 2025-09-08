import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  try {
    const serialized = localStorage.getItem("favorites");
    if (serialized === null) return [];
    return JSON.parse(serialized);
  } catch {
    return [];
  }
};

const saveFavorites = (favorites) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch {}
};

const initialState = {
  favorites: loadFavorites(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action) {
      const car = action.payload;
      const exists = state.favorites.find((item) => item.id === car.id);
      if (!exists) {
        state.favorites.push(car);
        saveFavorites(state.favorites); 
      }
    },
    removeFavorite(state, action) {
      const carId = action.payload;
      state.favorites = state.favorites.filter((item) => item.id !== carId);
      saveFavorites(state.favorites); 
    },
    clearFavorites(state) {
      state.favorites = [];
      saveFavorites(state.favorites);
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;