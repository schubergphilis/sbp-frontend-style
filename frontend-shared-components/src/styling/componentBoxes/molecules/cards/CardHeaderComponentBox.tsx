import LightModeIcon from 'components/icons/LightModeIcon'
import CardHeader from 'components/molecules/cards/CardHeader'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { generalOptions } from 'styling/settings/GeneralOptions'

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
		{
			title: 'Remove card',
			name: 'isRemove',
			type: 'boolean',
			defaultValue: false,
			value: null
		},
		{
			title: 'Padding',
			name: 'hasPadding',
			type: 'boolean',
			defaultValue: true,
			value: true
		},
		...generalOptions
	]
	return (
		<ComponentBox
			title="Card header"
			description="A card element can contain a <b>CardHeader</b> to amplify the title of specific content. Also some controls come in handy with using this header, like collapsing the <b>CardContent</b> or remove the card form the page."
			options={options}>
			<CardHeader children={undefined} />
		</ComponentBox>
	)
}

export default CardHeaderComponentBox
