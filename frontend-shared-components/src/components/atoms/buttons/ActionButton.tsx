import { VariantType } from 'datatypes/VariantType'
import { ButtonHTMLAttributes, Children } from 'react'
import styled, { css } from 'styled-components'
import BadgeStyle, { BadgeStyleProps } from '../badges/Badge'

interface Props
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		BadgeStyleProps {
	isBlock?: boolean
	isRounded?: boolean
	isLoading?: boolean
	variant?: VariantType
	children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

const ActionButton = ({
	isBlock = false,
	isRounded = false,
	isLoading = false,
	variant,
	children,
	...props
}: Props) => {
	return (
		<Button
			$variant={variant}
			$isBlock={isBlock}
			$isRounded={isRounded}
			$isLoading={isLoading}
			{...props}>
			<Content>
				{Array.isArray(children)
					? Children.toArray(
							children
								.filter(
									(el) =>
										!(
											el === null ||
											el === undefined ||
											(typeof el === 'string' && el === '')
										)
								)
								.map((el) => <div>{el}</div>)
					  )
					: children}
			</Content>
		</Button>
	)
}

export interface ButtonStyleProps extends BadgeStyleProps {
	$variant?: VariantType
	$isBlock?: boolean
	$isRounded?: boolean
	$isLoading?: boolean
}

export const ButtonStyle = css<ButtonStyleProps>`
	position: relative;
	padding: 0.5em 1em;
	cursor: pointer;
	display: ${({ $isBlock }) => ($isBlock ? 'block' : 'inline-block')};
	width: ${({ $isBlock }) => ($isBlock ? '100%' : 'auto')};
	color: ${({ $variant, theme }) =>
		$variant === 'cta'
			? theme.style.buttonPrimaryColor
			: theme.style.buttonSecondaryColor};
	border-radius: ${({ theme, $isRounded }) =>
		$isRounded ? '2em' : `${theme.style.radius}px`};
	background-color: ${({ $variant, theme }) =>
		$variant === 'cta' ? theme.style.colorPrimary : theme.style.colorSecondary};

	${({ $variant, theme }) =>
		$variant === 'ghost' &&
		`
		color: inherit;
		background: transparent;
		border: 1px solid;

		&[disabled] {
			color: ${theme.style.buttonDisabledColorBg}!important;
			background-color: transparent!important;
		}
	`}

	&:hover {
		filter: hue-rotate(2deg) brightness(105%);
	}

	&[disabled] {
		color: ${({ theme }) => theme.style.buttonDisabledColor};
		background-color: ${({ theme }) => theme.style.buttonDisabledColorBg};
		cursor: default;
		opacity: 0.75;
		pointer-events: none;
	}

	transition: padding-right 0.2s ease-in-out;

	${({ $isLoading }) =>
		$isLoading &&
		`
		padding-right: 3em;
		pointer-events: none;

		&::after {
			content: '';
			position: absolute;
			right: 1em;
			top: calc(50% - 0.625em);
			display: block;
			width: 1.25em;
			height: 1.25em;
			border-radius: 1em;
			color: inherit;
			border: 2px solid;
			border-left-width: 1px;
			border-bottom-color: transparent;
			animation: rotating 0.75s linear infinite;
		}
	`}

	${BadgeStyle}
`
const Content = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.5em;
	align-items: center;
`
const Button = styled.button<ButtonStyleProps>`
	${ButtonStyle}
`

export default ActionButton
