import { parser } from 'helpers/HtmlHelper'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled, { CSSProperties, css } from 'styled-components'
import { OrientationType } from '../../../datatypes/OrientationType'

interface Props {
	title: string
	placement?: OrientationType
	isActive?: boolean
	children: string | JSX.Element
}

const Tooltip = ({
	title,
	placement = 'top',
	children,
	isActive = false,
	...props
}: Props) => {
	const refMsg = useRef<HTMLDivElement>(null)
	const refCnt = useRef<HTMLDivElement>(null)
	const [msgWidth, setMsgWidth] = useState<number>(0)
	const [msgHeight, setMsgHeight] = useState<number>(0)
	const [offsetWidth, setOffsetWidth] = useState<number>(0)
	const [offsetHeight, setOffestHeight] = useState<number>(0)
	const [alignment, setAlignment] = useState<CSSProperties>({
		right: 0,
		top: 0
	})

	useEffect(() => {
		getElementOffset()

		switch (placement) {
			case 'bottom':
				setBottomAlignment()
				break
			case 'left':
				setLeftAlignment()
				break
			case 'right':
				setRightAlignment()
				break
			default:
				setTopAlignment()
				break
		}
	}, [offsetWidth, placement, title])

	const getElementOffset = useCallback(() => {
		const width = refMsg.current?.offsetWidth ?? 0
		const height = refMsg.current?.offsetHeight ?? 0
		const offsetWidth = (refCnt.current?.offsetWidth ?? 0) / 2
		const offsetHeight = (refCnt.current?.offsetHeight ?? 0) / 2

		setMsgWidth(width)
		setMsgHeight(height)
		setOffsetWidth(offsetWidth)
		setOffestHeight(offsetHeight)
	}, [placement, title])

	const setTopAlignment = useCallback(() => {
		setAlignment({
			top: -(msgHeight + 10),
			right: -(msgWidth / 2 - offsetWidth)
		})
	}, [msgWidth, msgHeight, offsetWidth])

	const setBottomAlignment = useCallback(() => {
		setAlignment({
			bottom: -(msgHeight + 10),
			right: -(msgWidth / 2 - offsetWidth)
		})
	}, [msgWidth, msgHeight, offsetWidth])

	const setLeftAlignment = useCallback(() => {
		setAlignment({
			bottom: -(msgHeight / 2 - offsetHeight),
			left: -(msgWidth + 10)
		})
	}, [msgWidth, msgHeight, offsetHeight])

	const setRightAlignment = useCallback(() => {
		setAlignment({
			bottom: -(msgHeight / 2 - offsetHeight),
			right: -(msgWidth + 10)
		})
	}, [msgWidth, msgHeight, offsetHeight])

	return (
		<Container ref={refCnt} $isActive={isActive} {...props}>
			{children}
			<Message
				ref={refMsg}
				$placement={placement}
				style={alignment}
				data-message-size={[msgWidth, msgHeight]}>
				{parser(title.replace(/\\r\\n/gim, '<br/>'))}
			</Message>
		</Container>
	)
}

const Container = styled.div<{ $isActive: boolean }>`
	display: inline;
	border-bottom: 1px dotted ${({ theme }) => theme.style.colorActive};
	position: relative;

	&:hover > abbr {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}

	${({ $isActive }) =>
		$isActive &&
		`
		> abbr {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	`}
`
export const TooltipStyle = css<{ $placement: OrientationType }>`
	opacity: 0;
	pointer-events: none;
	position: absolute;
	padding: 1rem 0.5rem;
	background-color: ${({ theme }) => theme.style.tooltipColorBg};
	color: ${({ theme }) => theme.style.tooltipColor};
	border-radius: ${({ theme }) => theme.style.radius}px;
	white-space: nowrap;
	box-shadow: 4px 4px 4px ${({ theme }) => theme.style.shadow};
	z-index: 10;
	text-align: center;
	font-size: 0.875em;

	transform: translate3d(0, 10px, 0);
	transition: all 0.15s ease-in-out;

	&::before {
		content: '';
		display: block;

		pointer-events: none;
		position: absolute;
		border: 0.5rem solid;
		border-color: ${({ theme }) => theme.style.tooltipColorBg} transparent
			transparent transparent;

		height: 0;
		width: 0;
		left: calc(50% - 0.5rem);
		top: 100%;
	}

	${({ $placement, theme }) =>
		$placement == 'bottom' &&
		`
        &::before {
            top: auto;
            bottom: 100%;
            border-color: transparent
			transparent ${theme.style.tooltipColorBg} transparent;
        }
    `}

	${({ $placement, theme }) =>
		$placement == 'left' &&
		`
        &::before {
            top: calc(50% - 0.5rem);
            left: 100%;
            border-color: 
			  transparent transparent transparent ${theme.style.tooltipColorBg};
        }
    `}

	${({ $placement, theme }) =>
		$placement == 'right' &&
		`
        &::before {
            top: calc(50% - 0.5em);
            left: -1rem;
            border-color: transparent
			 ${theme.style.tooltipColorBg} transparent transparent;
        }
    `}
`
const Message = styled.abbr<{ $placement: OrientationType }>`
	${TooltipStyle}
`
export default Tooltip
