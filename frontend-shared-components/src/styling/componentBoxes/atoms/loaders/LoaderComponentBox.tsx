import LoaderStyle from 'components/atoms/loaders/Loader'
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
			<DummyLoaderContainer></DummyLoaderContainer>
		</ComponentBox>
	)
}

const DummyLoaderContainer = () => <Container size={56}></Container>

const Container = styled.div<{ size?: number }>`
	position: relative;
	width: 56px;
	height: 56px;
	${LoaderStyle}
`

export default LoaderComponentBox
