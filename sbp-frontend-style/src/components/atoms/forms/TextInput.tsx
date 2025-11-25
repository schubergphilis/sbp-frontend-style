import { styled } from 'styled-components'

const TextInput = styled.input`
	border: 1px solid ${({ theme }) => theme.style.inputBorderColor};
	border-radius: ${({ theme }) => theme.style.radius}px;
	background-color: ${({ theme }) => theme.style.inputColorBg};
	padding: 0.5em;
	display: block;
	width: 100%;
	cursor: pointer;

	&::placeholder {
		color: ${({ theme }) => theme.style.inputPlaceholder};
	}

	&[disabled],
	&[readOnly] {
		cursor: default;
		opacity: 0.75;
		pointer-events: none;
	}
`
export default TextInput
