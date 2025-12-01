import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query) => {
    setSearchTerm(query);
    console.log("Søker etter:", query); // TEST: vi ser søket i console, kan sikkert slettes
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Home searchTerm={searchTerm} />
    </>
  );
}
