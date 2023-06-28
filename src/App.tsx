import styled, { ThemeProvider } from 'styled-components'
import './styling/global.css'
import LogoIcon from './styling/icons/LogoIcon'
import { GlobalStyles, lightTheme } from './styling/ThemeConfig'

const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyles />
			<Container>
				<LogoIcon width={200} height={200} />
				<h1>Welcome to the SBP Cloud Styleguide</h1>
			</Container>
		</ThemeProvider>
	)
}

const Container = styled.div`
	width: 20em;
	margin: 2em auto;
	text-align: center;
`

export default App
