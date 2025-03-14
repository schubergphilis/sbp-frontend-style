import DynamicTable from 'components/molecules/tables/DynamicTable'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'

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
				// stripe
				// showMore
				// onSort={(selected, sort) => alert(`sorting ${selected} => ${sort}`)}
				// onRowClick={(id) => alert(`click ${id}`)}
				// onShowMore={() => alert('show more!')}
				columns={[
					{ title: 'id', type: 'number', width: 80, order: true },
					{ title: 'name', type: 'string', order: true },
					{ title: 'missing', type: 'boolean' },
					{ title: 'description', type: 'string', nobreak: true },
					{ title: 'data', type: 'date', width: 250 }
				]}
				data={[
					[
						1, // <div key={'test_sdsd'}>test</div>,
						'John Doe',
						true,
						' ServicedeskAanpassen Services onder beheer Servicedesk',
						new Date('2025-03-13')
					],
					[
						2,
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
				]}
			/>
		</ComponentBox>
	)
}

export default DynamicTableComponentBox
