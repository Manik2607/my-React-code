import React, { useEffect, useState } from 'react';

const App = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  // Fetch and transform data
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://example.com/books');
        const json = await response.json();

        // Transform the data into the required format
        const transformedData = json.data.map((book) => ({
          id: book.id,
          title: book.title,
          author: book.author,
        }));

        setBooks(transformedData);
      } catch (err) {
        setError('Failed to fetch book data');
      }
    };

    fetchBooks();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Book List</h2>

      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {books.map((book) => (
            <li key={book.id} style={{ margin: '10px 0' }}>
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
