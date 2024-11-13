

import { Link } from 'react-router-dom';
import sprite from '../../../../assets/icons/sprite.svg';
import css from './FunctionalDescription.module.css';



export const FunctionalDescription = ({ link }) => (
  <div className={css.funWrapper}>
        <h4 className={css.funTitle}>Start your workout</h4>
        <ul className={css.funList}>
            <li className={css.funItem}><span className={css.funPosition}>1</span>
            <p className={css.funDescription}>
              <span className={css.funDescriptionAccent}>Create a personal library:</span> add the books you intend to read to it.</p></li>
            <li className={css.funItem}><span className={css.funPosition}>2</span>
            <p className={css.funDescription}>
              <span className={css.funDescriptionAccent}>Create your first workout:</span> define a goal, choose a period, start training.</p></li>
        </ul>
    <Link className={css.funLink} to={link}>My Library<svg className={css.funSvg}>
          <use xlinkHref={`${sprite}#icon-log-in`}></use>
                        </svg></Link>
  </div>
);


