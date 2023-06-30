import ToggleButton from 'components/atoms/buttons/ToggleButton'
import DarkModeIcon from 'components/icons/DarkModeIcon'
import FontSizeIcon from 'components/icons/FontSizeIcon'
import LightModeIcon from 'components/icons/LightModeIcon'
import NavigationBar from 'components/organisms/NavigationBar'
import { useAppDispatch, useAppSelector } from 'hooks/UseReduxStore'
import {
	isDarkModeState,
	isLargeModeState,
	setDarkModeState,
	setLargeModeState
} from 'store/SettingsSlice'
import { styled } from 'styled-components'

const Navigation = () => {
	const dispatch = useAppDispatch()
	const isDarkTheme = useAppSelector<boolean>(isDarkModeState)
	const isLargeMode = useAppSelector<boolean>(isLargeModeState)

	const toggleDarkTheme = (): void => {
		dispatch(setDarkModeState(!isDarkTheme))
	}

	const toggleFontSize = (): void => {
		dispatch(setLargeModeState(!isLargeMode))
	}

	return (
		<NavigationBar>
			<span>test</span>
			<Settings>
				<ToggleButton
					isActive={isLargeMode}
					icon={<FontSizeIcon />}
					onClick={toggleFontSize}
					title="Change font size of the website"
				/>
				<ToggleButton
					isActive={isDarkTheme}
					icon={isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
					onClick={toggleDarkTheme}
					title="Change color theme of the website"
				/>
			</Settings>
		</NavigationBar>
	)
}

const Settings = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 0.5em;
`

export default Navigation
