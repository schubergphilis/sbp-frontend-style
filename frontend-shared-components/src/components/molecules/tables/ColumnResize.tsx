import { useAppDispatch } from 'hooks/UseReduxStore'
import { useCallback, useRef } from 'react'
import { setColumnSizeListState } from 'store/DynamicTableSlice'
import styled from 'styled-components'

const ColumnResize = () => {
	const dispatch = useAppDispatch()

	const columnOffsetRef = useRef(0)
	const columnSizeRef = useRef(0)
	const columnTargetRef = useRef<HTMLTableCellElement | null>(null)
	const columnMinWidthRef = useRef(0)
	const columnChildrenRef = useRef<HTMLDivElement[]>([])

	const startColumnResize = useCallback(
		(ev: MouseEvent) => {
			const offset = ev.clientX - columnOffsetRef.current

			const width = Math.round(
				Math.max(columnMinWidthRef.current, columnSizeRef.current + offset)
			)
			columnTargetRef.current?.setAttribute('width', width.toLocaleString())

			columnChildrenRef.current?.map((item) => {
				item.style.setProperty('max-width', `${width}px`)
			})
		},
		[columnOffsetRef, columnSizeRef, columnTargetRef, columnMinWidthRef]
	)

	const handleColumnResize = useCallback(
		(ev: React.MouseEvent<HTMLDivElement>) => {
			const target = ev.target as HTMLDivElement

			columnOffsetRef.current = ev.clientX
			columnTargetRef.current = target.closest('th')
			columnSizeRef.current =
				Number(target.closest('th')?.getBoundingClientRect().width) || 0
			columnMinWidthRef.current = Math.round(
				Math.max(
					columnTargetRef.current
						?.querySelector('span')
						?.getBoundingClientRect().width ?? 0,
					parseInt(
						columnTargetRef.current?.style?.getPropertyValue('min-width') || '0'
					)
				)
			)

			const index = columnTargetRef.current?.cellIndex ?? 0
			columnChildrenRef.current = [
				...(columnTargetRef.current
					?.closest('table')
					?.querySelectorAll<HTMLDivElement>(
						`tbody tr td:nth-child(${index + 1}) div, tbody tr td:nth-child(${index + 1}) button`
					) ?? [])
			]

			// clear last column's width to avoid resizing all columns
			target
				.closest('tr')
				?.querySelector('th:last-child')
				?.setAttribute('width', '*')

			document.addEventListener('mousemove', startColumnResize)
			document.addEventListener('mouseup', stopColumnResize)
		},
		[startColumnResize]
	)

	const stopColumnResize = useCallback(() => {
		const sizes = [
			...(columnTargetRef.current?.closest('tr')?.querySelectorAll('th') ?? [])
		].map((item) => Number(item.getAttribute('width')) ?? 0)

		dispatch(setColumnSizeListState(sizes))

		document.removeEventListener('mousemove', startColumnResize)
		document.removeEventListener('mouseup', stopColumnResize)
	}, [])

	return <Container onMouseDown={handleColumnResize}></Container>
}

const Container = styled.div`
	position: absolute;
	right: -0.75em;
	top: 0;
	opacity: 0.2;
	transition:
		opacity 0.2s ease-in-out,
		color 0.2s ease-in-out;
	width: 1.5em;
	height: 100%;
	cursor: col-resize;
	z-index: 1;
	color: ${({ theme }) => theme.style.colorBg};

	&::after {
		content: '';
		position: absolute;
		display: block;
		right: 50%;
		top: 0;
		height: calc(100% - 1em);
		margin: 0.5em 0;
		border-left: 1px solid;
	}

	&:hover {
		opacity: 1;
		color: ${({ theme }) => theme.style.fontColor};
	}
`

export default ColumnResize
