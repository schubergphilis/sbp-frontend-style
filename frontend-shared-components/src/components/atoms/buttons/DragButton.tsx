import DragIcon from 'components/icons/DragIcon'
import { OrientationType } from 'datatypes/OrientationType'
import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	orientation?: OrientationType
}

const DragButton = ({ orientation = 'right', ...props }: Props) => {
	return (
		<Button $orientation={orientation} {...props}>
			<DragIcon />
		</Button>
	)
}

const Button = styled.button<{ $orientation: OrientationType }>`
	background-color: ${({ theme }) => theme.style.cardColorBg};
	text-align: center;
	line-height: 0em;
	overflow: hidden;
	display: block;
	padding: 1em 0.5em;
	border-radius: ${({ theme }) => theme.style.radius}px 0 0
		${({ theme }) => theme.style.radius}px;
	box-shadow: 0px 5px 5px 0px ${({ theme }) => theme.style.shadow};
	border: none;
	cursor: pointer;

	${({ $orientation, theme }) =>
		$orientation === 'top' &&
		`
			border-radius: 0 0 ${theme.style.radius}px ${theme.style.radius}px;
			padding: 0.5em 1em;
	`}

	${({ $orientation, theme }) =>
		$orientation === 'left' &&
		`
			border-radius:0 ${theme.style.radius}px ${theme.style.radius}px 0;
	`}

	${({ $orientation, theme }) =>
		$orientation === 'bottom' &&
		`
			border-radius: ${theme.style.radius}px 0${theme.style.radius}px 0 0;
			box-shadow: 0px 0px 2px 0px ${theme.style.shadow};
			padding: 0.5em 1em;
	`}

	&:hover {
		filter: hue-rotate(2deg) brightness(105%);
		box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.style.shadow};
	}

	&[disabled] {
		color: ${({ theme }) => theme.style.buttonDisabledColor};
		background-color: ${({ theme }) => theme.style.buttonDisabledColorBg};
		cursor: default;
		opacity: 0.75;
		pointer-events: none;
	}

	& > svg {
		rotate: ${({ $orientation }) =>
			$orientation === 'top' || $orientation === 'bottom' ? '90deg' : '0'};
	}
`

export default DragButton
