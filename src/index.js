import "./styles/globals.css";
import "./styles/styles.css";

import { searchBookAction } from "@/lib";

const SearchForm = document.getElementById("search-form");
const bookList = document.getElementById("book-list");
const favorites = document.getElementById("favorites");

// Search book action
SearchForm.addEventListener("submit", searchBookAction);
