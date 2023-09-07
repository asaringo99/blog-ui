import React, { FC, InputHTMLAttributes } from 'react';
import './Textfield.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fontSize?: 'small' | 'medium' | 'large';
}

const TextField: FC<Props> = ({ label, fontSize = 'medium' }) => {
  return (
    <div className="container">
      <input className={['input', `font-size--${fontSize}`].join(' ')} placeholder=" " />
      {label && <span className="label">{label}</span>}
    </div>
  );
};

export default TextField;
