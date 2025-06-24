import Card from 'components/molecules/cards/Card'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'

const CardComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Title',
			name: 'children[0]',
			type: 'text',
			value: 'More information'
		},
		{
			title: 'Padding',
			name: 'hasPadding',
			type: 'boolean',
			defaultValue: false,
			value: null
		},
		{
			title: 'Selected',
			name: 'isSelected',
			type: 'boolean',
			defaultValue: false,
			value: null
		},
		{
			title: 'Action',
			name: 'onClick',
			type: 'element',
			defaultValue: (): void => {},
			value: null
		}
	]
	return (
		<ComponentBox
			title="Card"
			description="Text link can be used to trigger events within the page."
			options={options}>
			<Card children={undefined} />
		</ComponentBox>
	)
}

export default CardComponentBox
