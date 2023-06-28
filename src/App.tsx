import PageSize from 'components/atoms/debugger/PageSize'
import NavigationBar from 'components/organisms/NavigationBar'
import { device, deviceSize } from 'helpers/DeviceHelper'
import styled, { ThemeProvider } from 'styled-components'
import 'styling/global.css'
import LogoIcon from 'styling/icons/LogoIcon'
import { GlobalStyles, lightTheme } from 'styling/ThemeConfig'

const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyles />
			<MainContainer>
				<NavigationBar>
					<span></span>
				</NavigationBar>
				<LogoIcon width={200} height={200} />
				<h1>Welcome to the SBP Cloud Styleguide</h1>
			</MainContainer>
			<PageSize />
		</ThemeProvider>
	)
}

const MainContainer = styled.div`
	position: relative;
	width: 100%;
	min-height: 100%;
	margin: 0 auto;
	padding: 0 1em;

	text-align: center;

	@media ${device.desktop} {
		max-width: ${deviceSize.desktop};
	}
`

export default App
