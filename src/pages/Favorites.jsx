
import { useState, useEffect } from "react";
import { getFavorites, removeFromFavorites } from "../favorites.js";

export default function Favorites() {
  const [books, setBooks] = useState([]);

  // Hent favoritter når siden lastes
  useEffect(() => {
    setBooks(getFavorites());
  }, []);

  function handleRemove(bookId) {
    removeFromFavorites(bookId);
    setBooks(getFavorites()); // oppdater state etter fjerning
  }

  if (books.length === 0) return <p>Ingen favoritter ennå.</p>;

  return (
    <main>
      <h2>Dine favorittbøker</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}{" "}
            <button onClick={() => handleRemove(book.id)}>Fjern</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
