import Card from 'components/molecules/cards/Card'
import CardContent from 'components/molecules/cards/CardContent'
import CardHeader from 'components/molecules/cards/CardHeader'
import { MouseEvent, ReactNode } from 'react'
import { styled } from 'styled-components'

interface Props {
	isOpen: boolean
	toggle: VoidFunction
	title?: string
	children: ReactNode
}

const Modal = ({ isOpen, toggle, title = '', children, ...props }: Props) => {
	const stopPropagation = (e: MouseEvent<HTMLDivElement>): void => {
		e.stopPropagation()
	}

	return (
		<Backdrop $isActive={isOpen} onClick={toggle} className="modal" {...props}>
			<ModalBox onClick={stopPropagation}>
				<Card>
					<CardHeader isRemove onClick={toggle} isOpen={title !== ''}>
						<h1>{title}</h1>
					</CardHeader>
					<CardContent>{children}</CardContent>
				</Card>
			</ModalBox>
		</Backdrop>
	)
}

export const Backdrop = styled.div<{ $isActive: boolean }>`
	position: fixed;
	inset: 0px;
	z-index: 1000;
	background-color: ${({ theme }) => theme.style.shadow};
	backdrop-filter: blur(2px);
	overflow-y: auto;
	scrollbar-gutter: stable;
	opacity: 1;
	transition:
		opacity 0.5s ease-in-out,
		z-index 0.5s step-start;

	display: flex;
	align-items: center;
	justify-content: center;

	${({ $isActive }) =>
		!$isActive &&
		`
        opacity: 0;
        z-index: -10;
        pointer-events: none;
        overflow-y: hidden;
        transition: opacity 0.5s ease-in-out, z-index 0.5s step-end, overflow-y 0.5s step-end;
    `}
`
const ModalBox = styled.div`
	max-width: 75%;
	margin: auto;
`

export default Modal
