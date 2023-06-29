import { OptionType } from 'datatypes/OptionType'
import { ValueType } from 'datatypes/ValueType'

export default interface ComponentOptionModel {
	title: string
	name: string
	type: OptionType
	value: ValueType
}
