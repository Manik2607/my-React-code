import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookManagementApp = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // Fetch books from the API
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://api.example.com/books'); // Replace with actual API URL
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleAddBook = async () => {
    if (title && author) {
      const newBook = { title, author };
      try {
        const response = await axios.post('https://api.example.com/books', newBook); // Replace with actual API URL
        setBooks([...books, response.data]); // Add new book to list
        setTitle(''); // Clear input
        setAuthor('');
      } catch (error) {
        console.error('Error adding book:', error);
      }
    } else {
      alert('Please fill in both title and author fields');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Book Management App</h2>

      {/* Book Input Form */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={{ marginRight: '10px' }}
        />
        <input 
          type="text" 
          placeholder="Author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      {/* Book List */}
      <h3>Book List</h3>
      {books.length > 0 ? (
        books.map((book, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{book.title}</strong>
            <p>Author: {book.author}</p>
          </div>
        ))
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BookManagementApp;
