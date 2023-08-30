import CloudStyle from 'components/CloudStyle'
import { useAppSelector } from 'hooks/UseReduxStore'
import { isDarkModeState, isLargeModeState } from 'store/SettingsSlice'

interface Props {
	children: JSX.Element | JSX.Element[]
}

const ThemeWrapper = ({ children }: Props) => {
	const isDarkMode = useAppSelector<boolean>(isDarkModeState)
	const isLargeMode = useAppSelector<boolean>(isLargeModeState)

	return (
		<CloudStyle isDarkMode={isDarkMode} isLargeMode={isLargeMode}>
			{children}
		</CloudStyle>
	)
}

export default ThemeWrapper
