import { styled } from 'styled-components'

const SelectInput = styled.select`
	border: 1px solid ${({ theme }) => theme.style.borderColor};
	border-radius: ${({ theme }) => theme.style.radius}px;
	background-color: ${({ theme }) => theme.style.inputColorBg};
	padding: 0.5em;
	display: block;
	width: 100%;
	cursor: pointer;

	&[disabled] {
		cursor: default;
		opacity: 0.75;
		pointer-events: none;
	}
`

export default SelectInput
