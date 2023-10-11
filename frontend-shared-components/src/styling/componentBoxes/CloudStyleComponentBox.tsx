import { ActionButton } from 'components'
import ComponentOptionModel from 'models/ComponentOptionModel'

import ComponentBox from 'styling/elements/box/ComponentBox'

const CloudStyleComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Dark mode',
			name: 'isDarkMode',
			type: 'boolean',
			defaultValue: false,
			value: null,
			global: true
		},
		{
			title: 'Large mode',
			name: 'isLargeMode',
			type: 'boolean',
			defaultValue: false,
			value: null,
			global: true
		},
		{
			title: 'Light style',
			name: 'lightStyle',
			type: 'element',
			defaultValue: { colorSecondary: '#ff6600' },
			value: null,
			global: true
		},
		{
			title: 'Dark style',
			name: 'darkStyle',
			type: 'element',
			defaultValue: { colorSecondary: '#8cd600' },
			value: null,
			global: true
		}
	]

	return (
		<ComponentBox
			title="Cloud style"
			description="Within the base of the application it needs a Style wrapper <b>CloudStyle</b> to set the default styling and this will also be the input for customizing the components for your needs."
			options={options}>
			<CloudStyle>
				<ActionButton>Welcome</ActionButton>
			</CloudStyle>
		</ComponentBox>
	)
}

const CloudStyle = ({ children }: { children: JSX.Element }) => children
export default CloudStyleComponentBox
