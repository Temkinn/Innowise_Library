import { localStorageKeys } from "@/constants";

export function getFavorites() {
  const rawFavData = localStorage.getItem(localStorageKeys.favorites);
  return rawFavData ? JSON.parse(rawFavData) : [];
}

export function isInFavorites(key) {
  const favorites = getFavorites();
  return favorites.some((b) => b.key === key);
}

export function saveFavorite(book) {
  const favorites = getFavorites();
  const isExist = favorites.some((b) => b.key === book.key);
  if (!isExist) {
    favorites.push(book);
    localStorage.setItem(localStorageKeys.favorites, JSON.stringify(favorites));
  }
}

export function removeFavorite(key) {
  const favorites = getFavorites();
  const index = favorites.findIndex((b) => b.key === key);
  if (index !== -1) {
    favorites.splice(index, 1);
    localStorage.setItem(localStorageKeys.favorites, JSON.stringify(favorites));
  }
}

export function toggleFavorite(book) {
  const isExist = isInFavorites(book.key);
  if (isExist) {
    removeFavorite(book.key);
  } else {
    saveFavorite(book);
  }
}

export function clearFavorites() {
  localStorage.removeItem(localStorageKeys.favorites);
}
