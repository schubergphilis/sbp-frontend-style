import { CssColorType } from 'src/datatypes/CssColorType'
import 'styled-components'

declare module 'styled-components' {
	export interface DefaultFonts {
		fontRegular: string
		fontBold: string
		fontItalic?: string
		fontLight?: string
		headerReqular: string
		headerLight?: string
		code?: string
	}

	export interface DefaultStyle {
		radius: number
		fontSize: number
		shadow: CssColorType
		fontColor: CssColorType
		colorBg: CssColorType
		colorPrimary: CssColorType
		colorSecondary: CssColorType
		colorCta: CssColorType
		borderColor: CssColorType
		buttonActiveColor: CssColorType
		cardColorBg: CssColorType
	}

	export interface DefaultTheme {
		style: DefaultStyle
		fonts: DefaultFonts
	}
}
