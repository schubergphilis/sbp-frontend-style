import { ColumnType } from 'datatypes/ColumnType'

export default interface ColumnModel {
	title: string
	type: ColumnType
	order?: boolean
	nobreak?: boolean
}
