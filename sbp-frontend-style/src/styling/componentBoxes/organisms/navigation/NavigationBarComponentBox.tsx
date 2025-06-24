import NavigationBar from 'components/organisms/NavigationBar'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { styled } from 'styled-components'
import ComponentBox from 'styling/elements/box/ComponentBox'

const NavigationBarComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'First child',
			name: 'children[0]',
			type: 'element',
			value: <StyledChild key="0">First</StyledChild>
		},
		{
			title: 'Second child',
			name: 'children[1]',
			type: 'element',
			defaultValue: <StyledChild key="1">Second</StyledChild>,
			value: null
		},
		{
			title: 'Third child',
			name: 'children[2]',
			type: 'element',
			defaultValue: <StyledChild key="2">Third</StyledChild>,
			value: null
		}
	]
	return (
		<ComponentBox title="Navigation Bar" description="" options={options}>
			<NavigationBar children={undefined} />
		</ComponentBox>
	)
}

const StyledChild = styled.div`
	border: 1px solid ${({ theme }) => theme.style.shadow};
	padding: 0.5em;
`

export default NavigationBarComponentBox
