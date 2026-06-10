import {
	createGlobalStyle,
	DefaultFonts,
	DefaultStyle
} from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        list-style: none;
        border: none;
        background: none;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        color: inherit;
    }

    html {
        scrollbar-gutter: stable;
    }

    body {
        margin: 0;
        font-family: 'TT Interfaces', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: ${({ theme }) => theme.style.colorBg};
        font-family: ${({ theme }) =>
					theme.fonts.fontRegular}, Arial, sans-serif;
                    
        font-size:  ${({ theme }) => theme.style.fontSize}px;
        color:  ${({ theme }) => theme.style.fontColor};
        line-height: 1.5em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${({ theme }) =>
					theme.fonts.headerReqular}, Arial, sans-serif;
        line-height: 1.25em;
    }

    h1 {
        font-size: 2em;
    }
    
    h2, h3, h4 {
        color: inherit;
        font-size: 1.625em;
    }

    h3 {
        font-size: 1.5em;
    }
    
    h4 {
        font-size: 1.25em;
    }

    code {
        font-family: ${({ theme }) =>
					theme.fonts
						.code}, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    svg {
        display: inline-block;
        vertical-align: middle;
    }

	@keyframes rotating {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
`

const fonts: DefaultFonts = {
	code: 'TT Interphases Mono Regular',
	fontRegular: 'TT Interphases Regular',
	fontBold: 'TT Interphases Bold',
	headerReqular: 'TT Interphases Bold'
}

const lightStyle: DefaultStyle = {
	badgeColor: 'rgba(255 255 255 / 1)',
	badgeColorBg: 'rgba(30 128 237 / 1)',
	borderColor: 'rgba(22 12 23 / .15)',
	buttonActiveColor: 'rgba(22 12 23 / .75)',
	buttonColor: 'rgba(255 255 255 / 1)',
	buttonDisabledColor: 'rgba(255 255 255 / 1)',
	buttonDisabledColorBg: 'rgba(22 12 23 / .75)',
	buttonDragColor: 'inherit',
	buttonDragColorBg: 'rgba(255 255 255 / 1)',
	buttonPrimaryColor: 'rgba(255 255 255 / 1)',
	buttonPrimaryColorBg: 'rgba(30 128 237 / 1)',
	buttonSecondaryColor: 'rgba(2 12 23 / 1)',
	buttonSecondaryColorBg: 'rgba(30 232 237 / 1)',
	cardColorBg: 'rgba(232 242 253 / .90)',
	cardHeaderColor: 'rgba(255 255 255 / 1)',
	cardHeaderColorBg: 'rgba(30 128 237 / 1)',
	colorActive: 'rgba(30 128 237 / 1)',
	colorBg: 'rgba(255 255 255 / 1)', // 'rgba(232 242 253 / 1)',
	colorCta: 'inherit',
	colorHighlight: 'rgba(0 0 0 / 0.075)',
	colorPrimary: 'rgba(30 128 237 / 1)',
	colorSecondary: 'rgba(30 232 237 / 1)',
	colorZebra: 'rgba(0 0 0 / 0.05)',
	fontColor: 'rgba(2 12 23 / 1)',
	fontSize: 16,
	inputBorderColor: 'rgba(0 0 0 / 1)',
	inputColorActive: 'rgba(30 128 237 / 1)',
	inputColorBg: 'rgba(255 255 255 / 1)',
	inputPlaceholder: 'rgba(22 12 23 / .5)',
	navigationColorBg: 'rgba(232 242 253 / .90)',
	notificationErrorColor: 'rgba(255 255 255 / 1)',
	notificationErrorColorBg: 'rgba(231 76 60 / 1)',
	notificationInfoColor: 'rgba(255 255 255 / 1)',
	notificationInfoColorBg: 'rgba(52 152 219 / 1)',
	notificationSuccessColor: 'rgba(255 255 255 / 1)',
	notificationSuccessColorBg: 'rgba(7 188 12 / 1)',
	notificationWarningColor: 'rgba(2 12 23 / 1)',
	notificationWarningColorBg: 'rgba(255 204 0 / 1)',
	radius: 8,
	shadow: 'rgba(2 12 23 / 0.25)',
	tooltipColor: 'rgba(255 255 255 / 1)',
	tooltipColorBg: 'rgba(2 12 23 / 0.95)'
}

const darkStyle: DefaultStyle = {
	...lightStyle,
	...{
		borderColor: 'rgba(232 242 253 / .75)',
		buttonActiveColor: 'rgba(232 242 253 / .75)',
		buttonDisabledColor: 'rgba(232 242 253 / .75)',
		buttonDisabledColorBg: 'rgba(232 242 253 / .75)',
		buttonDragColor: 'rgba(2 12 23 / 1)',
		cardColorBg: 'rgba(232 242 253 / .10)',
		colorBg: 'rgba(2 12 23 / 1)',
		colorHighlight: 'rgba(255 255 255 / 0.95)',
		fontColor: 'rgba(232 242 253 / 1)',
		inputBorderColor: 'rgba(232 242 253 / .75)',
		inputColorBg: 'rgba(232 242 253 / .10)',
		inputPlaceholder: 'rgba(255 255 255 / .5)',
		navigationColorBg: 'rgba(232 242 253 / .10)',
		shadow: 'rgba(232 242 253 / 0.1)',
		tooltipColor: 'rgba(2 12 23 / 1)',
		tooltipColorBg: 'rgba(255 255 255 / 0.95)'
	}
}

const largeLightStyle: DefaultStyle = {
	...lightStyle,
	...{
		fontSize: 24
	}
}

const largeDarkStyle: DefaultStyle = {
	...darkStyle,
	...{
		fontSize: 24
	}
}

export const lightTheme: DefaultTheme = {
	style: lightStyle,
	fonts: fonts
}

export const largeLightTheme: DefaultTheme = {
	style: largeLightStyle,
	fonts: fonts
}

export const darkTheme: DefaultTheme = {
	style: darkStyle,
	fonts: fonts
}

export const largeDarkTheme: DefaultTheme = {
	style: largeDarkStyle,
	fonts: fonts
}
