import Avatar from 'components/atoms/avatars/Avatar'
import DarkModeIcon from 'components/icons/DarkModeIcon'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'

const AvatarComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Avatar Name',
			name: 'name',
			type: 'text',
			value: 'White Pony'
		},
		{
			title: 'Small Avatar',
			name: '$isSmall',
			type: 'boolean',
			defaultValue: false,
			value: null
		},
		{
			title: 'Avatar Icon',
			name: 'children',
			type: 'element',
			defaultValue: <DarkModeIcon />,
			value: null
		},
		{
			title: 'Title description',
			name: 'title',
			type: 'text',
			value: 'Extra description',
			general: true
		},
		{
			title: 'Badge Amount',
			name: '$badge',
			type: 'number',
			value: 0,
			general: true
		},
		{
			title: 'Badge Small',
			name: '$isBadgeSmall',
			type: 'boolean',
			defaultValue: false,
			value: null,
			general: true
		}
	]

	return (
		<ComponentBox
			title="Avatar"
			description="Avatars can be used to define a user profile. It can have multiple designs. Generate a custom color avatar based on a name, add an icon or an image to it."
			options={options}>
			<Avatar />
		</ComponentBox>
	)
}

export default AvatarComponentBox
