import { SelectInput } from 'components/atoms/forms'
import ComponentOptionModel from 'models/ComponentOptionModel'
import SelectOptionModel from 'models/SelectOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { defaultOptions } from 'styling/settings/DefaultOptions'

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
			name: 'readonly',
			type: 'boolean',
			value: false,
			defaultValue: false,
			general: true
		},
		...defaultOptions
	]

	const selectOptions: SelectOptionModel[] = [
		{ name: 'First Item', value: 'test' },
		{ name: 'Second Item', value: 'testing' }
	]

	return (
		<ComponentBox title="Select Input" description="" options={options}>
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
