import { VariantType } from 'datatypes/VariantType'
import { ButtonHTMLAttributes, Children } from 'react'
import styled, { css } from 'styled-components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isBlock?: boolean
	isCta?: boolean
	isRounded?: boolean
	variant?: VariantType
	children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

const ActionButton = ({
	isBlock = false,
	isRounded = false,
	variant,
	children,
	...props
}: Props) => {
	return (
		<Button
			$variant={variant}
			$isBlock={isBlock}
			$isRounded={isRounded}
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

export const ButtonStyle = css<{
	$variant?: VariantType
	$isBlock: boolean
	$isRounded: boolean
}>`
	padding: 0.5em 1em;
	cursor: pointer;
	display: ${({ $isBlock }) => ($isBlock ? 'block' : 'inline-block')};
	width: ${({ $isBlock }) => ($isBlock ? '100%' : 'auto')};
	color: ${({ theme }) => theme.style.buttonColor};
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
`
const Content = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.5em;
	align-items: center;
`
const Button = styled.button<{
	$variant?: VariantType
	$isBlock: boolean
	$isRounded: boolean
}>`
	${ButtonStyle}
`

export default ActionButton
