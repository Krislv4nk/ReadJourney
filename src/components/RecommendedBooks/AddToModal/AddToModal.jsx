

import sprite from '../../../assets/icons/sprite.svg';
import css from './AddToModal.module.css';


export const AddToModal = ({onClose}) => {

    return (
        <div className={css.addWrapper }>
            <button type="button" onClick={onClose} className={css.closeBtn} title='Close'>
<svg className={css.iconClose}>
<use href={`${sprite}#icon-close`} />
</svg>
</button>
<div className={css.bookWrapper}>
<img className={css.bookCover} src="" alt="cover" />
<p className={css.bookTitle}>Title</p>
<p className={css.bookAuthor}>Author</p>
<p className={css.bookPages}>pages</p>
</div>
<button className={css.addBtn} type="button" title='Add to library'>
Add to library
            </button>  
        </div>
    )
}