import { ValueType } from 'datatypes/ValueType'

export default interface SelectOptionModel {
	name: string
	value: string
	payload?: ValueType
}
