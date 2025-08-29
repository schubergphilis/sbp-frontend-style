import ProgressTimer from 'components/atoms/progressbars/ProgressTimer'
import ErrorIcon from 'components/icons/ErrorIcon'
import InfoIcon from 'components/icons/InfoIcon'
import SuccessIcon from 'components/icons/SuccessIcon'
import WarningIcon from 'components/icons/WarningIcon'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader
} from 'components/molecules/cards'
import { parser } from 'helpers'
import { useCallback, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { NotificationType } from '../../../datatypes/NotificationType'

interface Props {
	title: string
	description?: string
	date?: Date
	type?: NotificationType
	showMore?: boolean
	showClose?: boolean
	showIcon?: boolean
	autoClose?: number // in seconds
	onClose?: VoidFunction
}

const Notification = ({
	title,
	description,
	date,
	type = 'info',
	showMore = false,
	showClose = false,
	showIcon = false,
	autoClose,
	onClose,
	...props
}: Props) => {
	const timer = useRef<NodeJS.Timeout>(undefined)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isRemove, setIsRemove] = useState<boolean>(false)

	const handleHover = useCallback((isOpen: boolean) => {
		setIsOpen(isOpen)
	}, [])

	const handleRemove = useCallback(
		(isRemove: boolean) => {
			setIsRemove(!isRemove)

			clearTimeout(timer.current)

			if (onClose) {
				setTimeout(onClose, 500)
			}
		},
		[onClose, timer]
	)

	useEffect(() => {
		if (autoClose && autoClose > 0) {
			clearTimeout(timer.current)
			timer.current = setTimeout(() => {
				handleRemove(false)
			}, autoClose * 1000)
		}
	}, [autoClose])

	useEffect(() => {
		if (showClose || autoClose) setIsRemove(false)
	}, [showClose])

	return (
		<NoticationCard
			$type={type}
			$isRemove={isRemove}
			onMouseEnter={showMore ? () => handleHover(true) : undefined}
			onMouseLeave={showMore ? () => handleHover(false) : undefined}
			{...props}>
			<NotificationHeader
				onClick={showClose ? () => handleRemove(isRemove) : undefined}
				isOpen={showMore ? isOpen : true}
				isRemove>
				{showIcon && !['warning', 'success', 'error'].includes(type) && (
					<InfoIcon />
				)}
				{showIcon && type === 'warning' && <WarningIcon />}
				{showIcon && type === 'success' && <SuccessIcon />}
				{showIcon && type === 'error' && <ErrorIcon />}
				<h3>{title}</h3>
				{autoClose ? (
					<Counter
						length={autoClose}
						$type={type}
						size="2em"
						isRounded
						inverse
					/>
				) : null}
			</NotificationHeader>
			{description && description !== '' ? (
				<Collapse $isOpen={showMore ? isOpen : true}>
					<NotificationContent>{parser(description)}</NotificationContent>
					{date && (
						<NotificationFooter hasPadding>
							<DateInfo>{new Date(date).toLocaleString()}</DateInfo>
						</NotificationFooter>
					)}
				</Collapse>
			) : null}
		</NoticationCard>
	)
}

const NoticationCard = styled(Card)<{
	$type: NotificationType
	$isRemove?: boolean
}>`
	background-color: ${({ theme, $type }) =>
		$type === 'error'
			? theme.style.notificationErrorColorBg
			: $type === 'warning'
				? theme.style.notificationWarningColorBg
				: $type === 'success'
					? theme.style.notificationSuccessColorBg
					: theme.style.notificationInfoColorBg};
	color: ${({ theme, $type }) =>
		$type === 'error'
			? theme.style.notificationErrorColor
			: $type === 'warning'
				? theme.style.notificationWarningColor
				: $type === 'success'
					? theme.style.notificationSuccessColor
					: theme.style.notificationInfoColor};

	opacity: 1;
	transform: scale(${({ $isRemove }) => ($isRemove ? 0 : 1)});
	transition:
		opacity 0.2s ease-in-out,
		transform 0.2s ease-in-out;

	${({ $isRemove }) =>
		$isRemove &&
		`
        opacity: 0;
    `}
`
const NotificationHeader = styled(CardHeader)`
	padding-top: 1em;
	padding-bottom: 1em;

	& > div {
		display: flex;
		gap: 0.5em;
		align-items: center;
	}

	& > div > svg:first-child {
		flex: 0 0 auto;
		width: 2em;
		height: 2em;
	}
`
const NotificationContent = styled(CardContent)``
const NotificationFooter = styled(CardFooter)`
	padding-top: 1em;
	padding-bottom: 1em;
`
const Collapse = styled.div<{ $isOpen: boolean }>`
	overflow: hidden;
	max-height: 100em;
	transition:
		max-height 0.4s ease-in-out,
		padding 0.1s ease-in-out;

	${({ $isOpen }) =>
		!$isOpen &&
		`
        transition: max-height 0.5s ease-in-out, padding 0.4s step-end;
        max-height: 0;
    `}
`
const DateInfo = styled.strong`
	color: ${({ theme }) => theme.style.shadow};
`
const Counter = styled(ProgressTimer)<{ $type: NotificationType }>`
	position: absolute;
	right: 1.75em;

	> g > circle {
		stroke: ${({ theme, $type }) =>
			$type === 'error'
				? `${theme.style.notificationErrorColor
						?.replace(/^rgb/i, 'rgba')
						.replace(/\)/i, ', 0.5)')}`
				: $type === 'warning'
					? `${theme.style.notificationWarningColor
							?.replace(/^rgb/i, 'rgba')
							.replace(/\)/i, ', 0.5)')}`
					: $type === 'success'
						? `${theme.style.notificationSuccessColor
								?.replace(/^rgb/i, 'rgba')
								.replace(/\)/i, ', 0.5)')}`
						: `${theme.style.notificationInfoColor
								?.replace(/^rgb/i, 'rgba')
								.replace(/\)/i, ', 0.5)')}`};
	}
`
export default Notification
