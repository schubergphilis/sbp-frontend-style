import Tooltip from 'components/atoms/tooltips/Tooltip'
import { OrientationType } from 'datatypes'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'

const TooltipComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Avatar Name',
			name: 'title',
			type: 'text',
			value: 'Small description on a certain element or text'
		},
		{
			title: 'Placement',
			name: 'placement',
			type: 'select',
			options: [
				{ name: 'Top', value: 'top' },
				{ name: 'Bottom', value: 'bottom' },
				{ name: 'Left', value: 'left' },
				{ name: 'Right', value: 'right' }
			],
			value: ''
		}
	]

	return (
		<ComponentBox title="Tooltip" description="" options={options}>
			<DummyTooltipContainer title="" />
		</ComponentBox>
	)
}

const DummyTooltipContainer = ({
	...props
}: {
	title: string
	placement?: OrientationType
}) => {
	return (
		<>
			A tooltip within <Tooltip {...props}>a piece</Tooltip> of text.
		</>
	)
}

export default TooltipComponentBox
