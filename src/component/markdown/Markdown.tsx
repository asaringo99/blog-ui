"use client"
import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from "./Codeblock";
import { MarkdownContainer, EditorContainer, PreviewContainer } from "./Styles";
import AutoResizingTextarea from "./AutoResizingTextarea";

const MarkdownEditor: React.FC = () => {
    const[text, setText] = useState('');

    return (
        <MarkdownContainer>
            <EditorContainer>
                <AutoResizingTextarea
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                />
            </EditorContainer>
            <PreviewContainer>
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    children={text}
                    components={{
                        code: CodeBlock
                    }}
                />
            </PreviewContainer>
        </MarkdownContainer>
    )
}

export default MarkdownEditor;