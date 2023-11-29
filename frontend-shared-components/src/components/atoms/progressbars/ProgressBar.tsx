import { HTMLAttributes, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
	length: number // time in seconds
	inverse?: boolean
	bgColor?: string // hex code
	fillColor?: string // hex code
	onTimerFinish?: () => void
}

const ProgressBar: React.FC<Props> = ({
	length,
	inverse = false,
	bgColor = '#494949',
	fillColor = '#ffcc01',
	onTimerFinish,
	...props
}) => {
	const START_PROGRESS = inverse ? 100 : 0
	const END_PROGRESS = inverse ? 0 : 100

	const timerRef = useRef<NodeJS.Timeout>()
	const progressRef = useRef<number>(START_PROGRESS)
	const [progress, setProgress] = useState<number>(START_PROGRESS)

	useEffect(() => {
		const timeout = setInterval(() => {
			const currentCount = progressRef.current
			let nextCount = Math.floor(currentCount + 100 / length)
			if (inverse) {
				nextCount = Math.floor(currentCount - 100 / length)
			}
			progressRef.current = nextCount
			if (
				(inverse && nextCount <= END_PROGRESS) ||
				(!inverse && nextCount >= END_PROGRESS)
			) {
				clearInterval(timeout)
				onTimerFinish && onTimerFinish()
			}
			setProgress(nextCount)
		}, 1000)

		timerRef.current = timeout

		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current)
			}
		}
	}, [length, onTimerFinish, inverse, END_PROGRESS])

	return (
		<Container
			completed={progress}
			bgColor={bgColor}
			fillColor={fillColor}
			{...props}>
			<div className="filler" />
		</Container>
	)
}

const Container = styled.div<{
	completed: number
	bgColor: string
	fillColor: string
}>`
	height: 0.5rem;
	width: 100%;
	background-color: ${({ bgColor }) => `${bgColor}`};
	.filler {
		width: ${({ completed }) => `${completed}%`};
		height: 100%;
		background-color: ${({ fillColor }) => `${fillColor}`};
		transition: width 1s linear;
	}
`

export default ProgressBar
