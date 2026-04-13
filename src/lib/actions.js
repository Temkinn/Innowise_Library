import { searchBooks } from "./requests";
import { renderBooks } from "@/components/render/books";

export const searchBookAction = async (e) => {
  e.preventDefault(); // Stop page reload
  const form = document.getElementById("search-form");
  const bookList = document.getElementById("book-list");

  const formData = new FormData(form);
  const query = formData.get("search-query")?.trim();
  if (!query) return;

  bookList.innerHTML = `<p class="loading">Loading...</p>`;

  try {
    const data = await searchBooks(query);
    if (!data.docs.length) {
      bookList.innerHTML = "<p>No books found.</p>";
      return;
    }
    // Display first 6 results
    const books = data.docs.slice(0, 12);

    renderBooks(books);
  } catch (error) {
    bookList.innerHTML = "<p>Error fetching books. Try again.</p>";
    console.error(error);
  }
};

export async function searchBooksByQueryAction(query) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = `<p class="loading">Loading...</p>`;

  try {
    const data = await searchBooks(query);
    if (!data.docs.length) {
      bookList.innerHTML = "<p>No books found.</p>";
      return;
    }
    // Display first 6 results
    const books = data.docs.slice(0, 12);

    renderBooks(books);
  } catch (error) {
    bookList.innerHTML = "<p>Error fetching books. Try again.</p>";
    console.error(error);
  }
}
