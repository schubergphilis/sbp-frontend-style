import LightModeIcon from 'components/icons/LightModeIcon'
import CardHeader from 'components/molecules/cards/CardHeader'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { defaultOptions } from 'styling/settings/DefaultOptions'

const CardHeaderComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Title',
			name: 'children[0]',
			type: 'text',
			value: 'More information'
		},
		{
			title: 'Collapse',
			name: 'onClick',
			type: 'element',
			defaultValue: (): void => {},
			value: null
		},
		{
			title: 'Change collapse icon',
			name: 'icon',
			type: 'element',
			defaultValue: <LightModeIcon />,
			value: null
		},
		{
			title: 'Open Status',
			name: 'isOpen',
			type: 'boolean',
			defaultValue: false,
			value: null
		},
		...defaultOptions
	]
	return (
		<ComponentBox
			title="Card header"
			description="Text link can be used to trigger events within the page."
			options={options}>
			<CardHeader children={undefined} />
		</ComponentBox>
	)
}

export default CardHeaderComponentBox
