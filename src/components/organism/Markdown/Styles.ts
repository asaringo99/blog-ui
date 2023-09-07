import { styled } from "styled-components"

export const MarkdownContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const EditorContainer = styled.div`
  min-width: 40%;
  max-width: 40%;
  margin-left: 3%;
  `;
  
  export const PreviewContainer = styled.div`
  font-family: 'Courier New', monospace;
  min-width: 40%;
  max-width: 40%;
  margin-right: 3%;
	padding: 15px;
	font-size: 16px;
  overflow-wrap: break-word;
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