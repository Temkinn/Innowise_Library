import "./styles/globals.css";
import "./styles/styles.css";

import {
  searchBookAction,
  getFavorites,
  saveFavorite,
  removeFavorite,
} from "@/lib";

const SearchForm = document.getElementById("search-form");
const bookList = document.getElementById("book-list");
const favorites = document.getElementById("favorites");
const favoritesCount = document.getElementById("favorites-count");

// Search book action
SearchForm.addEventListener("submit", searchBookAction);

// Favorites action
const favoritesAmount = getFavorites().length;
favoritesCount.textContent = favoritesAmount;

