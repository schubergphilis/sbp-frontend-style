import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: JSX.Element | JSX.Element[]
}

const NavigationBar = ({ children, ...props }: Props) => {
	return <NavBar {...props}>{children}</NavBar>
}

const NavBar = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1em;
	flex-wrap: nowrap;
	padding: 1em;
`

export default NavigationBar
