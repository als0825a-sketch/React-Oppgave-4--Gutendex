
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function loadBook() {
      const res = await fetch(`https://gutendex.com/books/${id}`);
      const data = await res.json();
      setBook(data);
    }
    loadBook();
  }, [id]);

  if (!book) return <p>Laster bokinformasjon...</p>;

  return (
    <main>
      <h2>{book.title}</h2>

      {book.formats?.["image/jpeg"] && (
        <img
          src={book.formats["image/jpeg"]}
          alt={book.title}
          width="250"
        />
      )}

      <p><strong>Forfatter:</strong> {book.authors?.map(a => a.name).join(", ")}</p>

      <p><strong>Nedlastninger:</strong> {book.download_count}</p>

      <p><strong>Kategori(er):</strong> {book.subjects?.join(", ")}</p>

      <p><strong>Språk:</strong> {book.languages?.join(", ")}</p>
    </main>
  );
}
