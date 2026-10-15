import { TableRow } from './TableRow'

export type SpanCell = { colSpan?: number; content: TableRow[0] }
export type ColSpanRow = SpanCell[]

export interface TableSection {
	rows: TableRow[]
	spanRowsTop?: ColSpanRow[]
	spanRowsBottom?: ColSpanRow[]
}
