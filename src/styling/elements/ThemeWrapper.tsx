import { useAppSelector } from 'hooks/UseReduxStore'
import { isDarkModeState } from 'store/SettingsSlice'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'styling/ThemeConfig'

interface Props {
	children: JSX.Element | JSX.Element[]
}

const ThemeWrapper = ({ children }: Props) => {
	const isDarkTheme = useAppSelector<boolean>(isDarkModeState)

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			{children}
		</ThemeProvider>
	)
}

export default ThemeWrapper
