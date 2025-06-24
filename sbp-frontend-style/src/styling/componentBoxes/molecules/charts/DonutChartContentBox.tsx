import DonutChart from 'components/molecules/charts/DonutChart'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'

const DonutChartComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Initial',
			name: 'initial',
			type: 'number',
			value: '100'
		},
		{
			title: 'Current',
			name: 'current',
			type: 'number',
			value: '75'
		},
		{
			title: 'Center info',
			name: 'centerInfo',
			type: 'text',
			value: '75%'
		},
		{
			title: 'Bg Color',
			name: 'color',
			type: 'color',
			value: '#494949'
		},
		{
			title: 'Fill Color',
			name: 'fillColor',
			type: 'color',
			value: '#1EE8ED'
		},
		{
			title: 'Reverse',
			name: 'inverse',
			type: 'boolean',
			value: false
		},
		{
			title: 'Rounded',
			name: 'isRounded',
			type: 'boolean',
			value: false
		}
	]
	return (
		<ComponentBox
			title="Donut Chart"
			description="Text link can be used to trigger events within the page."
			options={options}>
			<DonutChart />
		</ComponentBox>
	)
}

export default DonutChartComponentBox
