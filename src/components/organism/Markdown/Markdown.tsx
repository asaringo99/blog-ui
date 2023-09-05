"use client"
import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from "./Codeblock";
import { MarkdownContainer, EditorContainer, PreviewContainer } from "./Styles";
import { AutoResizingTextarea } from "@/components/base/AutoResizingTextarea";
import { Codebreak } from "./Codebreak";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import 'katex/dist/katex.min.css'
import remarkBreaks from "remark-breaks";

const MarkdownEditor: React.FC = () => {
	const[text, setText] = useState('');
	return (
		<MarkdownContainer>
			<EditorContainer>
				<AutoResizingTextarea
						value={text}
            height="400px"
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
						placeholder={"Edit text ..."}
				/>
			</EditorContainer>
			<PreviewContainer>
				<ReactMarkdown 
					remarkPlugins={[remarkGfm, remarkMath, remarkBreaks]}
					rehypePlugins={[rehypeKatex]}
					children={text}
					components={{
							code: CodeBlock,
							p: Codebreak,
					}}
				/>
			</PreviewContainer>
		</MarkdownContainer>
	)
}

export default MarkdownEditor;