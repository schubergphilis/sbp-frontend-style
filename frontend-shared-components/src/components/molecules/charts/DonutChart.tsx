import ProgressCircle, { ProgressCricleProps } from 'helpers/ProgressHelper'

interface Props extends ProgressCricleProps {}

const DonutChart = (props: Props) => {
	return <ProgressCircle {...props} />
}

export default DonutChart
