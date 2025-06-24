import Modal from 'components/molecules/modals/Modal'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { styled } from 'styled-components'
import ComponentBox from 'styling/elements/box/ComponentBox'

const ModalComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Title',
			name: 'title',
			type: 'text',
			value: 'More information'
		},
		{
			title: 'Open',
			name: 'isOpen',
			type: 'boolean',
			defaultValue: true,
			value: true
		},
		{
			title: 'Custom modal',
			name: 'isCustom',
			type: 'boolean',
			defaultValue: true,
			value: true
		}
	]
	return (
		<ComponentBox
			title="Modal"
			description="Modals can be used to show extra information on a page. With the <b>isCustom</b> attribute it is possible to create your own design into it. Otherwise it will make a standard modal with a Card Element in it."
			options={options}>
			<StyledModal
				children={<StyledChild key="1">Custom Element</StyledChild>}
				isOpen={false}
				toggle={() => {}}
			/>
		</ComponentBox>
	)
}

const StyledModal = styled(Modal)`
	position: relative;
	padding: 2em;

	> div {
		max-width: inherit;
	}
`
const StyledChild = styled.div`
	border: 1px dashed ${({ theme }) => theme.style.notificationErrorColorBg};
	padding: 0.5em;
`
export default ModalComponentBox
