import { CssColorType, CssSizeType } from '../datatypes/CssColorType'

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
		colorHighlight?: CssColorType
		colorCta?: CssColorType
		colorActive?: CssColorType
		colorZebra?: CssColorType
		badgeSize?: CssSizeType
		badgeColor?: CssColorType
		badgeColorBg?: CssColorType
		borderColor?: CssColorType
		buttonColor?: CssColorType
		buttonPrimaryColor?: CssColorType
		buttonPrimaryColorBg?: CssColorType
		buttonSecondaryColor?: CssColorType
		buttonSecondaryColorBg?: CssColorType
		buttonActiveColor?: CssColorType
		buttonDisabledColor?: CssColorType
		buttonDisabledColorBg?: CssColorType
		buttonDragColor?: CssColorType
		buttonDragColorBg?: CssColorType
		notificationInfoColor?: CssColorType
		notificationInfoColorBg?: CssColorType
		notificationWarningColor?: CssColorType
		notificationWarningColorBg?: CssColorType
		notificationSuccessColor?: CssColorType
		notificationSuccessColorBg?: CssColorType
		notificationErrorColor?: CssColorType
		notificationErrorColorBg?: CssColorType
		cardColorBg?: CssColorType
		inputColorActive?: CssColorType
		inputColorBg?: CssColorType
		inputPlaceholder?: CssColorType
		navigationColorBg?: CssColorType
		tooltipColor?: CssColorType
		tooltipColorBg?: CssColorType
	}

	export type DefaultStyleWithCustomVars = DefaultStyle & {
		[key: string]: any
	}

	export interface DefaultTheme {
		style: DefaultStyleWithCustomVars
		fonts: DefaultFonts
	}
}

export {}
