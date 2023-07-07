export const FirstToUpperCase = (item: string): string => {
	return item[0].toUpperCase() + item.slice(1).toLowerCase()
}

export const ToSnakeCase = (item: string): string => {
	return item
		.split(/(?=[A-Z])/)
		.join('_')
		.toLowerCase()
}

export const ToKebabCase = (item: string): string => {
	return item
		.split(/(?=[A-Z])/)
		.join('-')
		.toLowerCase()
}

export const RemoveExtension = (item: string): string => {
	return item.replace(/(\.*)\.[^\.]+$/gi, '')
}

export const CleanName = (item: string): string => {
	return item.split(/(?=[A-Z])/).join(' ')
}
