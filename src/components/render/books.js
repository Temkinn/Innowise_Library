import { booksMap } from "@/constants";
import { BookCard } from "@/components";
import { toggleFavorite, getFavorites } from "@/lib";
import { renderFavorites } from "./favorite";

export function renderBooks(books) {
  const container = document.getElementById("book-list");

  container.innerHTML = books
    .map((book) => {
      booksMap.set(book.key, book);
      return BookCard(book);
    })
    .join("");
  document.addEventListener("click", handleLike);
}

const handleLike = (e) => {
  if (e.target.closest("#book-card-like-button")) {
    const button = e.target.closest("#book-card-like-button");
    const bookId = button.dataset.bookId;

    const card = button.closest(".book-card");
    const book = booksMap.get(bookId);

    toggleFavorite(book);
    renderFavorites();

    if (card) card.classList.toggle("favorite-book");
  }
};

