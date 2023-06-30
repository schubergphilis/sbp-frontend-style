import ToggleButton from 'components/atoms/buttons/ToggleButton'
import PageSize from 'components/atoms/debugger/PageSize'
import LightModeIcon from 'components/icons/LightModeIcon'
import { device, deviceSize } from 'helpers/DeviceHelper'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { Provider } from 'react-redux'
import { makeStore } from 'store/Store'
import styled from 'styled-components'
import ComponentBox from 'styling/elements/box/ComponentBox'
import Navigation from 'styling/elements/Navigation'
import ThemeWrapper from 'styling/elements/ThemeWrapper'
import 'styling/global.css'
import LogoIcon from 'styling/icons/LogoIcon'
import { GlobalStyles } from 'styling/ThemeConfig'

const App = () => {
	const toggleOptions: ComponentOptionModel[] = [
		{
			title: 'Active state',
			name: 'isActive',
			type: 'boolean',
			value: false
		},
		{
			title: 'Show Icon',
			name: 'icon',
			type: 'element',
			value: <LightModeIcon />
		},
		{
			title: 'Disabled state',
			name: 'disabled',
			type: 'boolean',
			value: false
		},
		{
			title: 'Title description',
			name: 'title',
			type: 'text',
			value: 'Nice description about the functionality'
		}
	]
	return (
		<Provider store={makeStore()}>
			<ThemeWrapper>
				<GlobalStyles />
				<MainContainer>
					<Navigation />

					<ComponentBox
						title="Toggle button"
						description="A toggle button will give the option to switch between 2 states of an option."
						options={toggleOptions}>
						<ToggleButton isActive={false} />
					</ComponentBox>

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
