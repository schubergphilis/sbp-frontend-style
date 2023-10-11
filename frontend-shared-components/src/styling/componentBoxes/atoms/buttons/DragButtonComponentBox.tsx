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
		...generalOptions
	]

	return (
		<ComponentBox title="Drag Button" description="" options={options}>
			<DragButton />
		</ComponentBox>
	)
}

export default DragComponentBox
