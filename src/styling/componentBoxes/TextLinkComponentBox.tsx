import TextLink from 'components/atoms/buttons/TextLink'
import DarkModeIcon from 'components/icons/DarkModeIcon'
import LightModeIcon from 'components/icons/LightModeIcon'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { defaultOptions } from 'styling/settings/DefaultOptions'

const TextLinkComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Link text',
			name: 'children[1]',
			type: 'text',
			value: 'More information'
		},
		{
			title: 'Active button',
			name: 'isActive',
			type: 'boolean',
			value: true
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
			title="Text link"
			description="Text link can be used to trigger events within the page."
			options={options}>
			<TextLink children={undefined} />
		</ComponentBox>
	)
}

export default TextLinkComponentBox
