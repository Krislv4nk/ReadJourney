import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTranslation } from 'react-i18next';
import sprite from '../../assets/icons/sprite.svg';
import css from './LanguageSwitcher.module.css';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ua', label: 'Українська' },
  { code: 'ru', label: 'Русский' },
  { code: 'pl', label: 'Polski' },
  { code: 'es', label: 'Español' },
];

function LanguageDialog(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      open={open}
      onEntering={handleEntering}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: 'var(--primary-color-dark-gray)', // Темний сірий колір фону
          color: 'var(--primary-color-white)', // Білий колір тексту
          width: '80%',
          maxHeight: 435,
        },
      }}
      maxWidth="xs"
      {...other}
    >
      <DialogTitle>Select Language</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="language"
          name="language"
          value={value}
          onChange={handleChange}
          sx={{
            '& .MuiFormControlLabel-label': {
              color: 'var(--primary-color-white)', // Білий текст для радіо-кнопок
            },
          }}
        >
          {languages.map((language) => (
            <FormControlLabel
              value={language.code}
              key={language.code}
              control={<Radio sx={{
                color: 'var(--primary-color-text)', // Радіо-кнопка з прозорим текстом
                '&.Mui-checked': {
                  color: 'var(--primary-color-white)', // Білий колір при виборі
                },
              }} />}
              label={language.label}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} sx={{ color: 'var(--primary-color-white)' }}>
          Cancel
        </Button>
        <Button onClick={handleOk} sx={{ color: 'var(--primary-color-white)' }}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

LanguageDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('en');

  const openModalHandler = () => {
    setOpen(true);
  };

  const closeModalHandler = (newValue) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
      i18n.changeLanguage(newValue);
    }
  };

  return (
    <Box>
      <button
        onClick={openModalHandler}
        type="button"
        className={css.langBtn}
        title="Select language"
      >
        <svg className={css.langIcon}>
          <use href={`${sprite}#icon-language`} />
        </svg>
      </button>
      
      <LanguageDialog
        open={open}
        onClose={closeModalHandler}
        value={value}
      />
    </Box>
  );
}








