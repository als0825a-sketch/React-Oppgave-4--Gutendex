import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import BookDetail from "./pages/BookDetail";
import Header from "./components/Header";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Header
        onSearch={setSearchQuery}
        onCategoryClick={setSelectedCategory}
        category={selectedCategory}
      />

      <Routes>
        <Route
          path="/"
          element={<Home search={searchQuery} category={selectedCategory} />}
        />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

