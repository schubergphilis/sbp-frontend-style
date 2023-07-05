import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLDivElement> {
	isOpen?: boolean
	onClick?: VoidFunction
	icon?: JSX.Element
	children: JSX.Element | JSX.Element[] | React.ReactNode
}

const CardHeader = ({ onClick, isOpen, icon, children, ...props }: Props) => {
	return (
		<Container {...props}>
			<TitleInfo>{children}</TitleInfo>
			{onClick ? (
				<CollapseButton onClick={onClick}>{icon}</CollapseButton>
			) : null}
		</Container>
	)
}

const Container = styled.div`
	padding: 2em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5em;
	text-align: left;
	border-bottom: 1px solid ${({ theme }) => theme.style.borderColor};
`
const TitleInfo = styled.div`
	flex: 1 1 auto;
`
const CollapseButton = styled.button`
	vertical-align: middle;
	cursor: pointer;

	svg {
		margin-right: 0.5em;
	}
`
export default CardHeader
