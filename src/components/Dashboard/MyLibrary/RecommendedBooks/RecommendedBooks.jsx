


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const RecommendedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Recommended Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
      <Link to="/recommended">View all recommended books</Link>
    </div>
  );
};




