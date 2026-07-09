import ActionButton from 'components/atoms/buttons/ActionButton'
import Elipse from 'components/elements/Elipse'
import TableOrder from 'components/elements/TableOrder'
import TimestampBar from 'components/elements/TimestampBar'
import { IsValidDateString } from 'helpers/FunctionHelpers'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { SortType } from '../../../datatypes/SortType'
import { TableRow } from '../../../datatypes/TableRow'
import { ColSpanRow, TableSection } from '../../../datatypes/TableSection'
import ColumnModel from '../../../models/ColumnModel'
import ColumnResize from './ColumnResize'

const isTableSectionArray = (d: TableRow[] | TableSection[]): d is TableSection[] =>
	d.length > 0 && !Array.isArray(d[0]) && 'rows' in (d[0] as object)

export interface DynamicTableProps {
	title?: string
	columns: ColumnModel[]
	data?: TableRow[] | TableSection[]
	foot?: TableRow[]
	stripe?: boolean
	idColumn?: number
	onSort?: (selected: string, sort: SortType) => void
	onRowClick?: (
		ev: React.MouseEvent<HTMLTableRowElement>,
		data: string | TableRow
	) => void
	noData?: string
	showMore?: boolean
	showMoreTitle?: string
	onShowMore?: (ev: any) => void
	isSticky?: boolean
	columnSizeList?: number[]
	changeColumnSize?: (sizes: number[]) => void
}

