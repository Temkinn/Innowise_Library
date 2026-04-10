import "./styles.css";
import { isInFavorites } from "@/lib";

export function BookCard(book) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`
    : "/favicon.svg";

  const isFavorite = isInFavorites(book);

  return `<div class="card ${isFavorite ? "favorite-book" : ""}">
    <button id="fav-btn" data-book-id="${book.key}">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon"
      >
          <path
              d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
          />
      </svg>
    </button>

    <a href="https://openlibrary.org${book.key}" target="_blank">
      <img src="${coverUrl}" alt="${book.title}" />
    </a>

    <h3>${book.title}</h3>
    <p>${book.author_name?.[0] || "Unknown author"}</p>
    <p>${book.first_publish_year || "No date available"}</p>
  </div>`;
}
