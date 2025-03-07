import { HTMLAttributes, JSX } from 'react'
import { styled } from 'styled-components'
import { AlignType } from '../../../datatypes/AlignType'

interface Props extends HTMLAttributes<HTMLDivElement> {
	align?: AlignType
	hasPadding?: boolean
	children: JSX.Element | JSX.Element[] | React.ReactNode
}

const CardFooter = ({
	align = 'left',
	hasPadding = false,
	children,
	...props
}: Props) => {
	return (
		<Container $align={align} $hasPadding={hasPadding} {...props}>
			{children}
		</Container>
	)
}

const Container = styled.div<{ $align: AlignType; $hasPadding: boolean }>`
	display: flex;
	justify-content: space-between;
	padding: ${({ $hasPadding }) => ($hasPadding ? '2em' : '0')};
	border-top: 1px solid ${({ theme }) => theme.style.borderColor};
	text-align: ${({ $align }) => $align};

	> * {
		flex: 1 1 50%;
	}
`

export default CardFooter
