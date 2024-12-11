import ProgressCirlce, { ProgressCricleProps } from 'helpers/ProgressHelper'

interface Props extends ProgressCricleProps {}

const DonutChart = (props: Props) => {
	return <ProgressCirlce {...props} />
}

export default DonutChart
