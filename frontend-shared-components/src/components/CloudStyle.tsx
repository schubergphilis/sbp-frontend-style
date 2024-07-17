import { DefaultFonts, DefaultStyle, ThemeProvider } from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'
import {
	GlobalStyles,
	darkTheme as defaultDarkTheme,
	lightTheme as defaultLightTheme
} from 'styling/ThemeConfig'
import PageSize from './atoms/debugger/PageSize'

type WithCustomStyle<T> = T & { [key: string]: any }
interface Props {
	isDarkMode?: boolean
	isLargeMode?: boolean
	lightStyle?: WithCustomStyle<DefaultStyle>
	darkStyle?: WithCustomStyle<DefaultStyle>
	fonts?: DefaultFonts
	isDebug?: boolean
	children: JSX.Element | JSX.Element[] | React.ReactNode
}

const CloudStyle = ({
	isDarkMode = false,
	isLargeMode = false,
	isDebug = false,
	lightStyle,
	darkStyle,
	fonts,
	children
}: Props) => {
	const largeStyle: DefaultStyle = { fontSize: 24 }
	const customFonts: DefaultFonts = { ...defaultLightTheme.fonts, ...fonts }
	const customLightStyle = { ...defaultLightTheme.style, ...lightStyle }
	const customDarkStyle = {
		...defaultDarkTheme.style,
		...lightStyle,
		...darkStyle
	}

	const customLightTheme: DefaultTheme = {
		style: customLightStyle,
		fonts: customFonts
	}

	const customDarkTheme: DefaultTheme = {
		style: customDarkStyle,
		fonts: customFonts
	}

	const customLargeDarkTheme: DefaultTheme = {
		style: { ...customDarkStyle, ...largeStyle },
		fonts: customFonts
	}

	const customLargeLightTheme: DefaultTheme = {
		style: { ...customLightStyle, ...largeStyle },
		fonts: customFonts
	}

	return (
		<ThemeProvider
			theme={
				isDarkMode
					? isLargeMode
						? customLargeDarkTheme
						: customDarkTheme
					: isLargeMode
						? customLargeLightTheme
						: customLightTheme
			}>
			<GlobalStyles />
			{children}
			{isDebug ? <PageSize /> : null}
		</ThemeProvider>
	)
}

export default CloudStyle
