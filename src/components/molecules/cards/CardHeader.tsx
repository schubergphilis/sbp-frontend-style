import ConditionalWrapper from 'helpers/ConditionalWrapperHelper'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

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
	return (
		<ConditionalWrapper
			condition={typeof onClick === 'function'}
			wrapper={(children) => (
				<CollapseButton onClick={onClick} disabled={disabled}>
					{children}
				</CollapseButton>
			)}>
			<Container $isOpen={isOpen} {...props}>
				<TitleInfo>{children}</TitleInfo>
				{onClick ? <CollapseIcon $isOpen={isOpen}>{icon}</CollapseIcon> : null}
			</Container>
		</ConditionalWrapper>
	)
}

const Container = styled.div<{ $isOpen?: boolean }>`
	padding: 2em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5em;
	text-align: left;
	border-bottom: 1px solid
		${({ theme, $isOpen }) =>
			$isOpen ? theme.style.borderColor : 'transparent'};
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
