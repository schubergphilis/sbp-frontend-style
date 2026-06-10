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
		badgeColor?: CssColorType
		badgeColorBg?: CssColorType
		badgeSize?: CssSizeType
		borderColor?: CssColorType
		buttonActiveColor?: CssColorType
		buttonColor?: CssColorType
		buttonDisabledColor?: CssColorType
		buttonDisabledColorBg?: CssColorType
		buttonDragColor?: CssColorType
		buttonDragColorBg?: CssColorType
		buttonPrimaryColor?: CssColorType
		buttonPrimaryColorBg?: CssColorType
		buttonSecondaryColor?: CssColorType
		buttonSecondaryColorBg?: CssColorType
		cardColorBg?: CssColorType
		cardHeaderColor?: CssColorType
		cardHeaderColorBg?: CssColorType
		colorActive?: CssColorType
		colorBg?: CssColorType
		colorCta?: CssColorType
		colorHighlight?: CssColorType
		colorPrimary?: CssColorType
		colorSecondary?: CssColorType
		colorZebra?: CssColorType
		fontColor?: CssColorType
		fontSize?: number
		inputBorderColor?: CssColorType
		inputColorActive?: CssColorType
		inputColorBg?: CssColorType
		inputPlaceholder?: CssColorType
		navigationColorBg?: CssColorType
		notificationErrorColor?: CssColorType
		notificationErrorColorBg?: CssColorType
		notificationInfoColor?: CssColorType
		notificationInfoColorBg?: CssColorType
		notificationSuccessColor?: CssColorType
		notificationSuccessColorBg?: CssColorType
		notificationWarningColor?: CssColorType
		notificationWarningColorBg?: CssColorType
		radius?: number
		shadow?: CssColorType
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
