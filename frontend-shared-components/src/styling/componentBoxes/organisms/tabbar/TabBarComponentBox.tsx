import TabBar from 'components/organisms/TabBar'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'

const TabBarComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Selected tab',
			name: 'selected',
			type: 'number',
			defaultValue: null,
			value: 1
		},
		{
			title: 'Classic Style',
			name: 'isClassic',
			type: 'boolean',
			defaultValue: true,
			value: null
		}
	]

	return (
		<ComponentBox
			title="Tab Bar"
			description="Tabs make it easy to explore and switch between different views."
			options={options}>
			<TabBar
				menu={['First menu', 'Second menu', 'Third menu']}
				selected={1}
				onChange={() => {}}
			/>
		</ComponentBox>
	)
}

export default TabBarComponentBox
