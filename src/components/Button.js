import React from 'react';
import style from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ children, variant = 'primary' }) {
  return (
    <button
      className={getClasses([
        style.button,
        style[`button--${buttonTypes[variant]}`],
      ])}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
