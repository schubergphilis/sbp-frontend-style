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

export const AbbreviateName = (name: string): string => {
	const item = name.trim()

	if (item.includes(' ')) {
		const words = item.split(' ')
		const abbr = words.map((word) => word.charAt(0))
		return abbr.join('').toUpperCase()
	} else {
		return item.slice(0, 2).toUpperCase()
	}
}

export const IsValidDateString = (cell: any) => {
	const date = new Date(cell)

	return (
		!isNaN(date.getTime()) &&
		typeof cell === 'string' &&
		cell.trim().length > 0 &&
		/^[\d/\-.\s:TZ]+$/.test(cell) // Only numbers, / - . : and spaces
	)
}
