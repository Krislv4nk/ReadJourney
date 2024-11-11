

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signoutUser } from '../../../redux/auth/operations';
import sprite from '../../../assets/icons/sprite.svg';
import css from './SignOutModal.module.css';


export const SignOutModal = ({onClose}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signoutUser());
    onClose();
    navigate('/');
  };
    return (
        <div className={css.wrapper}>
            <button type="button" onClick={onClose} className={css.closeBtn} title='Close'>
<svg className={css.iconClose}>
<use href={`${sprite}#icon-close`} />
</svg>
</button>
            <h4 className={css.title}>Sign Out</h4>
            
          <p className={css.formInfo}>Do you really want to leave?</p>
            <button className={css.logOutBtn} onClick={handleSignOut} type="button" title='Sign out'>
              Sign out
            </button>
       
        </div>
    )
}