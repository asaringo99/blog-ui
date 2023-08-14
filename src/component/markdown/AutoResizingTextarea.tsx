import React, { useRef, useEffect } from 'react';
import { TextareaAutoResize } from './Styles'; // 上で作成したスタイルをインポート

interface IProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
}

const AutoResizingTextarea: React.FC<IProps> = ({ value, onChange, placeholder }) => {
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
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default AutoResizingTextarea;
