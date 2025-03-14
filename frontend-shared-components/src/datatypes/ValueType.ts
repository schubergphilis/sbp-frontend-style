import { DefaultStyle } from 'styled-components'

export type ValueType =
	| boolean
	| string
	| JSX.Element
	| number
	| any[]
	| VoidFunction
	| ((id: string) => void)
	| ((selected: string, sort: any) => void)
	| DefaultStyle
