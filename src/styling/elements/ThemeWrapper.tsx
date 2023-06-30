import { useAppSelector } from 'hooks/UseReduxStore'
import { isDarkModeState, isLargeModeState } from 'store/SettingsSlice'
import { ThemeProvider } from 'styled-components'
import {
	darkTheme,
	largeDarkTheme,
	largeLightTheme,
	lightTheme
} from 'styling/ThemeConfig'

interface Props {
	children: JSX.Element | JSX.Element[]
}

const ThemeWrapper = ({ children }: Props) => {
	const isDarkTheme = useAppSelector<boolean>(isDarkModeState)
	const isLargeMode = useAppSelector<boolean>(isLargeModeState)
	return (
		<ThemeProvider
			theme={
				isDarkTheme
					? isLargeMode
						? largeDarkTheme
						: darkTheme
					: isLargeMode
					? largeLightTheme
					: lightTheme
			}>
			{children}
		</ThemeProvider>
	)
}

export default ThemeWrapper
