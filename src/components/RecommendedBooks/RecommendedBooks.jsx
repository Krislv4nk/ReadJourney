
import css from './RecommendedBooks.module.css';
import sprite from '../../assets/icons/sprite.svg';


export const RecommendedBooks = () => {


    return (
        <div className={css.recommendedBooks}>
            <h2 className={css.recommendedTitle}>Recommended</h2>
            <div className={css.recommendedBtnWrapper}>
            <button type='button' className={css.recommendedBtn} title='Back'>
                <svg className={css.recommendedIcon}>
          <use xlinkHref={`${sprite}#icon-left`}></use>
                        </svg></button>
            <button type='button'className={css.recommendedBtn} title='Forward'>
            <svg className={css.recommendedIcon}>
          <use xlinkHref={`${sprite}#icon-right`}></use>
                        </svg>
            </button>
            </div>
        </div>
    )
}