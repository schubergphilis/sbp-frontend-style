import ConditionalWrapper from 'helpers/ConditionalWrapperHelper'
import { Children, MouseEvent, useCallback } from 'react'
import styled from 'styled-components'
import { ButtonStyle, ButtonStyleProps } from '../buttons/ActionButton'
import { BadgeStyleProps } from './Badge'

interface Props extends BadgeStyleProps {
	onClick?: VoidFunction
	isActive?: boolean
	disabled?: boolean
	children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

const ChipBadge = ({
	children,
	onClick,
	isActive,
	disabled,
	...props
}: Props) => {
	const handleOnClick = useCallback(
		(e: MouseEvent<HTMLButtonElement>): void => {
			if (onClick) onClick()
			e.stopPropagation()
		},
		[onClick]
	)
	return (
		<ConditionalWrapper
			condition={typeof onClick === 'function'}
			wrapper={(xchildren) => (
				<Button
					onClick={(e: MouseEvent<HTMLButtonElement>) => handleOnClick(e)}
					disabled={disabled}>
					{xchildren}
				</Button>
			)}>
			<Chip
				$isRounded={true}
				$variant={isActive ? 'cta' : 'ghost'}
				data-active={isActive ? true : undefined}
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
			</Chip>
		</ConditionalWrapper>
	)
}

const Button = styled.button`
	> div {
		cursor: pointer;
		pointer-events: all;
	}

	&[disabled] {
		> div {
			color: ${({ theme }) => theme.style.buttonDisabledColor};
			background-color: ${({ theme }) => theme.style.buttonDisabledColorBg};
			cursor: default;
			opacity: 0.75;
		}
		pointer-events: none;
	}
`

export interface ChipBadgeStyleProps extends ButtonStyleProps {}

const Chip = styled.div<ChipBadgeStyleProps>`
	${ButtonStyle}
	font-size: 0.75em;
	font-weight: bold;
	letter-spacing: 1px;
	padding: 0.25em 1em;
	cursor: default;
	pointer-events: none;
	display: inline-block;
`
const Content = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.5em;
	align-items: center;
`
export default ChipBadge
