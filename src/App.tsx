import ActionButton from 'components/atoms/buttons/ActionButton'
import TextLink from 'components/atoms/buttons/TextLink'
import ToggleButton from 'components/atoms/buttons/ToggleButton'
import PageSize from 'components/atoms/debugger/PageSize'
import LightModeIcon from 'components/icons/LightModeIcon'
import { device, deviceSize } from 'helpers/DeviceHelper'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { Provider } from 'react-redux'
import { makeStore } from 'store/Store'
import styled from 'styled-components'
import ComponentBox from 'styling/elements/box/ComponentBox'
import FooterBar from 'styling/elements/FooterBar'
import MenuBar from 'styling/elements/MenuBar'
import Navigation from 'styling/elements/Navigation'
import ThemeWrapper from 'styling/elements/ThemeWrapper'
import 'styling/global.css'
import LogoIcon from 'styling/icons/LogoIcon'
import { GlobalStyles } from 'styling/ThemeConfig'

const App = () => {
	const defaultOptions: ComponentOptionModel[] = [
		{
			title: 'Disabled state',
			name: 'disabled',
			type: 'boolean',
			value: false,
			general: true
		},
		{
			title: 'Title description',
			name: 'title',
			type: 'text',
			value: 'Extra description',
			general: true
		}
	]

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
			defaultValue: <LightModeIcon />,
			value: null
		},
		...defaultOptions
	]

	const actionOptions: ComponentOptionModel[] = [
		{
			title: 'Button title',
			name: 'children[1]',
			type: 'text',
			value: 'More information'
		},
		{
			title: 'Block button',
			name: 'isBlock',
			type: 'boolean',
			value: false
		},
		{
			title: 'Rounded button',
			name: 'isRounded',
			type: 'boolean',
			value: false
		},
		{
			title: 'Button Style',
			name: 'variant',
			type: 'select',
			options: [
				{ name: 'Ghost button', value: 'ghost' },
				{ name: 'Call to Action', value: 'cta' }
			],
			value: ''
		},
		{
			title: 'Start Icon',
			name: 'children[0]',
			type: 'element',
			defaultValue: <LightModeIcon />,
			value: null
		},
		{
			title: 'End Icon',
			name: 'children[2]',
			type: 'element',
			defaultValue: <LightModeIcon />,
			value: null
		},
		...defaultOptions
	]

	const linkOptions: ComponentOptionModel[] = [
		{
			title: 'Link text',
			name: 'children[1]',
			type: 'text',
			value: 'More information'
		},
		{
			title: 'Active button',
			name: 'isActive',
			type: 'boolean',
			value: true
		},
		{
			title: 'Start Icon',
			name: 'children[0]',
			type: 'element',
			defaultValue: <LightModeIcon />,
			value: null
		},
		{
			title: 'End Icon',
			name: 'children[2]',
			type: 'element',
			defaultValue: <LightModeIcon />,
			value: null
		},
		...defaultOptions
	]

	return (
		<Provider store={makeStore()}>
			<ThemeWrapper>
				<GlobalStyles />
				<MainContainer>
					<Header>
						<Navigation />
					</Header>

					<Content>
						<Menu>
							<MenuBar />
						</Menu>
						<Main>
							<div>
								<LogoIcon width={200} height={200} />
								<h1>Welcome to the SBP Cloud Styleguide</h1>
							</div>

							<ComponentBox
								title="Toggle button"
								description="A toggle button will give the option to switch between 2 states of an option."
								options={toggleOptions}>
								<ToggleButton isActive={false} />
							</ComponentBox>

							<ComponentBox
								title="Action button"
								description="Action button can be used to trigger events within the page.<br/> When you use different Elements like <b>next/link</b> the buttonstyle can be imported:"
								descriptionCode="import { Link } from 'next/link'\r\nimport { ButtonStyle } from '@sbp-cloud-style/buttons/ActionButton'\r\nimport { VariantType } from '@sbp-cloud-style/datatype/VariantType'\r\n\r\nconst StyledLink = styled(Link)<{\r\n\t $variant?: VariantType;\r\n\t $isBlock: boolean;\r\n\t $isRounded: boolean\r\n}>`\r\n\t${ButtonStyle}\r\n`"
								options={actionOptions}>
								<ActionButton children={undefined} />
							</ComponentBox>

							<ComponentBox
								title="Text link"
								description="Text link can be used to trigger events within the page."
								options={linkOptions}>
								<TextLink children={undefined} />
							</ComponentBox>
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
	flex: 0 0 34%;
`
const Footer = styled.footer`
	flex: 0 0 auto;
`
export default App
