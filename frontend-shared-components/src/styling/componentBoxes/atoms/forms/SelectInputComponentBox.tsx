import { SelectInput } from 'components/atoms/forms'
import ComponentOptionModel from 'models/ComponentOptionModel'
import SelectOptionModel from 'models/SelectOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { generalOptions } from 'styling/settings/GeneralOptions'

const SelectInputComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Placeholder',
			name: 'placeholder',
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

	const selectOptions: SelectOptionModel[] = [
		{ name: 'First Item', value: 'test' },
		{ name: 'Second Item', value: 'testing' }
	]

	return (
		<ComponentBox
			title="Select Input"
			description="Select components are used for collecting user provided information from a list of options."
			options={options}>
			<SelectInput>
				{selectOptions.map(({ name, value }, index) => (
					<option key={index} value={value}>
						{name}
					</option>
				))}
			</SelectInput>
		</ComponentBox>
	)
}

export default SelectInputComponentBox
