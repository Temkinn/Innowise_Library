import { API_URL } from "@/constants";

export async function searchBooks(rawQuery) {
  try {
    const params = new URLSearchParams({
      q: rawQuery,
    });
    const data = await fetch(`${API_URL}/search.json?${params}`).then(
      (response) => response.json(),
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
