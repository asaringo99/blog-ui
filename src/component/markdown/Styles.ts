import { styled } from "styled-components"

export const MarkdownContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const EditorContainer = styled.div`
    flex: 1;
    display: flex;
    padding: 1em;
    justify-content: center;
`;

export const TextareaAutoResize = styled.textarea`
    padding: 1em;
    width: 90%;
    resize: none;
`;

export const PreviewContainer = styled.div`
    font-family: 'Courier New', monospace;
    flex: 1;
    padding: 1em;
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