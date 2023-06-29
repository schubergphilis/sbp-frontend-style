import PageSize from 'components/atoms/debugger/PageSize'
import { device, deviceSize } from 'helpers/DeviceHelper'
import { Provider } from 'react-redux'
import { makeStore } from 'store/Store'
import styled from 'styled-components'
import Navigation from 'styling/elements/Navigation'
import ThemeWrapper from 'styling/elements/ThemeWrapper'
import 'styling/global.css'
import LogoIcon from 'styling/icons/LogoIcon'
import { GlobalStyles } from 'styling/ThemeConfig'

const App = () => {
	return (
		<Provider store={makeStore()}>
			<ThemeWrapper>
				<GlobalStyles />
				<MainContainer>
					<Navigation />
					<LogoIcon width={200} height={200} />
					<h1>Welcome to the SBP Cloud Styleguide</h1>
				</MainContainer>
				<PageSize />
			</ThemeWrapper>
		</Provider>
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
