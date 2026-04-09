import styles from "./styles.module.css";

import { searchBook } from "@/lib/actions";

export const SearchForm = () =>
  `<form id="search-form" class=${styles.SearchForm}>
      <input
        type="text"
        placeholder="Search for books by the author, title, or genre"
        name="search-query"
      />
      <button type="submit">Search</button>
      </form>`;
