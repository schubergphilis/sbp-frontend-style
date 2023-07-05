import { AlignType } from 'datatypes/AlignType'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
	align?: AlignType
	children: JSX.Element | JSX.Element[] | React.ReactNode
}

const CardFooter = ({ align = 'left', children, ...props }: Props) => {
	return (
		<Container $align={align} {...props}>
			{children}
		</Container>
	)
}

const Container = styled.div<{ $align: AlignType }>`
	display: flex;
	justify-content: space-between;
	flex-direction: ${({ $align }) =>
		$align === 'right' ? 'row-reverse' : 'row'};
	//padding-top: 1em;
	border-top: 1px solid ${({ theme }) => theme.style.borderColor};
`

export default CardFooter
