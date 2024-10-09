import LoaderStyle, { LoaderStyleProps } from 'components/atoms/loaders/Loader'
import { AlignType } from 'datatypes/AlignType'
import { HTMLAttributes, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
	isOpen?: boolean
	isLoading?: boolean
	align?: AlignType
	hasPadding?: boolean
	refresh?: boolean
	children: JSX.Element | JSX.Element[] | React.ReactNode
}

const CardContent = ({
	isOpen,
	isLoading,
	align = 'left',
	hasPadding = true,
	refresh = false,
	children,
	...props
}: Props) => {
	const ref = useRef<HTMLDivElement>(null)
	const timer = useRef<NodeJS.Timeout>()

	const [height, setHeight] = useState<number | undefined>(undefined)
	const [refreshCycle, setRefreshCycle] = useState<number>(0)

	useEffect(() => {
		if (!refresh) return
		setRefreshCycle(Math.random())
	}, [refresh])

	useEffect(() => {
		clearTimeout(timer.current)
		setHeight(undefined)

		if (!isOpen) return

		timer.current = setTimeout(() => {
			setHeight(ref.current?.clientHeight ?? undefined)
		}, 400)
	}, [isOpen, refreshCycle])

	return (
		<Container
			ref={ref}
			$align={align}
			$hasPadding={hasPadding}
			$isOpen={isOpen}
			$isLoading={isLoading}
			style={{ maxHeight: height }}
			{...props}>
			{children}
		</Container>
	)
}

interface ContainerStyleProps extends LoaderStyleProps {
	$isOpen?: boolean
	$isLoading?: boolean
	$align: AlignType
	$hasPadding: boolean
}

const Container = styled.div<ContainerStyleProps>`
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

	${({ $isLoading }) => ($isLoading ? LoaderStyle : '')}
	
	&::after {
		right: initial;
		left: calc(50% - 0.625em);
	}
`

export default CardContent
