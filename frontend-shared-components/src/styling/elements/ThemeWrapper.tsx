import CloudStyle from 'components/CloudStyle'
import { useAppSelector } from 'hooks/UseReduxStore'
import {
	darkStyleState,
	isDarkModeState,
	isLargeModeState,
	lightStyleState
} from 'store/SettingsSlice'
import { DefaultStyle } from 'styled-components'

interface Props {
	children: JSX.Element | JSX.Element[]
}

const ThemeWrapper = ({ children }: Props) => {
	const isDarkMode = useAppSelector<boolean>(isDarkModeState)
	const isLargeMode = useAppSelector<boolean>(isLargeModeState)
	const lightStyle = useAppSelector<DefaultStyle>(lightStyleState)
	const darkStyle = useAppSelector<DefaultStyle>(darkStyleState)

	return (
		<CloudStyle
			isDarkMode={isDarkMode}
			isLargeMode={isLargeMode}
			lightStyle={lightStyle}
			darkStyle={darkStyle}
			isDebug={true}>
			{children}
		</CloudStyle>
	)
}

export default ThemeWrapper
