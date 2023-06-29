import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
	isOpen?: boolean
	children: JSX.Element | JSX.Element[] | React.ReactNode
}

const CardContent = ({ isOpen = true, children, ...props }: Props) => {
	return (
		<Container $isOpen={isOpen} {...props}>
			{children}
		</Container>
	)
}

const Container = styled.div<{ $isOpen: boolean }>`
	padding: 2em;
	overflow: hidden;
	max-height: 100em;
	transition: max-height 0.4s ease-in-out, padding 0.1s ease-in-out;

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
