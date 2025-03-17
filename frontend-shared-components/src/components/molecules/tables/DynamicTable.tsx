import ActionButton from 'components/atoms/buttons/ActionButton'
import Elipse from 'components/elements/Elipse'
import TableOrder from 'components/elements/TableOrder'
import TimestampBar from 'components/elements/TimestampBar'
import { SortType } from 'datatypes/SortType'
import { TableRow } from 'datatypes/TableRow'
import { useAppSelector } from 'hooks/UseReduxStore'
import ColumnModel from 'models/ColumnModel'
import { useCallback, useEffect, useRef, useState } from 'react'
import { isDarkModeState } from 'store/SettingsSlice'
import styled from 'styled-components'

interface Props {
	title?: string
	columns: ColumnModel[]
	data?: TableRow[]
	stripe?: boolean
	idColumn?: number
	onSort?: (selected: string, sort: SortType) => void
	onRowClick?: (id: string) => void
	noData?: string
	showMore?: boolean
	showMoreTitle?: string
	onShowMore?: VoidFunction
}

const DynamicTable = ({
	title,
	data,
	columns,
	onSort,
	onRowClick,
	showMore,
	idColumn = 0,
	stripe = false,
	noData = 'No data available',
	showMoreTitle = 'Show more',
	onShowMore,
	...props
}: Props) => {
	const alignList = ['date', 'number']

	const ref = useRef<HTMLTableElement>(null)

	const isDarkTheme = useAppSelector<boolean>(isDarkModeState)

	const [showDays, setShowDays] = useState<boolean>(false)
	const [sort, setSort] = useState<SortType>('ASC')
	const [selected, setSelected] = useState<string>('')
	const [refresh, setRefresh] = useState<number>(0)

	const handleSortClick = useCallback(
		(title: string) => {
			const newSort =
				title === selected ? (sort === 'ASC' ? 'DESC' : 'ASC') : 'ASC'
			setSort(newSort)
			setSelected(title)

			if (onSort) onSort(title, newSort)
		},
		[selected, sort]
	)

	const handleShowDays = useCallback(
		(ev: React.MouseEvent<HTMLButtonElement>) => {
			ev.stopPropagation()
			ev.preventDefault()

			setShowDays(!showDays)
		},
		[showDays]
	)

	const handleResize = useCallback(() => {
		setRefresh(Math.random())
	}, [])

	useEffect(() => {
		if (!ref.current) return

		const observer = new ResizeObserver(handleResize)

		observer.observe(ref.current)

		return () => observer.disconnect()
	}, [ref])

	return (
		<Table
			ref={ref}
			cellSpacing={0}
			$stripe={stripe}
			$isDarkMode={isDarkTheme}
			{...props}>
			{title && title !== '' && (
				<thead>
					<tr>
						<td colSpan={columns.length}>
							<h3>{title}</h3>
						</td>
					</tr>
				</thead>
			)}
			<thead>
				<tr>
					{columns.map(({ title, type, order, width }, dataIndex) => (
						<Th
							width={width ? `${width}` : '*'}
							key={`table_head_cell_${dataIndex}`}
							align={alignList.indexOf(type) > -1 ? 'right' : 'left'}>
							{order ? (
								<TableOrder
									title={title}
									onClick={() => handleSortClick(title)}
									sort={sort}
									selected={selected}
								/>
							) : (
								<span>{title}</span>
							)}
						</Th>
					))}
				</tr>
			</thead>
			<tbody>
				{data?.map((row, index) => (
					<tr
						data-rowclick={
							onRowClick !== null && onRowClick !== undefined ? true : undefined
						}
						key={`table_body_row_${index}`}
						onClick={() =>
							(onRowClick && onRowClick(row[idColumn].toString())) ?? undefined
						}>
						{row.map((cell, dataIndex) => (
							<td
								key={`table_body_row_${index}_cell_${dataIndex}`}
								align={
									alignList.indexOf(columns[dataIndex].type) > -1
										? 'right'
										: 'left'
								}>
								{columns[dataIndex].type === 'date' ? (
									<TimestampBar
										date={cell as string}
										onClick={handleShowDays}
										showDays={showDays}
									/>
								) : columns[dataIndex].nobreak ? (
									<Elipse update={refresh}>{cell.toLocaleString()}</Elipse>
								) : (
									<div>
										{typeof cell === 'boolean'
											? cell.toString()
											: (cell as any)}
									</div>
								)}
							</td>
						))}
					</tr>
				))}
			</tbody>
			{data?.length === 0 && (
				<tfoot>
					<tr>
						<th align="center" colSpan={columns.length}>
							{noData}
						</th>
					</tr>
				</tfoot>
			)}
			{showMore && data && data?.length > 0 && (
				<tfoot>
					<tr>
						<th align="right" colSpan={columns.length}>
							<ActionButton type="button" onClick={onShowMore} variant="cta">
								{showMoreTitle}
							</ActionButton>
						</th>
					</tr>
				</tfoot>
			)}
		</Table>
	)
}

const Table = styled.table<{ $stripe: boolean; $isDarkMode: boolean }>`
	width: 100%;
	border-collapse: collapse;

	& thead {
		& td {
			text-align: left;
		}
		& th {
			background-color: ${({ theme }) => theme.style.colorPrimary};
			color: ${({ $isDarkMode, theme }) =>
				$isDarkMode ? theme.style.colorBg : theme.style.fontColor};

			user-select: none;
			white-space: nowrap;

			& span {
				display: inline-block;
			}
		}
	}

	${({ $stripe, theme }) =>
		$stripe &&
		`
        & tr:nth-child(even) {
            background-color: ${theme.style.colorZebra};
        }
    `}

	& td,
	& th {
		padding: 0.5em 1em;
		cursor: default;

		&:first-child {
			border-top-left-radius: ${({ theme }) => theme.style.radius}px;
			border-bottom-left-radius: ${({ theme }) => theme.style.radius}px;
		}

		&:last-child {
			border-top-right-radius: ${({ theme }) => theme.style.radius}px;
			border-bottom-right-radius: ${({ theme }) => theme.style.radius}px;
		}
	}

	& tbody {
		& tr[data-rowclick] {
			th,
			td {
				cursor: pointer;
			}
			&:hover {
				th,
				td {
					background-color: ${({ theme }) => theme.style.colorHighlight};
				}
			}
		}
	}
`
const Th = styled.th<{ width: string }>``

export default DynamicTable
