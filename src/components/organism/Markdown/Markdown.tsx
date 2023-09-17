import React from "react";
import { MarkdownContainer } from "./Styles";
import 'katex/dist/katex.min.css'
import { useArticleActions } from "@/state/slice/article/hook";
import Editor from "./Editor";
import Preview from "./Preview";

interface IProps {
  text: string;
  onChange: (text: string) => void;
}

const MarkdownEditor = () => {
  const {
    article,
    updateArticleContent,
  } = useArticleActions();
	return (
    <MarkdownContainer>
      <Editor text={article.content} onChange={updateArticleContent} />
      <Preview text={article.content} />
    </MarkdownContainer>
	)
}

export default MarkdownEditor;