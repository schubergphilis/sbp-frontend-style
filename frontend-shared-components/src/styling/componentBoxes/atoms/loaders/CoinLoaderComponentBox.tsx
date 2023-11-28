import CoinLoader from 'components/atoms/loaders/CoinLoader'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'

const CoinLoaderComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Size',
			name: 'size',
			type: 'number',
			value: '32'
		},
		{
			title: 'Color',
			name: 'color',
			type: 'color',
			value: '#ffcc01'
		}
	]
	return (
		<ComponentBox title="Coin Loader" description="" options={options}>
			<CoinLoader />
		</ComponentBox>
	)
}

export default CoinLoaderComponentBox
