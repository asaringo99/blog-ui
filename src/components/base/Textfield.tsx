import React, { FC, InputHTMLAttributes } from 'react';
import './TextField.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextField: FC<Props> = ({ label, ...props }) => {
  return (
    <div className="container">
      <input className="input" {...props} placeholder=" " />
      {label && <span className="label">{label}</span>}
    </div>
  );
};

export default TextField;
