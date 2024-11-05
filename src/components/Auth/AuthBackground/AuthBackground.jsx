
import css from './AuthBackground.module.css';
import iphone from '../../../assets/images/iPhone.png';
import sprite from '../../../assets/icons/sprite.svg';
import LanguageSwitcher  from "../../Auth/LanguageSwitcher/LanguageSwitcher";

export const AuthBackground = ({ showTitle = true }) => {
    return (
        <div className={css.wrapper}>
            <div className={css.formWrapper}>
                <div className={css.logoWrapper}>
                    <div className={css.logoContainer}>
                <svg className={css.logo}>
          <use xlinkHref={`${sprite}#icon-logo`}></use>
                        </svg>
                        <h3 className={css.logoHeader}>read journey</h3>
</div>
                    <LanguageSwitcher/>
                    </div>
                    {showTitle && (
                    <h2 className={css.title}>
                        Expand your mind, reading <span className={css.titleSpan}>a book</span>
                    </h2>
                )}

            </div>
            <div className={css.iphoneWrapper}>
                <img src={iphone} alt="iphone" className={css.iphone} />
            </div>
        </div>
    )
}