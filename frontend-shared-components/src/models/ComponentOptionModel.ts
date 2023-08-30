import { OptionType } from 'datatypes/OptionType'
import { ValueType } from 'datatypes/ValueType'
import SelectOptionModel from './SelectOptionModel'

export default interface ComponentOptionModel {
	title: string
	name: string
	type: OptionType
	options?: SelectOptionModel[]
	defaultValue?: ValueType | null
	value: ValueType | null
	general?: boolean
}
