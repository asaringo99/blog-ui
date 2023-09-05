import React, { useRef, useEffect } from 'react';
import { TextareaAutoResize } from './Styles';

interface AutoResizingTextareaProps {
  value: string;
  height?: string;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const AutoResizingTextarea = ({ value, height, placeholder, className, ...props }: AutoResizingTextareaProps) => {
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
      height={height}
      value={value}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
};
