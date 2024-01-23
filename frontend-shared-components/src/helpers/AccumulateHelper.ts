import { ValueType } from 'datatypes/ValueType'
import StepsModel from 'models/StepsModel'

export const AccumulateReturn = (
	accumulator: StepsModel,
	name: string,
	value: ValueType | null
): StepsModel => {
	if (value === null) return {}

	const { key, keyName, prev } = sliceInfo(accumulator, name)

	let xvalue = key && !prev ? [] : prev

	if (Array.isArray(xvalue)) {
		xvalue[Number(key)] = value
	} else {
		xvalue = value
	}

	return { [keyName]: xvalue }
}

export const AccumulateState = (
	accumulator: StepsModel,
	name: string
): ValueType | null => {
	const { key, prev } = sliceInfo(accumulator, name)

	return Array.isArray(prev) ? prev[Number(key)] : prev
}

interface InfoModel {
	key: string | undefined
	keyName: string
	prev: ValueType | null
}

const sliceInfo = (accumulator: StepsModel, name: string): InfoModel => {
	const key = name.match(/[\d+]/)?.[0]
	const keyName = name.replace(/\[\d+\]/gim, '')
	const prev = accumulator[keyName]

	return { key, keyName, prev }
}
