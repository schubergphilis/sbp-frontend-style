import { ButtonHTMLAttributes, Children, JSX } from 'react'
import styled, { css } from 'styled-components'
import LoaderStyle, {
	LoaderStyleProps
} from '../../../components/atoms/loaders/Loader'
import { VariantType } from '../../../datatypes/VariantType'
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
								.map((el, index) => (
									<div key={`action_button_${index}`}>{el}</div>
								))
						)
					: children}
			</Content>
		</Button>
	)
}

export interface ButtonStyleProps extends BadgeStyleProps, LoaderStyleProps {
	$variant?: VariantType
	$isBlock?: boolean
	$isRounded?: boolean
	$isLoading?: boolean
}

export const ButtonStyle = css<ButtonStyleProps>`
	position: relative;
	padding: 0.5em 1em;
	cursor: pointer;
	user-select: none;
	display: ${({ $isBlock }) => ($isBlock ? 'block' : 'inline-block')};
	width: ${({ $isBlock }) => ($isBlock ? '100%' : 'auto')};
	color: ${({ $variant, theme }) =>
		$variant === 'cta'
			? theme.style.buttonPrimaryColor
			: theme.style.buttonSecondaryColor};
	border-radius: ${({ theme, $isRounded }) =>
		$isRounded ? '2em' : `${theme.style.radius}px`};
	background-color: ${({ $variant, theme }) =>
		$variant === 'cta'
			? theme.style.buttonPrimaryColorBg
			: theme.style.buttonSecondaryColorBg};

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
	`}

	${({ $isLoading }) => ($isLoading ? LoaderStyle : '')}

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
