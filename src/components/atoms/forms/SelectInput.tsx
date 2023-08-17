import { ReactNode, SelectHTMLAttributes } from 'react'
import { styled } from 'styled-components'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
	children: ReactNode | ReactNode[]
}

const SelectInput = ({ children, ...props }: Props) => {
	console.log(props.value)
	return (
		<SelectInputElement {...props}>
			{props.placeholder && (
				<PlaceholderOption value="" default>
					{props.placeholder}
				</PlaceholderOption>
			)}
			{children}
		</SelectInputElement>
	)
}

const SelectInputElement = styled.select<{ readonly?: boolean }>`
	border: 1px solid ${({ theme }) => theme.style.borderColor};
	border-radius: ${({ theme }) => theme.style.radius}px;
	background-color: ${({ theme }) => theme.style.inputColorBg};
	padding: 0.5em;
	display: block;
	width: 100%;
	cursor: ${({ readonly }) => (readonly ? 'hand' : 'pointer')};
	pointer-events: ${({ readonly }) => (readonly ? 'none' : 'auto')};

	&[disabled] {
		cursor: default;
		opacity: 0.75;
		pointer-events: none;
	}

	&:has(option[default]:checked) {
		color: ${({ theme }) => theme.style.inputPlaceholder};
	}
`
const PlaceholderOption = styled.option<{ default: boolean }>`
	display: none;
`

export default SelectInput
