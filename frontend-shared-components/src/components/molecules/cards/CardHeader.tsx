import ConditionalWrapper from 'helpers/ConditionalWrapperHelper'
import { HTMLAttributes, MouseEvent } from 'react'
import { styled } from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
	isOpen?: boolean
	onClick?: VoidFunction
	icon?: JSX.Element
	disabled?: boolean
	children: React.ReactNode
}

const CardHeader = ({
	isOpen,
	onClick,
	icon,
	children,
	disabled,
	...props
}: Props) => {
	const handleOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
		if (onClick) onClick()
		e.stopPropagation()
	}

	return (
		<ConditionalWrapper
			condition={typeof onClick === 'function'}
			wrapper={(children) => (
				<CollapseButton onClick={handleOnClick} disabled={disabled}>
					{children}
				</CollapseButton>
			)}>
			<Container
				$isOpen={isOpen}
				$isClickable={typeof onClick === 'function'}
				{...props}>
				<TitleInfo>{children}</TitleInfo>
				{onClick ? <CollapseIcon $isOpen={isOpen}>{icon}</CollapseIcon> : null}
			</Container>
		</ConditionalWrapper>
	)
}

const Container = styled.div<{ $isOpen?: boolean; $isClickable: boolean }>`
	padding: 2em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5em;
	text-align: left;

	transition: border-bottom 0.4s step-end;

	border-bottom: 1px solid transparent;

	${({ theme, $isOpen, $isClickable }) =>
		(!$isClickable || $isOpen) &&
		`
			transition: border-bottom 0.5s step-start;
			border-bottom: 1px solid ${theme.style.borderColor};
		`}
`
const TitleInfo = styled.div`
	flex: 1 1 auto;
`
const CollapseButton = styled.button`
	cursor: pointer;
	width: 100%;

	&[disabled] {
		cursor: default;
		opacity: 0.75;
		pointer-events: none;
	}
`
const CollapseIcon = styled.div<{ $isOpen?: boolean }>`
	vertical-align: middle;
	position: relative;

	svg {
		margin-right: 0.5em;
	}

	&::after {
		content: '';
		display: block;
		width: 0.5em;
		height: 0.5em;
		position: absolute;
		right: 0.5em;
		top: -0.25em;
		font-size: 1.5em;
		line-height: 1.25em;
		text-align: center;
		rotate: 0deg;
		transition: rotate 0.2s ease-in-out, margin-top 0.2s ease-in-out;

		margin-top: 0;
		border-style: solid;
		border-width: 0 2px 2px 0;
		rotate: 45deg;
	}

	${({ $isOpen }) =>
		$isOpen &&
		`
		&::after {
			rotate: 225deg;
			margin-top: .2em;
		}
	`}

	&:has(> svg) {
		&::after {
			content: none;
		}
	}
`
export default CardHeader
