
export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}


export function addToFavorites(book) {
  const existing = getFavorites();


  if (!existing.find(b => b.id === book.id)) {
    existing.push(book);
    localStorage.setItem("favorites", JSON.stringify(existing));
  }
}


export function removeFromFavorites(bookId) {
  const existing = getFavorites();
  const updated = existing.filter(b => b.id !== bookId);
  localStorage.setItem("favorites", JSON.stringify(updated));
}
