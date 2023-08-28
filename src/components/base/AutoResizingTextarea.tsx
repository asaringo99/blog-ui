import React, { useRef, useEffect } from 'react';
import { TextareaAutoResize } from './Styles';

interface AutoResizingTextareaProps {
  value: string;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const AutoResizingTextarea = ({ value, placeholder, className, ...props }: AutoResizingTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <TextareaAutoResize
      ref={textareaRef}
      value={value}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
};
