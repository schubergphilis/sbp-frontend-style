import { AnchorHTMLAttributes, Children } from 'react'
import styled, { css } from 'styled-components'
import BadgeStyle, { BadgeStyleProps } from '../badges/Badge'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	isActive?: boolean
	disabled?: boolean
	children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

const TextLink = ({
	isActive = false,
	disabled = false,
	children,
	...props
}: Props) => {
	return (
		<Container $isActive={isActive} $disabled={disabled} {...props}>
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
		</Container>
	)
}

export interface TextLinkStyleProps extends BadgeStyleProps {
	$isActive?: boolean
	$disabled?: boolean
}

export const TextLinkStyle = css<TextLinkStyleProps>`
	display: inline-block;
	line-height: 2em;
	margin: 0 1em;
	color: inherit;
	border-bottom: 4px solid transparent;
	cursor: pointer;

	${({ $isActive, theme }) =>
		$isActive &&
		`
		font-weight: bold;
		border-bottom-color: ${theme.style.colorActive};
	`}

	&:hover {
		filter: hue-rotate(2deg) brightness(105%);
	}

	${({ $disabled, $isActive }) =>
		$disabled &&
		`
		border-color: ${$isActive ? 'inherit' : 'transparent'};
		cursor: default;
		opacity: 0.75;
		pointer-events: none;
	`}

	${BadgeStyle}
`
const Content = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.5em;
	align-items: center;
`
const Container = styled.a<{ $isActive: boolean; $disabled: boolean }>`
	${TextLinkStyle}
`

export default TextLink
