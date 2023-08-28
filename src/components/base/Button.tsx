import React from 'react';
import './button.css';

interface ButtonProps {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  primary?: 'primary' | 'secondary' | 'black' | 'red' | 'blue' | 'darkblue';
  label: string;
  onClick?: () => void;
}

export const Button = ({ primary = 'primary', size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={['button', `button--${size}`, `button--${primary}`].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
        background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
