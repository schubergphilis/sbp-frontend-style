import { AlignType } from 'datatypes/AlignType'
import { HTMLAttributes, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
	isOpen?: boolean
	align?: AlignType
	hasPadding?: boolean
	children: JSX.Element | JSX.Element[] | React.ReactNode
}

const CardContent = ({
	isOpen,
	align = 'left',
	hasPadding = true,
	children,
	...props
}: Props) => {
	const ref = useRef<HTMLDivElement>(null)
	const [height, setHeight] = useState<number | undefined>(undefined)
	const timer = useRef<NodeJS.Timeout>()

	useEffect(() => {
		clearTimeout(timer.current)
		setHeight(undefined)

		if (!isOpen) return

		timer.current = setTimeout(() => {
			setHeight(ref.current?.clientHeight ?? undefined)
		}, 800)
	}, [isOpen])

	return (
		<Container
			ref={ref}
			$align={align}
			$hasPadding={hasPadding}
			$isOpen={isOpen}
			style={{ maxHeight: height }}
			{...props}>
			{children}
		</Container>
	)
}

const Container = styled.div<{
	$isOpen?: boolean
	$align: AlignType
	$hasPadding: boolean
}>`
	padding: ${({ $hasPadding }) => ($hasPadding ? '2em' : '0')};
	overflow: hidden;
	max-height: 100em;
	transition:
		max-height 0.4s ease-in-out,
		padding 0.1s ease-in-out;
	text-align: ${({ $align }) => $align};

	${({ $isOpen }) =>
		$isOpen === false &&
		`
        transition: max-height 0.2s ease-in-out, padding 0.1s step-end;
        max-height: 0;
        padding-top: 0;
        padding-bottom: 0;

    `}
`

export default CardContent
