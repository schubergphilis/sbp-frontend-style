import ActionButton from 'components/atoms/buttons/ActionButton'
import DarkModeIcon from 'components/icons/DarkModeIcon'
import LightModeIcon from 'components/icons/LightModeIcon'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { defaultOptions } from 'styling/settings/DefaultOptions'

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
		...defaultOptions
	]

	return (
		<ComponentBox
			title="Action button"
			description="Action button can be used to trigger events within the page.<br/> When you use different Elements like <b>next/link</b> the buttonstyle can be imported:"
			descriptionCode="import { Link } from 'next/link'\r\nimport { ButtonStyle } from '@frontent-shared-components/buttons/ActionButton'\r\nimport { VariantType } from '@frontent-shared-components/datatype/VariantType'\r\n\r\nconst StyledLink = styled(Link)<{\r\n\t $variant?: VariantType;\r\n\t $isBlock?: boolean;\r\n\t $isRounded?: boolean\r\n}>`\r\n\t${ButtonStyle}\r\n`"
			options={options}>
			<ActionButton children={undefined} />
		</ComponentBox>
	)
}

export default ActionButtonComponentBox
