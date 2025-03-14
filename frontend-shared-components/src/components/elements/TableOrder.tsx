import { SortType } from 'datatypes/SortType'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	title: string
	sort: SortType
	selected: string
}

const TableOrder = ({ title, sort, selected, ...props }: Props) => {
	return (
		<Button type="button" {...props}>
			<span>{title}</span>
			<Order>
				{sort === 'ASC' && selected === title && <ArrowUp />}
				{sort === 'DESC' && selected === title && <ArrowDown />}
			</Order>
		</Button>
	)
}
const Button = styled.button`
	font-weight: bold;
	cursor: pointer;
	display: flex;
	justify-content: center;
`
const Order = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25em;
	margin-left: 0.25em;
	justify-content: center;
	width: 0.375em;
`
const ArrowUp = styled.div`
	margin-bottom: 0.375em;
	border: 0.375em solid;
	border-color: transparent transparent
		${({ theme }) => theme.style.tooltipColorBg} transparent;
`
const ArrowDown = styled(ArrowUp)`
	margin-bottom: unset;
	margin-top: 0.375em;
	border-color: ${({ theme }) => theme.style.tooltipColorBg} transparent
		transparent transparent;
`

export default TableOrder
