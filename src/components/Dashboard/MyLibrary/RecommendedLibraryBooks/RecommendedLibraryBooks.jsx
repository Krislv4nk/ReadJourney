


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../../assets/icons/sprite.svg';
import css from './RecommendedLibraryBooks.module.css';


export const RecommendedLibraryBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      
    };

    fetchBooks();
  }, []);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Recommended Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
      <Link className={css.link} to="/recommended">Home<svg className={css.Svg}>
          <use xlinkHref={`${sprite}#icon-log-in`}></use></svg></Link>
    </div>
  );
};




