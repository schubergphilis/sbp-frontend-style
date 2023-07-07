import ToggleButton from 'components/atoms/buttons/ToggleButton'
import LightModeIcon from 'components/icons/LightModeIcon'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { defaultOptions } from 'styling/settings/DefaultOptions'

const ToggleButtonComponentBox = () => {
	const options: ComponentOptionModel[] = [
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

	return (
		<ComponentBox
			title="Toggle button"
			description="A toggle button will give the option to switch between 2 states of an option."
			options={options}>
			<ToggleButton isActive={false} />
		</ComponentBox>
	)
}

export default ToggleButtonComponentBox
