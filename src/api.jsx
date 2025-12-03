export async function fetchBooks(searchTerm) {
  try {
    const response = await fetch(`https://gutendex.com/books/?search=${encodeURIComponent(searchTerm)}`);
    if (!response.ok) {
      throw new Error("Noe gikk galt med API-kallet");
    }
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error(error);
    return []; 
  }
}

export async function fetchBooksByCategory(category) {
  const response = await fetch(`https://gutendex.com/books?topic=${category}`);
  const data = await response.json();
  return data.results;
}