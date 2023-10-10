import PageSize from 'components/atoms/debugger/PageSize'
import { device, deviceSize } from 'helpers/DeviceHelper'
import { Provider } from 'react-redux'
import { makeStore } from 'store/Store'
import { styled } from 'styled-components'
import ActionButtonComponentBox from 'styling/componentBoxes/ActionButtonComponentBox'
import AvatarComponentBox from 'styling/componentBoxes/AvatarComponentBox'
import BadgeComponentBox from 'styling/componentBoxes/BadgeComponentBox'
import CardComponentBox from 'styling/componentBoxes/CardComponentBox'
import CardHeaderComponentBox from 'styling/componentBoxes/CardHeaderComponentBox'
import ChipBadgeComponentBox from 'styling/componentBoxes/ChipBadgeComponentBox'
import DragButtonComponentBox from 'styling/componentBoxes/DragButtonComponentBox'
import NotificationComponentBox from 'styling/componentBoxes/NotificationComponentBox'
import SelectInputComponentBox from 'styling/componentBoxes/SelectInputComponentBox'
import TextInputComponentBox from 'styling/componentBoxes/TextInputComponentBox'
import TextLinkComponentBox from 'styling/componentBoxes/TextLinkComponentBox'
import ToggleButtonComponentBox from 'styling/componentBoxes/ToggleButtonComponentBox'
import FooterBar from 'styling/elements/FooterBar'
import Navigation from 'styling/elements/Navigation'
import ThemeWrapper from 'styling/elements/ThemeWrapper'
import MenuBar from 'styling/elements/menu/MenuBar'
import 'styling/global.css'
import LogoIcon from 'styling/icons/LogoIcon'

const App = () => {
	return (
		<Provider store={makeStore()}>
			<ThemeWrapper>
				<MainContainer>
					<Header>
						<Navigation />
					</Header>

					<Content>
						<Menu>
							<MenuBar />
						</Menu>
						<Main>
							<InfoBox>
								<LogoIcon width={200} height={200} />
								<h1>Welcome to Shared Components</h1>
							</InfoBox>

							<AvatarComponentBox />

							<BadgeComponentBox />

							<ChipBadgeComponentBox />

							<ActionButtonComponentBox />

							<DragButtonComponentBox />

							<NotificationComponentBox />

							<TextLinkComponentBox />

							<ToggleButtonComponentBox />

							<SelectInputComponentBox />

							<TextInputComponentBox />

							<CardComponentBox />

							<CardHeaderComponentBox />
						</Main>
					</Content>
					<Footer>
						<FooterBar />
					</Footer>
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

	display: flex;
	flex-direction: column;

	text-align: center;

	@media ${device.desktop} {
		max-width: ${deviceSize.desktop};
	}
`
const Content = styled.div`
	display: flex;
	flex: 1 0 auto;
	gap: 1em;
`
const Header = styled.header`
	flex: 0 0 auto;
`
const Main = styled.main`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1em;
`
const Menu = styled.menu`
	flex: 0 0 30%;
`
const Footer = styled.footer`
	flex: 0 0 auto;
`
const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1em;
	height: 90vh;
`
export default App
