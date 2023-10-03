import TextLink from 'components/atoms/buttons/TextLink'
import DarkModeIcon from 'components/icons/DarkModeIcon'
import LightModeIcon from 'components/icons/LightModeIcon'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'
import { generalOptions } from 'styling/settings/GeneralOptions'

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
		...generalOptions,
	]
	return (
		<ComponentBox
			title="Text link"
			description="Text link can be used to trigger events within the page."
			descriptionCode="import { Link } from 'next/link'\r\nimport { TextLinkStyle } from '@frontent-shared-components/buttons/TextLink'\r\n\r\nconst StyledLink = styled(Link)<{\r\n\t $isActive?: boolean;\r\n\t $disabled?: boolean\r\n}>`\r\n\t${TextLinkStyle}\r\n`"
			options={options}>
			<TextLink children={undefined} />
		</ComponentBox>
	)
}

export default TextLinkComponentBox
