


// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectRecommendedBooks } from '../../redux/book/selectors';
// import { getRecommendedThunk } from '../../redux/book/operations';
import css from './RecommendedBooks.module.css';
import sprite from '../../assets/icons/sprite.svg';

export const RecommendedBooks = () => {

  //   const dispatch = useDispatch();
  // const recommendedBooks = useSelector(selectRecommendedBooks);

  // useEffect(() => {
  //   dispatch(getRecommendedThunk());
  // }, [dispatch]);

  // console.log(recommendedBooks);

  return (
    <div className={css.recommendedBooks}>
      <h2 className={css.recommendedTitle}>Recommended</h2>
      <div className={css.recommendedBtnWrapper}>
        <button type="button" className={css.recommendedBtn} title="Back">
          <svg className={css.recommendedIcon}>
            <use xlinkHref={`${sprite}#icon-left`}></use>
          </svg>
        </button>
        <button type="button" className={css.recommendedBtn} title="Forward">
          <svg className={css.recommendedIcon}>
            <use xlinkHref={`${sprite}#icon-right`}></use>
          </svg>
        </button>
      </div>

      
      {/* {isLoading && <p>Loading recommended books...</p>}
      {error && <p className={css.error}>Error: {error}</p>} */}

      <ul>
        {/* {recommendedBooks.map(book => (
          <li key={book.id}>{book.title}</li>
        ))} */}
      </ul>
    </div>
  );
};
