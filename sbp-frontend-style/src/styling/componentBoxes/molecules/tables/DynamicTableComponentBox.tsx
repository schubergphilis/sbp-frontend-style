import DynamicTable from 'components/molecules/tables/DynamicTable'
import { TableRow } from 'datatypes/TableRow'
import { TableSection } from 'datatypes/TableSection'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'

const flatData: TableRow[] = [
	[
		1,
		'John Doe',
		true,
		'ServicedeskAanpassen Services onder beheer Servicedesk',
		new Date('2025-03-13')
	],
	[
		200000,
		'Jane Smith',
		false,
		'ServicedeskAanpassen Services onder beheer Servicedesk',
		new Date('2024-12-01')
	],
	[
		3,
		'Alice Johnson',
		true,
		'ServicedeskAanpassen Services onder beheer Servicedesk',
		new Date('2023-07-20')
	]
]

const sectionsData: TableSection[] = [
	{
		spanRowsTop: [[{ colSpan: 5, content: 'Group: Active cases' }]],
		rows: [
			[
				1,
				'John Doe',
				true,
				'ServicedeskAanpassen Services onder beheer Servicedesk',
				new Date('2025-03-13')
			],
			[
				200000,
				'Jane Smith',
				false,
				'ServicedeskAanpassen Services onder beheer Servicedesk',
				new Date('2024-12-01')
			]
		],
		spanRowsBottom: [
			[
				{ colSpan: 3, content: 'Subtotal active' },
				{ colSpan: 2, content: '2 records' }
			]
		]
	},
	{
		spanRowsTop: [[{ colSpan: 5, content: 'Group: Resolved cases' }]],
		rows: [
			[
				3,
				'Alice Johnson',
				true,
				'ServicedeskAanpassen Services onder beheer Servicedesk',
				new Date('2023-07-20')
			]
		]
	}
]

const DynamicTableComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Title',
			name: 'title',
			type: 'text',
			value: 'Missing persons'
		},
		{
			title: 'Show More title',
			name: 'showMoreTitle',
			type: 'text',
			value: 'Show more'
		},
		{
			title: 'No data text',
			name: 'noData',
			type: 'text',
			value: 'No data found'
		},
		{
			title: 'Data',
			name: 'data',
			type: 'dataset',
			options: [
				{ name: 'Flat data', value: 'flat', payload: flatData },
				{ name: 'Sections data', value: 'sections', payload: sectionsData }
			],
			defaultValue: flatData,
			value: flatData
		},
		{
			title: 'Show More',
			name: 'showMore',
			type: 'boolean',
			defaultValue: false,
			value: null
		},
		{
			title: 'Zebra striping',
			name: 'stripe',
			type: 'boolean',
			defaultValue: false,
			value: null
		},

		{
			title: 'Show More Action',
			name: 'onShowMore',
			type: 'element',
			defaultValue: (): void => {
				alert('show more!')
			},
			value: null
		},
		{
			title: 'Row click Action',
			name: 'onRowClick',
			type: 'element',
			defaultValue: (id: string): void => alert(`Click id ${id}`),
			value: null
		},
		{
			title: 'Sort Action',
			name: 'onSort',
			type: 'element',
			defaultValue: (selected, sort): void =>
				alert(`sorting ${selected} => ${sort}`),
			value: null
		}
	]

	return (
		<ComponentBox
			title="Dynamic Table"
			description="Dynamic Table"
			options={options}>
			<DynamicTable
				isSticky
				changeColumnSize={console.log}
				columns={[
					{ title: 'id', type: 'number', width: 50, order: true },
					{ title: 'name', type: 'string', order: true },
					{ title: 'missing', type: 'boolean' },
					{ title: 'description', type: 'string' },
					{ title: 'data', type: 'date', width: 100 }
				]}
				foot={[['test', 'test']]}
			/>
		</ComponentBox>
	)
}

export default DynamicTableComponentBox
