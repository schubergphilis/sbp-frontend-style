import { JSX } from 'react'
import { DefaultStyle } from 'styled-components'

export type ValueType =
	| boolean
	| string
	| JSX.Element
	| number
	| any[]
	| VoidFunction
	| DefaultStyle
