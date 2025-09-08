export const selectFavorites = (state) => state.favorites.favorites;
export const selectIsFavorite = (carId) => (state) =>
  state.favorites.favorites.some((item) => item.id === carId);
export const selectFavoritesCount = (state) => state.favorites.favorites.length;