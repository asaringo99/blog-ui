import styled from 'styled-components';

interface TextareaProps {
  height?: string;
}

export const TextareaAutoResize = styled.textarea<TextareaProps>`
  display: flex;
  width: 100%;
  min-height: ${props => props?.height ?? "100px"};
	resize: none;
	padding: 15px;
	font-size: 16px;
	border: none;
	background-color: #f9f9f9;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-bottom: 3px solid #ddd;
	transition: border-color 0.2s;

	&:focus {
			border-bottom-color: #0099cc;
			box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
			outline: none;
	}
`;
