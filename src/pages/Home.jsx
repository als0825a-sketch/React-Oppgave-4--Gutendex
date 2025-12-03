import { useEffect, useState } from 'react';
import { fetchBooks, fetchBooksByCategory } from '../api.jsx';
import { addToFavorites } from '../favorites.js';
import { Link } from 'react-router-dom';

export default function Home({ search, category }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (!search && !category) {
        setBooks([]);
        return;
      }

      setLoading(true);
      try {
        let results = [];
        if (search) {
          results = await fetchBooks(search);
        } else if (category) {
          results = await fetchBooksByCategory(category);
        }
        setBooks(results);
      } catch (error) {
        console.error(error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [search, category]);

  return (
    <main className="home">
      {category ? (
        <h2>Kategori: {category}</h2>
      ) : search ? (
        <h2>Resultater for: "{search}"</h2>
      ) : (
        <h2>Velkommen til bokappen!</h2>
      )}

      {loading && <p>Laster...</p>}

      {!loading && books.length > 0 && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link to={`/book/${book.id}`}>{book.title}</Link>

              <button onClick={() => addToFavorites(book)}>❤️</button>
            </li>
          ))}
        </ul>
      )}

      {!loading && books.length === 0 && (
        <p>Ingen bøker funnet.</p>
      )}
    </main>
  );
}

