import { ReactNode } from 'react'

interface Props {
	condition: boolean
	wrapper: (children: ReactNode) => ReactNode
	children: ReactNode
}

const ConditionalWrapper = ({ condition, wrapper, children }: Props) => {
	console.log(condition)
	return condition ? wrapper(children) : children
}

export default ConditionalWrapper
