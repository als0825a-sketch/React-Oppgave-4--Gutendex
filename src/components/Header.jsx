import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ onSearch, onCategoryClick, category }) {
  const [query, setQuery] = useState("");

  const categories = [
    "Fiction", "Mystery", "Thriller", "Romance", "Fantasy",
    "Morality", "Society", "Power", "Justice",
    "Adventure", "Tragedy", "War", "Philosophy"
  ];

  function handleSearch(e) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <header>
      <h1><Link to="/">Bokappen</Link></h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Søk etter bok..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Søk</button>
      </form>

      <Link to="/favorites"><button>Favoritter</button></Link>

      <ul>
        {categories.map(cat => (
          <li
            key={cat}
            onClick={() => onCategoryClick(category === cat ? "" : cat)}
            style={{ cursor: "pointer" }}
          >
            {cat}
          </li>
        ))}
      </ul>
    </header>
  );
}



