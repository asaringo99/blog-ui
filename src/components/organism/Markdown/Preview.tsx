import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from "./Codeblock";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import { PreviewContainer } from "./Styles";
import { Codebreak } from "./Codebreak";
import 'katex/dist/katex.min.css'

interface IProps {
  text: string;
  width?: string;
}

const Preview = ({ text, width }: IProps) => {
	return (
    <PreviewContainer width={width}>
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
	)
}

export default Preview;