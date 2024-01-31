import { device, deviceSize } from 'helpers/DeviceHelper'
import { Provider } from 'react-redux'
import { makeStore } from 'store/Store'
import { styled } from 'styled-components'
import CloudStyleComponentBox from 'styling/componentBoxes/CloudStyleComponentBox'
import AvatarComponentBox from 'styling/componentBoxes/atoms/avatars/AvatarComponentBox'
import BadgeComponentBox from 'styling/componentBoxes/atoms/badges/BadgeComponentBox'
import ChipBadgeComponentBox from 'styling/componentBoxes/atoms/badges/ChipBadgeComponentBox'
import ActionButtonComponentBox from 'styling/componentBoxes/atoms/buttons/ActionButtonComponentBox'
import DragButtonComponentBox from 'styling/componentBoxes/atoms/buttons/DragButtonComponentBox'
import TextLinkComponentBox from 'styling/componentBoxes/atoms/buttons/TextLinkComponentBox'
import ToggleButtonComponentBox from 'styling/componentBoxes/atoms/buttons/ToggleButtonComponentBox'
import CheckboxInputComponentBox from 'styling/componentBoxes/atoms/forms/CheckboxInputComponentBox'
import RadioInputComponentBox from 'styling/componentBoxes/atoms/forms/RadioInputComponentBox'
import SelectInputComponentBox from 'styling/componentBoxes/atoms/forms/SelectInputComponentBox'
import TextInputComponentBox from 'styling/componentBoxes/atoms/forms/TextInputComponentBox'
import LoaderComponentBox from 'styling/componentBoxes/atoms/loaders/LoaderComponentBox'
import ProgressBarComponentBox from 'styling/componentBoxes/atoms/progressbars/ProgressBarComponentBox'
import ProgressTimerComponentBox from 'styling/componentBoxes/atoms/progressbars/ProgressTimerComponentBox'
import CardComponentBox from 'styling/componentBoxes/molecules/cards/CardComponentBox'
import CardContentComponentBox from 'styling/componentBoxes/molecules/cards/CardContentComponentBox'
import CardFooterComponentBox from 'styling/componentBoxes/molecules/cards/CardFooterComponentBox'
import CardHeaderComponentBox from 'styling/componentBoxes/molecules/cards/CardHeaderComponentBox'
import ModalComponentBox from 'styling/componentBoxes/molecules/modals/ModalComponentBox'
import NotificationComponentBox from 'styling/componentBoxes/molecules/notifications/NotificationComponentBox'
import AccordionComponentBox from 'styling/componentBoxes/organisms/accordion/AccordionComponentBox'
import NavigationBarComponentBox from 'styling/componentBoxes/organisms/navigation/NavigationBarComponentBox'
import TabBarComponentBox from 'styling/componentBoxes/organisms/tabbar/TabBarComponentBox'
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

							<CloudStyleComponentBox />

							<AvatarComponentBox />

							<BadgeComponentBox />

							<ChipBadgeComponentBox />

							<ActionButtonComponentBox />

							<DragButtonComponentBox />

							<NotificationComponentBox />

							<TextLinkComponentBox />

							<ToggleButtonComponentBox />

							<CheckboxInputComponentBox />

							<RadioInputComponentBox />

							<SelectInputComponentBox />

							<TextInputComponentBox />

							<LoaderComponentBox />

							<ProgressBarComponentBox />

							<ProgressTimerComponentBox />

							<CardComponentBox />

							<CardHeaderComponentBox />

							<CardContentComponentBox />

							<CardFooterComponentBox />

							<ModalComponentBox />

							<AccordionComponentBox />

							<NavigationBarComponentBox />

							<TabBarComponentBox />
						</Main>
					</Content>
					<Footer>
						<FooterBar />
					</Footer>
				</MainContainer>
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
