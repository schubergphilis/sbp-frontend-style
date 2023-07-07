import ComponentOptionModel from 'models/ComponentOptionModel'

export const defaultOptions: ComponentOptionModel[] = [
	{
		title: 'Disabled state',
		name: 'disabled',
		type: 'boolean',
		value: false,
		general: true
	},
	{
		title: 'Title description',
		name: 'title',
		type: 'text',
		value: 'Extra description',
		general: true
	}
]
