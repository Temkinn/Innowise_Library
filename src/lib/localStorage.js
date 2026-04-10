export function getFavorites() {
  const raw = localStorage.getItem("favorites");
  return raw ? JSON.parse(raw) : [];
}

export function saveFavorite(book) {
  const favorites = getFavorites();
  const exists = favorites.some((b) => b.key === book.key);
  if (!exists) {
    favorites.push(book);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}