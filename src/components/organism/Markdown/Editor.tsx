import React from "react";
import { EditorContainer } from "./Styles";
import { AutoResizingTextarea } from "@/components/base/AutoResizingTextarea";
import 'katex/dist/katex.min.css'

interface IProps {
  text: string;
  width?: string;
  onChange: (text: string) => void;
}

const Editor = ({ text, width, onChange }: IProps) => {
	return (
    <EditorContainer width={width}>
      <AutoResizingTextarea
          value={text}
          height="400px"
          onChange={(e) => onChange(e.target.value)}
          placeholder={"Edit text ..."}
      />
    </EditorContainer>
	)
}

export default Editor;