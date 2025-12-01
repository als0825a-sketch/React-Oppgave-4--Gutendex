import { useEffect, useState } from 'react';
import { fetchBooks } from '../api.jsx';

export default function Home({ searchTerm }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setBooks([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const results = await fetchBooks(searchTerm);
      setBooks(results);
      setLoading(false);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <main className="home">
      {searchTerm ? <h2>Resultater for: "{searchTerm}"</h2> : <h2>Velkommen til bokappen!</h2>}

      {loading && <p>Laster...</p>}

      {!loading && books.length > 0 && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      )}

      {!loading && searchTerm && books.length === 0 && <p>Ingen bøker funnet.</p>}
    </main>
  );
}
