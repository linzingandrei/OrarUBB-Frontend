import React from 'react';
import './Button.scss';

const Button = ({ color, label, onClick, shape = 'rounded', size = 'medium' }) => {
  return (
    <button
      className={`padding-2 shadow-none hover:shadow background-light-${color} hover:background-dark-${color} ${shape} ${size}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
