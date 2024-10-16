
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import css from './LanguageSwitcher.module.css';
import sprite from '../../assets/icons/sprite.svg';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
    setIsOpen(false);
  };

  return (
    <div>
          <button onClick={() => setIsOpen(true)}
              type="button" className={css.langBtn} title='Select language'>
              <svg className={css.langIcon}>
                    <use href={`${sprite}#icon-language`} />
                  </svg></button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('ua')}>Українська</button>
            <button onClick={() => changeLanguage('ru')}>Русский</button>
            <button onClick={() => changeLanguage('pl')}>Polski</button>
            <button onClick={() => changeLanguage('es')}>Español</button>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}


