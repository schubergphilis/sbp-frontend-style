import LoaderStyle, { LoaderStyleProps } from 'components/atoms/loaders/Loader'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { styled } from 'styled-components'
import ComponentBox from 'styling/elements/box/ComponentBox'

const LoaderComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Size',
			name: 'size',
			type: 'number',
			value: 56
		}
	]

	return (
		<ComponentBox title="Loader" description="" options={options}>
			<Container />
		</ComponentBox>
	)
}

const Container = styled.div<LoaderStyleProps>`
	position: relative;
	${LoaderStyle}
`

export default LoaderComponentBox
