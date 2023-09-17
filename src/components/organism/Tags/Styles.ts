import { styled } from "styled-components"

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;
  
export const TagForm = styled.div`
  width: 50%;
  `;

export const PreviewContainer = styled.div`
  width: 60%;
  `;

export const HashTag = styled.code`
	padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  overflow-wrap: break-word;
	border: none;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-bottom: 2px solid #ddd;
	transition: border-color 0.2s;
  border-radius: 50px;
  background: #ffd8f1;
  color: #0000af;
  font-size: 1em;
  `;