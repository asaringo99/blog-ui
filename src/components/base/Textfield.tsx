import React, { FC, InputHTMLAttributes } from 'react';
import './Textfield.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelSize?: 'small' | 'medium' | 'large';
  fontSize?: 'small' | 'medium' | 'large';
  maxLength?: number;
  text: string;
  updateText: (text: string) => void;
}

const TextField = ({ label, labelSize = 'medium', fontSize = 'medium', text = '', ...props }: IProps) => {
  const { maxLength } = props;
  return (
    <div className="container">
      <input
        className={['input', `font-size--${fontSize}`].join(' ')}
        placeholder=" "
        value={text}
        onChange={(e) => props.updateText(e.target.value)}
        maxLength={maxLength}
      />
      {label && <span className={['label', `label-size--${labelSize}`].join(' ')}>{label}</span>}
      {
        maxLength &&
        <div className="charCount">{text.length} / {maxLength}</div>
      }
    </div>
  );
};

export default TextField;
