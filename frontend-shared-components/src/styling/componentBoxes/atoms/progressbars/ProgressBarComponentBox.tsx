import { ProgressBar } from 'components/atoms/progressbars'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'

const ProgressBarComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Length',
			name: 'length',
			type: 'number',
			value: '100'
		},
		{
			title: 'Bg Color',
			name: 'bgColor',
			type: 'color',
			value: '#494949'
		},
		{
			title: 'Fill Color',
			name: 'fillColor',
			type: 'color',
			value: '#ffcc01'
		},
		{
			title: 'Reverse',
			name: 'inverse',
			type: 'boolean',
			value: false
		}
	]
	return (
		<ComponentBox
			title="Progress Bar"
			description="A progress bar to help visualise a timed action"
			options={options}>
			<ProgressBar length={10} onTimerFinish={() => {}} />
		</ComponentBox>
	)
}

export default ProgressBarComponentBox
