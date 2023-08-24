import { HTMLAttributes } from 'react'
import { styled } from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
	hasPadding?: boolean
	children: JSX.Element | JSX.Element[] | React.ReactNode
}

const Card = ({ hasPadding = false, children, ...props }: Props) => {
	return (
		<Container $hasPadding={hasPadding} {...props}>
			{children}
		</Container>
	)
}

const Container = styled.div<{ $hasPadding: boolean }>`
	background-color: ${({ theme }) => theme.style.cardColorBg};
	border: 1px solid ${({ theme }) => theme.style.borderColor};
	border-radius: ${({ theme }) => theme.style.radius}px;
	padding: 0 ${({ $hasPadding }) => ($hasPadding ? '1em' : '0')};
	overflow: hidden;

	> div:last-child:not(:first-child) {
		//padding-top: 0;
	}
`

export default Card
