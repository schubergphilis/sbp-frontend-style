import ChipBadge from 'components/atoms/badges/ChipBadge'
import CloseIcon from 'components/icons/CloseIcon'
import LightModeIcon from 'components/icons/LightModeIcon'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { generalOptions } from 'styling/settings/GeneralOptions'

const ChipBadgeComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Button title',
			name: 'children[1]',
			type: 'text',
			value: 'Filter'
		},
		{
			title: 'Add Action',
			name: 'onClick',
			type: 'element',
			defaultValue: (): void => {},
			value: null
		},
		{
			title: 'Active Chip',
			name: 'isActive',
			type: 'boolean',
			defaultValue: false,
			value: null
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
			defaultValue: <CloseIcon />,
			value: null
		},
		...generalOptions,
		{
			title: 'Badge Amount',
			name: '$badge',
			type: 'number',
			value: 0,
			general: true
		},
		{
			title: 'Badge Small',
			name: '$isBadgeSmall',
			type: 'boolean',
			defaultValue: false,
			value: null,
			general: true
		},
		{
			title: 'Badge Position',
			name: '$position',
			type: 'select',
			options: [
				{ name: 'Left', value: 'left' },
				{ name: 'Right', value: 'right' }
			],
			value: ''
		}
	]

	return (
		<ComponentBox
			title="Chip badge"
			description="Chips help show information, make selections, filter content, or trigger actions"
			options={options}>
			<ChipBadge children={undefined} />
		</ComponentBox>
	)
}

export default ChipBadgeComponentBox
