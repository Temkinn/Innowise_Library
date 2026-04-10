import { searchBook } from "./requests";
import { BookCard } from "@/components/BookCard";

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
    const books = data.docs.slice(0, 6);
    console.log(books)

    // Display first 12 results
    bookList.innerHTML = books.map((book) => BookCard(book)).join("");
  } catch (error) {
    bookList.innerHTML = "<p>Error fetching books. Try again.</p>";
    console.error(error);
  }
};