const DynamicTable = ({
	title,
	data,
	columns,
	foot,
	onSort,
	onRowClick,
	showMore,
	idColumn = 0,
	stripe = false,
	noData = 'No data available',
	showMoreTitle = 'Show more',
	onShowMore,
	isSticky = false,
	columnSizeList,
	changeColumnSize,
	...props
}: DynamicTableProps) => {
	const alignList = ['date', 'number']

	const ref = useRef<HTMLTableElement>(null)

	const [showDays, setShowDays] = useState<boolean>(false)
	const [sort, setSort] = useState<SortType>('ASC')
	const [selected, setSelected] = useState<string>('')
	const [refresh, setRefresh] = useState<number>(0)

	const resolvedSections: TableSection[] =
		data != null
			? isTableSectionArray(data)
				? data
				: [{ rows: data as TableRow[] }]
			: []

	const calculateColspan = useCallback(
		(index: number) => {
			const total = columns.length
			const footTotal = foot?.length ?? 0

			return index === footTotal - 1 ? total - footTotal : undefined
		},
		[columns, foot]
	)

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

	const renderCell = (cell: TableRow[0], dataIndex: number, keyPrefix: string) => (
		<td
			key={`${keyPrefix}_cell_${dataIndex}`}
			data-empty={!cell || cell === '' ? true : undefined}
			align={
				alignList.indexOf(columns[dataIndex]?.type ?? 'string') > -1
					? 'right'
					: 'left'
			}>
			{columns[dataIndex].type === 'date' ||
			(isNaN(Number(cell)) && IsValidDateString(cell)) ? (
				<TimestampBar
					date={cell as string}
					onClick={handleShowDays}
					showDays={showDays}
				/>
			) : typeof cell === 'string' ? (
				<Elipse update={refresh}>{cell.toLocaleString()}</Elipse>
			) : (
				<Elipse update={refresh}>
					{typeof cell === 'boolean' ? cell.toString() : (cell as any)}
				</Elipse>
			)}
		</td>
	)

	const renderSpanRows = (spanRows: ColSpanRow[], keyPrefix: string) =>
		spanRows.map((spanRow, rowIndex) => (
			<tr key={`${keyPrefix}_span_${rowIndex}`}>
				{spanRow.map((cell, cellIndex) => (
					<td
						key={`${keyPrefix}_span_${rowIndex}_cell_${cellIndex}`}
						colSpan={cell.colSpan}>
						{typeof cell.content === 'boolean'
							? cell.content.toString()
							: (cell.content as any)}
					</td>
				))}
			</tr>
		))

	const totalRows = resolvedSections.reduce((sum, s) => sum + s.rows.length, 0)

	return (
		<Table
			ref={ref}
			cellSpacing={0}
			$stripe={stripe}
			$isSticky={isSticky}
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
					{columns.map(
						({ title, type = 'string', order, width }, dataIndex) => (
							<Th
								width={`${columnSizeList?.[dataIndex] || '*'}`}
								style={width ? { minWidth: width } : undefined}
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

								{changeColumnSize && (
									<ColumnResize
										onChange={changeColumnSize}
										columnCount={columns.length}
									/>
								)}
							</Th>
						)
					)}
				</tr>
			</thead>

			{resolvedSections.map((section, sectionIndex) => (
				<tbody key={`table_section_${sectionIndex}`}>
					{section.spanRowsTop &&
						renderSpanRows(
							section.spanRowsTop,
							`section_${sectionIndex}_top`
						)}
					{section.rows.map((row, index) => (
						<tr
							data-rowclick={
								onRowClick !== null && onRowClick !== undefined
									? true
									: undefined
							}
							key={`table_section_${sectionIndex}_row_${index}`}
							onClick={(ev) =>
								(onRowClick &&
									onRowClick(
										ev,
										idColumn === -1 ? row : row[idColumn].toString()
									)) ??
								undefined
							}>
							{row.map((cell, dataIndex) =>
								renderCell(
									cell,
									dataIndex,
									`table_section_${sectionIndex}_row_${index}`
								)
							)}
						</tr>
					))}
					{section.spanRowsBottom &&
						renderSpanRows(
							section.spanRowsBottom,
							`section_${sectionIndex}_bottom`
						)}
				</tbody>
			))}

			{totalRows === 0 && (
				<tbody>
					<tr>
						<th align="center" colSpan={columns.length}>
							{noData}
						</th>
					</tr>
				</tbody>
			)}

			{foot && (
				<tfoot>
					{foot?.map((row, index) => (
						<tr
							data-rowclick={
								onRowClick !== null && onRowClick !== undefined
									? true
									: undefined
							}
							key={`table_foot_row_${index}`}
							onClick={(ev) =>
								(onRowClick && onRowClick(ev, row)) ?? undefined
							}>
							{row.map((cell, dataIndex) => (
								<td
									key={`table_foot_row_${index}_cell_${dataIndex}`}
									colSpan={calculateColspan(dataIndex)}>
									<div>
										{typeof cell === 'boolean'
											? cell.toString()
											: (cell as any)}
									</div>
								</td>
							))}
						</tr>
					))}
				</tfoot>
			)}

			{showMore && totalRows > 0 && (
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

const Table = styled.table<{
	$stripe: boolean
	$isSticky: boolean
}>`
	width: 100%;

	& thead {
		position: relative;

		& td {
			text-align: left;
		}
		& th {
			background-color: ${({ theme: { style } }) => style.tableHeaderColorBg};
			color: ${({ theme: { style } }) => style.tableHeaderColor};

			user-select: none;
			white-space: nowrap;

			& span {
				display: inline-block;
			}
		}

		& td,
		& th {
			&[align='right'] {
				text-align: right;
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
				background-color: transparent;
				transition: background-color 0.25s ease-in-out;
			}
			&:hover {
				th,
				td {
					background-color: ${({ theme }) => theme.style.colorHighlight};
				}
			}
		}
	}

	${({ $isSticky }) =>
		$isSticky &&
		`
		& thead {
			&:first-child {
				& td,
				& th {
					position: sticky;
					top: 0px;
					z-index: 1;
				}
			}

			& td,
			& th {
				position: sticky;
				top: calc(3em - 2px);
				z-index: 1;
			}
		}

		& tfoot {
			& td,
			& th {
				position: sticky;
				bottom: 0;
				z-index: 1;
			}
		}

	`}
`
const Th = styled.th<{ width: string; align: string }>`
	position: relative;
	overflow: visible;
`

export default DynamicTable
