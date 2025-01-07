import ProgressCircle from 'helpers/ProgressHelper'
import { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'

interface Props {
	length: number // time in seconds
	inverse?: boolean
	isRounded?: boolean
	restart?: boolean
	size?: string
	bgColor?: `#${string}` // hex code
	fillColor?: `#${string}` // hex code
	onTimerFinish?: () => void
}

const ProgressTimer: React.FC<Props> = ({
	length,
	inverse = false,
	isRounded = false,
	restart = false,
	bgColor = '#494949',
	fillColor = '#ffcc01',
	size,
	onTimerFinish,
	...props
}) => {
	const timerRef = useRef<NodeJS.Timeout>(undefined)
	const finishRef = useRef<NodeJS.Timeout>(undefined)
	const [trigger, setTrigger] = useState<boolean>(false)

	useEffect(() => {
		setTrigger(true)
		clearTimeout(timerRef.current)
		timerRef.current = setTimeout(() => setTrigger(false), 100)
	}, [restart, length])

	useEffect(() => {
		if (!trigger || !onTimerFinish) return
		clearTimeout(finishRef.current)
		finishRef.current = setTimeout(onTimerFinish, length * 1000)
	}, [trigger])

	return (
		<XProgressCircle
			initial={length}
			current={inverse ? length : 0}
			color={bgColor}
			fillColor={fillColor}
			isRounded={isRounded}
			inverse={inverse}
			$restart={trigger}
			size={size}
			{...props}
		/>
	)
}

const XProgressCircle = styled(ProgressCircle)<{
	initial: number
	$restart: boolean
	inverse: boolean
}>`
	& > g > circle:last-child {
		animation-duration: ${({ initial }) => `${initial}s`};
		animation-name: ${({ $restart }) => (!$restart ? 'dash' : 'none')};
		animation-direction: ${({ inverse }) => (inverse ? 'reverse' : 'initial')};
		animation-timing-function: linear;
	}

	@keyframes dash {
		to {
			stroke-dashoffset: 0;
		}
	}
`
export default ProgressTimer
