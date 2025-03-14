import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface Props {
	index: number
	children?: JSX.Element | string
}

const Elipse = ({ index, children }: Props) => {
	const ref = useRef<HTMLDivElement>(null)
	const [width, setWidth] = useState<number>(0)

	useEffect(() => {
		if (!ref.current) return
		const element = ref.current
			?.closest('table')
			?.querySelector(`thead tr th:nth-child(${index + 1})`)
		setWidth(Math.round(element?.getBoundingClientRect().width ?? 0))
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
