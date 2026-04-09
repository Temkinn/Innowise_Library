import "./styles/globals.css";
import "./styles/styles.css";

import { searchBook } from "./lib/requests";

const form = document.getElementById("search-form");
const bookList = document.getElementById("book-list");
const favorites = document.getElementById("favorites");

// Search book action
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Stop page reload
  const formData = new FormData(form);
  const query = formData.get("search-query")?.trim();

  if (!query) return;

  bookList.innerHTML = `<div class="loading">Loading...</div>`;
  try {
    const data = await searchBook(query);
    const books = data.docs.slice(0, 12);

    // Display first 12 results
    bookList.innerHTML = books
      .map(
        (book) => `
          <div>
            <h3>${book.title}</h3>
            <p>Author: ${book.author_name?.[0] || "Unknown"}</p>
          </div>
        `,
      )
      .join("");
  } catch (error) {
    bookList.innerHTML = "<p>Error fetching books. Try again.</p>";
    console.error(error);
  }
});
