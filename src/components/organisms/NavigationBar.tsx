import ToggleButton from 'components/atoms/buttons/ToggleButton'
import DarkModeIcon from 'components/icons/DarkModeIcon'
import LightModeIcon from 'components/icons/LightModeIcon'
import { useState } from 'react'
import styled from 'styled-components'

interface Props {
	children: JSX.Element
}

const NavigationBar = ({ children }: Props) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

	const toggleDarkTheme = (): void => {
		setIsDarkTheme(!isDarkTheme)
	}

	return (
		<NavBar>
			{children}
			<ToggleButton
				$isActive={isDarkTheme}
				icon={isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
				onClick={toggleDarkTheme}
			/>
		</NavBar>
	)
}

const NavBar = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1em;
	flex-wrap: nowrap;
	padding: 1em;
`

export default NavigationBar
