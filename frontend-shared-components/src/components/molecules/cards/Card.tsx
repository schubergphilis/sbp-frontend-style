import { HTMLAttributes } from 'react'
import { css, styled } from 'styled-components'

interface Props extends HTMLAttributes<HTMLElement> {
	onClick?: VoidFunction
	hasPadding?: boolean
	isSelected?: boolean
	disabled?: boolean
	children: JSX.Element | JSX.Element[] | React.ReactNode
}

const Card = ({
	hasPadding = false,
	isSelected = false,
	disabled = false,
	onClick,
	children,
	...props
}: Props) => {
	return typeof onClick === 'function' ? (
		<CardButton
			$hasPadding={hasPadding}
			$isSelected={isSelected}
			onClick={onClick}
			disabled={disabled}
			{...props}>
			{children}
		</CardButton>
	) : (
		<Container $hasPadding={hasPadding} $isSelected={isSelected} {...props}>
			{children}
		</Container>
	)
}

const CardStyle = css<{
	$hasPadding: boolean
	$isSelected: boolean
	disabled?: boolean
}>`
	background-color: ${({ $isSelected, theme }) => theme.style.cardColorBg};
	border: 1px solid ${({ theme }) => theme.style.borderColor};
	border-radius: ${({ theme }) => theme.style.radius}px;
	padding: 0 ${({ $hasPadding }) => ($hasPadding ? '1em' : '0')};
	overflow: hidden;

	${({ $isSelected, theme, disabled }) =>
		$isSelected &&
		!disabled &&
		`
		border-color: ${theme.style.colorPrimary};
		box-shadow: inset 0 0 0px 1px ${theme.style.colorPrimary};
	`}

	> div:last-child:not(:first-child) {
		//padding-top: 0;
	}
`

const CardButton = styled.button<{
	$hasPadding: boolean
	$isSelected: boolean
	disabled?: boolean
}>`
	cursor: pointer;

	&:hover {
		filter: hue-rotate(2deg) brightness(105%);
		border-color: ${({ theme }) => theme.style.colorPrimary};
	}

	&[disabled] {
		color: ${({ theme }) => theme.style.buttonDisabledColor};
		background-color: ${({ theme }) => theme.style.buttonDisabledColorBg};
		cursor: default;
		opacity: 0.75;
		pointer-events: none;
	}

	${CardStyle}
`
const Container = styled.div<{
	$hasPadding: boolean
	$isSelected: boolean
	disabled?: boolean
}>`
	${CardStyle}
`

export default Card
