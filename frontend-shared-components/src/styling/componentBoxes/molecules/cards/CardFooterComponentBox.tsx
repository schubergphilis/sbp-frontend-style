import CardFooter from 'components/molecules/cards/CardFooter'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { styled } from 'styled-components'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { generalOptions } from 'styling/settings/GeneralOptions'

const CardFooterComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'First child',
			name: 'children[0]',
			type: 'element',
			value: <StyledChild>First</StyledChild>
		},
		{
			title: 'Second child',
			name: 'children[1]',
			type: 'element',
			defaultValue: <StyledChild>Second</StyledChild>,
			value: null
		},
		{
			title: 'Third child',
			name: 'children[2]',
			type: 'element',
			defaultValue: <StyledChild>Third</StyledChild>,
			value: null
		},
		{
			title: 'Padding',
			name: 'hasPadding',
			type: 'boolean',
			defaultValue: false,
			value: null
		},
		{
			title: 'Align',
			name: 'align',
			type: 'select',
			options: [
				{ name: 'Left', value: 'left' },
				{ name: 'Center', value: 'center' },
				{ name: 'Right', value: 'right' }
			],
			value: ''
		},
		...generalOptions
	]
	return (
		<ComponentBox
			title="Card footer"
			description="A card element can contain a <b>CardFooter</b> to optain Call-to-Action buttons."
			options={options}>
			<StyledCardFooter children={undefined} />
		</ComponentBox>
	)
}

const StyledCardFooter = styled(CardFooter)`
	width: 20em;
`
const StyledChild = styled.div`
	border: 1px solid ${({ theme }) => theme.style.shadow};
	padding: 0.5em;
`
export default CardFooterComponentBox
