import { styled } from "styled-components"

interface WidthProps {
  width?: string;
}

export const MarkdownContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  `;

  export const EditorContainer = styled.div<WidthProps>`
  max-width: 45%;
  min-width: 45%;
  overflow-wrap: break-word;
  `;
  
  export const PreviewContainer = styled.div<WidthProps>`
  max-width: 45%;
  min-width: 45%;
  overflow-wrap: break-word;
	padding: 15px;
	font-size: 16px;
	border: none;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-bottom: 2px solid #ddd;
	transition: border-color 0.2s;
  & br {
    margin-bottom: 1em;
  }
`;

export const CodeBlockWrapper = styled.div`
    position: relative;
`;

export const CodeBlockTitle = styled.div`
  display: inline-block;
  position: absolute;
  top: -0.8em;
  left: 0;
  background-color: #cde;
  padding: 0.1em;
  color: #000;
`;