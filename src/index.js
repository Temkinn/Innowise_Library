import "@/styles/globals.css";
import "@/styles/styles.css";

import { searchBookAction } from "@/lib";
import { renderFavorites } from "@/components/render/favorite";

// Search book action
const SearchForm = document.getElementById("search-form");
SearchForm.addEventListener("submit", searchBookAction);

// Favorites action
renderFavorites();
