import CardContent from 'components/molecules/cards/CardContent'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { styled } from 'styled-components'
import ComponentBox from 'styling/elements/box/ComponentBox'

const CardContentComponentBox = () => {
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
		},
		{
			title: 'Padding',
			name: 'hasPadding',
			type: 'boolean',
			defaultValue: true,
			value: true
		},
		{
			title: 'Open',
			name: 'isOpen',
			type: 'boolean',
			defaultValue: true,
			value: true
		},
		{
			title: 'Refresh',
			name: 'refresh',
			type: 'boolean',
			value: false
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
		}
	]
	return (
		<ComponentBox title="Card content" description="" options={options}>
			<StyledCardContent isOpen={false} children={undefined} />
		</ComponentBox>
	)
}

const StyledCardContent = styled(CardContent)<{ isOpen: boolean }>`
	border: 1px dashed ${({ theme }) => theme.style.notificationErrorColorBg};
	width: 20em;
	position: relative;
	overflow: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};

	&::before {
		content: 'content box';
		display: block;
		font-size: 0.75em;
		padding: 0 0.25em;
		border: 1px dashed ${({ theme }) => theme.style.notificationErrorColorBg};
		position: absolute;
		top: -2.25em;
		left: 0em;
	}
`

const StyledChild = styled.div`
	border: 1px solid ${({ theme }) => theme.style.shadow};
	padding: 0.5em;
`

export default CardContentComponentBox
