import { CssColorType } from '../src/datatypes/CssColorType'

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
		radius?: number
		fontSize?: number
		shadow?: CssColorType
		fontColor?: CssColorType
		colorBg?: CssColorType
		colorPrimary?: CssColorType
		colorSecondary?: CssColorType
		colorCta?: CssColorType
		borderColor?: CssColorType
		buttonColor?: CssColorType
		buttonPrimaryColor?: CssColorType
		buttonSecondaryColor?: CssColorType
		buttonActiveColor?: CssColorType
		buttonDisabledColor?: CssColorType
		buttonDisabledColorBg?: CssColorType
		cardColorBg?: CssColorType
		inputColorBg?: CssColorType
		inputPlaceholder?: CssColorType
	}

	export interface DefaultTheme {
		style: DefaultStyle
		fonts: DefaultFonts
	}
}

export {}
