import { ColumnType } from 'datatypes/ColumnType'

export default interface ColumnModel {
	title: string
	type: ColumnType
	width?: number
	order?: boolean
	nobreak?: boolean
}
