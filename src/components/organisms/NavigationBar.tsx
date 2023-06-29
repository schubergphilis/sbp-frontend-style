import styled from 'styled-components'

interface Props {
	children: JSX.Element | JSX.Element[]
}

const NavigationBar = ({ children }: Props) => {
	return <NavBar>{children}</NavBar>
}

const NavBar = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1em;
	flex-wrap: nowrap;
	padding: 1em;
`

export default NavigationBar
