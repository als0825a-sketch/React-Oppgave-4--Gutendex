import { useState } from 'react';

export default function Header({ onSearch }) {
  const [query, setQuery] = useState(''); // lagrer det brukeren skriver

  const handleSubmit = (e) => {
    e.preventDefault(); // hindrer at siden refresher
    if (onSearch) onSearch(query); // sender søket til App.jsx
  };

  return (
    <header className="header">
      <h1>Gutendex Bokapp</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Søk etter bøker..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} // oppdaterer state når brukeren skriver
        />
        <button type="submit">Søk</button>
      </form>
    </header>
  );
}
