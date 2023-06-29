import ToggleButton from 'components/atoms/buttons/ToggleButton'
import DarkModeIcon from 'components/icons/DarkModeIcon'
import LightModeIcon from 'components/icons/LightModeIcon'
import NavigationBar from 'components/organisms/NavigationBar'
import { useAppDispatch, useAppSelector } from 'hooks/UseReduxStore'
import { isDarkModeState, setDarkModeState } from 'store/SettingsSlice'

const Navigation = () => {
	const dispatch = useAppDispatch()
	const isDarkTheme = useAppSelector<boolean>(isDarkModeState)

	const toggleDarkTheme = (): void => {
		dispatch(setDarkModeState(!isDarkTheme))
	}

	return (
		<NavigationBar>
			<span>test</span>
			<ToggleButton
				$isActive={isDarkTheme}
				icon={isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
				onClick={toggleDarkTheme}
			/>
		</NavigationBar>
	)
}

export default Navigation
