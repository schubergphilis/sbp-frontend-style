import { useEffect, useState } from 'react'

interface Props {
	initial?: number
	current?: number
	color?: `#${string}`
	fillColor?: `#${string}`
	stroke?: number
	size?: string
	isRounded?: boolean
	inverse?: boolean
}

const ProgressCirlce = ({
	color = '#FFFFFF',
	fillColor,
	stroke = 10,
	size = '100%',
	initial = 100,
	current = 0,
	isRounded = false,
	inverse = false,
	...props
}: Props) => {
	const [percent, setPercent] = useState<number>(0)

	const circle = 50
	const radius = Math.max(1, circle - Math.floor(stroke / 2))

	const circumference = Math.round(radius * 2 * 3.14)

	const calculatePercent = () => {
		const result = -Math.round(
			((inverse ? 1 : 0) - (initial - current) / initial) * circumference
		)
		setPercent(result)
	}

	useEffect(() => {
		calculatePercent()
	}, [current, inverse])

	return (
		<svg width={size} height={size} viewBox="0 0 100 100" {...props}>
			<g>
				<circle
					cx={circle}
					cy={circle}
					r={radius}
					stroke={`${color}50`}
					strokeWidth={stroke}
					fill="none"
				/>
				<circle
					cx={circle}
					cy={circle}
					r={radius}
					stroke={fillColor ? fillColor : color}
					strokeWidth={stroke}
					fill="none"
					strokeLinecap={isRounded ? 'round' : 'inherit'}
					strokeDasharray={circumference}
					strokeDashoffset={percent}
					transform={`rotate(-90 ${circle} ${circle})`}
				/>
			</g>
		</svg>
	)
}

export default ProgressCirlce
