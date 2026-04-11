import { searchBook } from "./requests";
import { renderBooks } from "@/components/render/books";

export const searchBookAction = async (e) => {
  e.preventDefault(); // Stop page reload
  const form = document.getElementById("search-form");
  const bookList = document.getElementById("book-list");

  const formData = new FormData(form);
  const query = formData.get("search-query")?.trim();
  if (!query) return;

  bookList.innerHTML = `<div class="loading">Loading...</div>`;

  try {
    const data = await searchBook(query);
    // Display first 6 results
    const books = data.docs.slice(0, 6);

    renderBooks(books);
  } catch (error) {
    bookList.innerHTML = "<p>Error fetching books. Try again.</p>";
    console.error(error);
  }
};

