import Notification from 'components/molecules/notifications/Notification'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'

const NotificationComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Title',
			name: 'title',
			type: 'text',
			value: 'Can AI popstars make it in the real world?'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
			value:
				"They sing, they dance, they model, but they don't exist in real life - virtual influencers are trying to break out of the metaverse and into the charts. From Alvin and The Chipmunks to Gorillaz, and Hatsune Miku to Polar, the music industry is no stranger to virtual characters as popstars."
		},
		{
			title: 'Notification Type',
			name: 'type',
			type: 'select',
			options: [
				{ name: 'Information', value: 'info' },
				{ name: 'Success', value: 'success' },
				{ name: 'Warning', value: 'warning' },
				{ name: 'Error', value: 'error' }
			],
			value: ''
		},
		{
			title: 'Open on hover',
			name: 'showMore',
			type: 'boolean',
			defaultValue: false,
			value: null
		},
		{
			title: 'Close notification',
			name: 'showClose',
			type: 'boolean',
			defaultValue: false,
			value: null
		}
	]

	return (
		<ComponentBox title="Notification" description="" options={options}>
			<Notification title="" />
		</ComponentBox>
	)
}

export default NotificationComponentBox
