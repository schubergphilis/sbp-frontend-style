import { HTMLAttributes, useCallback } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	date: string
	showDays?: boolean
}

const TimestampBar = ({ date, showDays = false, ...props }: Props) => {
	const showDifference = useCallback(() => {
		const currentDate = new Date()

		// Calculate the difference in milliseconds
		const differenceInMs = currentDate.getTime() - new Date(date).getTime()

		// Convert milliseconds to days, hours, and minutes
		const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24))
		const hours = Math.floor(
			(differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		)
		const minutes = Math.floor(
			(differenceInMs % (1000 * 60 * 60)) / (1000 * 60)
		)

		const textDays = days === 1 ? `${days} day` : days > 1 ? `${days} days` : ''
		const textHours =
			hours === 1
				? `${days > 0 ? ',' : ''} ${hours} hour`
				: hours > 1
					? `${days > 0 ? ',' : ''} ${hours} hours`
					: ''
		const textMinutes =
			minutes === 1
				? `, ${minutes} minute`
				: minutes > 1
					? `, ${minutes} minutes`
					: ''

		// Format the result
		return days === 0
			? ` ${textHours} ${textMinutes}`
			: days > 3
				? `${textDays}`
				: `${textDays} ${textHours}`
	}, [date, showDays])

	return (
		<Button {...props}>
			{showDays
				? showDifference()
				: new Date(date).toLocaleDateString('nl-nl', {
						month: 'numeric',
						day: 'numeric',
						year: 'numeric',
						hour: '2-digit',
						minute: '2-digit'
					})}
		</Button>
	)
}

const Button = styled.button`
	cursor: pointer;
	white-space: nowrap;
`
export default TimestampBar
