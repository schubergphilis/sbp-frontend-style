import { AlignType } from 'datatypes/AlignType'
import { HTMLAttributes } from 'react'
import { styled } from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
	isOpen?: boolean
	align?: AlignType
	hasPadding?: boolean
	children: JSX.Element | JSX.Element[] | React.ReactNode
}

const CardContent = ({
	isOpen = true,
	align = 'left',
	hasPadding = true,
	children,
	...props
}: Props) => {
	return (
		<Container
			$align={align}
			$hasPadding={hasPadding}
			$isOpen={isOpen}
			{...props}>
			{children}
		</Container>
	)
}

const Container = styled.div<{
	$isOpen: boolean
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
		!$isOpen &&
		`
        transition: max-height 0.5s ease-in-out, padding 0.4s step-end;
        max-height: 0;
        padding-top: 0;
        padding-bottom: 0;

    `}
`

export default CardContent
