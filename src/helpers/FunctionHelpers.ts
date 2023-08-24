export const FirstToUpperCase = (item: string): string => {
	return item ? item[0].toUpperCase() + item.slice(1).toLowerCase() : ''
}

export const ToSnakeCase = (item: string): string => {
	return item
		.split(/(?=[A-Z])/)
		.join('_')
		.toLowerCase()
}

export const ToKebabCase = (item: string): string => {
	const hasSpaces = item.match(/\s/) !== null

	// Split on spaces or on Capital letters
	const regex = hasSpaces ? /\s/ : /(?=[A-Z])/

	return item.split(regex).join('-').toLowerCase()
}

export const RemoveExtension = (item: string): string => {
	return item.replace(/(\.*)\.[^.]+$/gi, '')
}

export const CleanName = (item: string): string => {
	return item
		.split(/(?=[A-Z])/)
		.join(' ')
		.replace(/([^A-Z0-9\s])/gim, '')
}
