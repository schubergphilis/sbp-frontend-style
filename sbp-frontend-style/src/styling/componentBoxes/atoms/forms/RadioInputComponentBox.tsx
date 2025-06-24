import RadioInput from 'components/atoms/forms/RadioInput'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { generalOptions } from 'styling/settings/GeneralOptions'

const RadioInputComponentBox = () => {
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
			title="Radio Input"
			description="Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a Select component because it uses less space."
			options={options}>
			<RadioInput id="radioTest" label="" />
		</ComponentBox>
	)
}

export default RadioInputComponentBox
