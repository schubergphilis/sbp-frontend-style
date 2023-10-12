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
			title: 'Content',
			name: 'children',
			type: 'text',
			value: 'More information'
		},
		{
			title: 'Open',
			name: 'isOpen',
			type: 'boolean',
			defaultValue: true,
			value: true
		}
	]
	return (
		<ComponentBox
			title="Modal"
			description="Text link can be used to trigger events within the page."
			options={options}>
			<StyledModal children={undefined} isOpen={false} toggle={() => {}} />
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
export default ModalComponentBox
