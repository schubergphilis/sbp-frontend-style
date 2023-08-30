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
			title: 'Type',
			name: 'type',
			type: 'select',
			options: [
				{ name: 'Text', value: 'text' },
				{ name: 'Password', value: 'password' },
				{ name: 'Email', value: 'email' },
				{ name: 'Phonenumber', value: 'tel' },
				{ name: 'Number', value: 'number' },
				{ name: 'Hidden', value: 'hidden' }
			],
			value: 'text'
		},
		{
			title: 'Read only',
			name: 'readOnly',
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
			<TextInput onChange={() => {}} />
		</ComponentBox>
	)
}

export default TextInputComponentBox
