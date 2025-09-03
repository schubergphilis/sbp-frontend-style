import CloseIcon from 'components/icons/CloseIcon'
import ConditionalWrapper from 'helpers/ConditionalWrapperHelper'
import { HTMLAttributes, MouseEvent, useCallback } from 'react'
import { styled } from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
	isOpen?: boolean
	onClick?: VoidFunction | ((ev: React.MouseEvent<HTMLElement>) => void)
	icon?: JSX.Element
	disabled?: boolean
	isRemove?: boolean
	hasPadding?: boolean
	children: React.ReactNode
}

const CardHeader = ({
	isOpen,
	onClick,
	icon,
	children,
	disabled,
	isRemove = false,
	hasPadding = true,
	...props
}: Props) => {
	const handleOnClick = useCallback(
		(e: MouseEvent<HTMLButtonElement>): void => {
			if (onClick) onClick(e)
			e.stopPropagation()
		},
		[onClick]
	)

	return (
		<ConditionalWrapper
			condition={typeof onClick === 'function' && !isRemove}
			wrapper={(children) => (
				<CollapseButton
					onClick={(e: MouseEvent<HTMLButtonElement>) => handleOnClick(e)}
					disabled={disabled}>
					{children}
				</CollapseButton>
			)}>
			<Container
				$hasPadding={hasPadding}
				$isOpen={isOpen}
				$isClickable={typeof onClick === 'function'}
				{...props}>
				<TitleInfo>{children}</TitleInfo>
				{onClick && !isRemove ? (
					<CollapseIcon $isOpen={isOpen} $withIcon={Boolean(icon)}>
						{icon}
					</CollapseIcon>
				) : null}
				{onClick && isRemove ? (
					<CloseButton
						type="button"
						onClick={(e: MouseEvent<HTMLButtonElement>) => handleOnClick(e)}
						title={props.title ?? 'Close'}>
						<CollapseIcon $isOpen={isOpen}>
							<CloseIcon />
						</CollapseIcon>
					</CloseButton>
				) : null}
			</Container>
		</ConditionalWrapper>
	)
}

const Container = styled.div<{
	$isOpen?: boolean
	$isClickable: boolean
	$hasPadding: boolean
}>`
	padding: ${({ $hasPadding }) => ($hasPadding ? '2em' : '0')};
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
const CloseButton = styled.button`
	cursor: pointer;
`

const CollapseIcon = styled.div<{ $isOpen?: boolean; $withIcon?: boolean }>`
	vertical-align: middle;
	position: relative;
	padding-right: 2em;
	transition: rotate 0.2s ease-in-out;

	${({ $withIcon }) =>
		!$withIcon &&
		`
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
			transition:
				rotate 0.2s ease-in-out,
				margin-top 0.2s ease-in-out;

			margin-top: 0;
			border-style: solid;
			border-width: 0 2px 2px 0;
			rotate: 315deg;
		}		
	`}

	${({ $isOpen }) =>
		$isOpen &&
		`
		rotate: 90deg;
	`}

	&:has(> svg) {
		padding-right: 0;

		> svg {
			width: 1.5em;
			height: 1.5em;
		}

		&::after {
			content: none;
		}
	}
`
export default CardHeader
