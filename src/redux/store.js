import { configureStore } from "@reduxjs/toolkit";

import carsReducer from "./cars/slice";
import filtersReducer from "./filters/slice";
import favoritesReducer from "./favorites/slice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});

export default store;