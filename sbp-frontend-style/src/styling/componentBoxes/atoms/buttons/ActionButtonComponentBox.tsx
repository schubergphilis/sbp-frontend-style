import ActionButton from 'components/atoms/buttons/ActionButton'
import DarkModeIcon from 'components/icons/DarkModeIcon'
import LightModeIcon from 'components/icons/LightModeIcon'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { generalOptions } from 'styling/settings/GeneralOptions'

const ActionButtonComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Button title',
			name: 'children[1]',
			type: 'text',
			value: 'More information'
		},
		{
			title: 'Block button',
			name: 'isBlock',
			type: 'boolean',
			value: false
		},
		{
			title: 'Rounded button',
			name: 'isRounded',
			type: 'boolean',
			value: false
		},
		{
			title: 'Loading button',
			name: 'isLoading',
			type: 'boolean',
			value: false
		},
		{
			title: 'Button Style',
			name: 'variant',
			type: 'select',
			options: [
				{ name: 'Ghost button', value: 'ghost' },
				{ name: 'Call to Action', value: 'cta' }
			],
			value: ''
		},
		{
			title: 'Start Icon',
			name: 'children[0]',
			type: 'element',
			defaultValue: <LightModeIcon />,
			value: null
		},
		{
			title: 'End Icon',
			name: 'children[2]',
			type: 'element',
			defaultValue: <DarkModeIcon />,
			value: null
		},
		...generalOptions,
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
		},
		{
			title: 'Badge Position',
			name: '$position',
			type: 'select',
			options: [
				{ name: 'Left', value: 'left' },
				{ name: 'Right', value: 'right' }
			],
			value: '',
			general: true
		}
	]

	return (
		<ComponentBox
			title="Action button"
			description="Action button can be used to trigger events within the page.<br/> When you use different Elements like <b>next/link</b> the buttonstyle can be imported:"
			descriptionCode="import { Link } from 'next/link'\r\nimport { ButtonStyle, ButtonStyleProps } from '@schubergphilis/sbp-frontend-style/buttons/ActionButton'\r\n\r\nconst StyledLink = styled(Link)<ButtonStyleProps>`\r\n\t${ButtonStyle}\r\n`"
			options={options}>
			<ActionButton children={undefined} />
		</ComponentBox>
	)
}

export default ActionButtonComponentBox
