import CheckboxInput from 'components/atoms/forms/CheckboxInput'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { generalOptions } from 'styling/settings/GeneralOptions'

const CheckboxInputComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Label',
			name: 'label',
			type: 'text',
			value: 'Some placeholder'
		},
		{
			title: 'Readonly',
			name: 'readOnly',
			type: 'boolean',
			value: false,
			defaultValue: false,
			general: true
		},
		...generalOptions
	]

	return (
		<ComponentBox
			title="Checkbox Input"
			description="Checkboxes allow the user to select one or more items from a set. If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches."
			options={options}>
			<CheckboxInput id="checkTest" label="" />
		</ComponentBox>
	)
}

export default CheckboxInputComponentBox
