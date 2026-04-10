import { booksMap } from "@/constants";
import { BookCard } from "@/components";

export function renderBooks(books) {
  const container = document.getElementById("book-list");

  container.innerHTML = books
    .map((book) => {
      booksMap.set(book.key, book); // 👈 сохраняем объект
      return BookCard(book);
    })
    .join("");
}
