import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface Props {
	update: number
	children?: JSX.Element | string
}

const Elipse = ({ update, children }: Props) => {
	const timerRef = useRef<NodeJS.Timeout>(undefined)
	const ref = useRef<HTMLDivElement>(null)
	const [width, setWidth] = useState<number>(0)

	const getWidth = useCallback(() => {
		const element = ref.current?.closest('td, th') as HTMLTableCellElement
		const padding =
			parseInt(
				document.defaultView
					?.getComputedStyle(element, '')
					.getPropertyValue('padding-left') ?? '',
				10
			) * 2

		const xwidth = Math.round(element?.getBoundingClientRect().width ?? 0)

		setWidth(xwidth - padding)
	}, [ref])

	useEffect(() => {
		if (!ref.current) return

		clearTimeout(timerRef.current)
		timerRef.current = setTimeout(() => getWidth(), 100)

		return () => {
			clearTimeout(timerRef.current)
		}
	}, [ref, update])

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
`

export default Elipse
