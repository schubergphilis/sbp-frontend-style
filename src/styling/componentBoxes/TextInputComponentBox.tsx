import { TextInput } from 'components/atoms/forms'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { defaultOptions } from 'styling/settings/DefaultOptions'

const TextInputComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Placeholder',
			name: 'placeholder',
			type: 'text',
			value: 'Some placeholder'
		},
		{
			title: 'Value',
			name: 'value',
			type: 'text',
			value: ''
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

	return (
		<ComponentBox
			title="Text Input"
			description="Text Fields let users enter and edit text."
			options={options}>
			<TextInput />
		</ComponentBox>
	)
}

export default TextInputComponentBox
