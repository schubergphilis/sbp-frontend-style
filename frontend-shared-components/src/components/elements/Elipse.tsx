import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface Props {
	index: number
	children?: JSX.Element | string
}

const Elipse = ({ index, children }: Props) => {
	const timerRef = useRef<NodeJS.Timeout>(undefined)
	const ref = useRef<HTMLDivElement>(null)
	const [width, setWidth] = useState<number>(0)

	const getWidth = useCallback(() => {
		const element = ref.current
			?.closest('table')
			?.querySelector(`thead tr th:nth-child(${index + 1})`)
		setWidth(Math.round(element?.getBoundingClientRect().width ?? 0))
	}, [ref])

	useEffect(() => {
		if (!ref.current) return

		clearTimeout(timerRef.current)
		timerRef.current = setTimeout(() => getWidth(), 100)

		return () => {
			clearTimeout(timerRef.current)
		}
	}, [ref])
	return (
		<Container
			style={{ width: width }}
			ref={ref}
			title={typeof children === 'string' ? children : undefined}>
			{children}
		</Container>
	)
}

const Container = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 15em;
`

export default Elipse
