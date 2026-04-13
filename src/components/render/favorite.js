import { FavoriteCard } from "@/components";
import { getFavorites, removeFavorite } from "@/lib";

export function renderFavorites() {
  const container = document.getElementById("favorites");
  const favoritesCount = document.getElementById("favorites-count");

  const favorites = getFavorites();

  favoritesCount.textContent = favorites.length;

  if (!favorites.length) {
    container.innerHTML = "<p>No favorites yet</p>";
    return;
  }

  container.innerHTML = favorites
    .map((favorite) => {
      return FavoriteCard(favorite);
    })
    .join("");
  document.addEventListener("click", handleLike);
}

const handleLike = (e) => {
  if (e.target.closest("#favorite-card-like-button")) {
    const button = e.target.closest("#favorite-card-like-button");
    const bookId = button.dataset.bookId;

    removeFavorite(bookId);
    renderFavorites();

    const card = document.querySelector(`.book-card[data-book-id="${bookId}"]`);
    if (card) card.classList.toggle("favorite-book");
  }
};
