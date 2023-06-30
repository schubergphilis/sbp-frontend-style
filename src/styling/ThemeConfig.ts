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
`

const fonts: DefaultFonts = {
	fontRegular: 'TT Interphases Regular',
	fontBold: 'TT Interphases Bold',
	headerReqular: 'TT Interphases Bold',
	code: 'TT Interphases Mono Regular'
}

const lightStyle: DefaultStyle = {
	radius: 8,
	fontSize: 16,
	shadow: 'rgba(2, 12, 23, 0.25)',
	colorBg: 'rgb(255, 255, 255)', //'rgb(232, 242, 253)',
	fontColor: 'rgb(2, 12, 23)',
	colorPrimary: 'rgb(30, 128, 237)',
	colorSecondary: 'rgb(30, 232, 237)',
	colorCta: 'inherit',
	borderColor: 'rgba(22, 12, 23, .15)',
	buttonActiveColor: 'rgba(22, 12, 23, .75)',
	cardColorBg: 'rgba(232, 242, 253, .90)',
	inputColorBg: 'rgb(255, 255, 255)',
	inputPlaceholder: 'rgba(22, 12, 23, .15)'
}

const darkStyle: DefaultStyle = {
	...lightStyle,
	...{
		fontColor: 'rgb(232, 242, 253)',
		colorBg: 'rgb(2, 12, 23)',
		borderColor: 'rgba(232, 242, 253, .75)',
		buttonActiveColor: 'rgba(232, 242, 253, .75)',
		cardColorBg: 'rgba(232, 242, 253, .10)',
		inputColorBg: 'rgba(232, 242, 253, .10)'
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
