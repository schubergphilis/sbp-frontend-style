import DragButton from 'components/atoms/buttons/DragButton'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { generalOptions } from 'styling/settings/GeneralOptions'

const DragComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Orientation',
			name: 'orientation',
			type: 'select',
			options: [
				{ name: 'Top', value: 'top' },
				{ name: 'Right', value: 'right' },
				{ name: 'Bottom', value: 'bottom' },
				{ name: 'Left', value: 'left' }
			],
			value: ''
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
			value: '',
			general: true
		}
	]

	return (
		<ComponentBox title="Drag Button" description="" options={options}>
			<DragButton />
		</ComponentBox>
	)
}

export default DragComponentBox
