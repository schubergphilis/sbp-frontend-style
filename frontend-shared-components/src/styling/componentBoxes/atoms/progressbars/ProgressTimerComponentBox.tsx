import { ProgressTimer } from 'components/atoms/progressbars'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { styled } from 'styled-components'
import ComponentBox from 'styling/elements/box/ComponentBox'

const ProgressTimerComponentBox = () => {
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
		},
		{
			title: 'Restart',
			name: 'restart',
			type: 'boolean',
			value: false
		}
	]
	return (
		<ComponentBox
			title="Progress Timer"
			description="A progress timer to help visualise a timed action"
			options={options}>
			<StyledProgressTimer
				length={10}
				size="5em"
				onTimerFinish={() => {
					console.log('Progress timer finished')
				}}
			/>
		</ComponentBox>
	)
}

const StyledProgressTimer = styled(ProgressTimer)`
	display: block;
	margin: auto;
`
export default ProgressTimerComponentBox
