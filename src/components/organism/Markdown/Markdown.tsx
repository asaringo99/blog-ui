import React from "react";
import { MarkdownContainer } from "./Styles";
import 'katex/dist/katex.min.css'
import { useArticleActions } from "@/state/slice/article/hook";
import Editor from "./Editor";
import Preview from "./Preview";

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