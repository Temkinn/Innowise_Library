import "./styles/globals.css";
import "./styles/styles.css";

import { searchBookAction, getFavorites } from "@/lib";

import { renderFavorites } from "@/components/render/favorite";

const SearchForm = document.getElementById("search-form");
const favorites = document.getElementById("favorites");
const favoritesCount = document.getElementById("favorites-count");

// Search book action
SearchForm.addEventListener("submit", searchBookAction);

// Favorites action
const favoritesAmount = getFavorites().length;
favoritesCount.textContent = favoritesAmount;

renderFavorites();
