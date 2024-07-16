import BadgeStyle, { BadgeStyleProps } from 'components/atoms/badges/Badge'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { styled } from 'styled-components'
import ComponentBox from 'styling/elements/box/ComponentBox'

const BadgeComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Badge Amount',
			name: '$badge',
			type: 'number',
			value: 1
		},
		{
			title: 'Badge Small',
			name: '$isBadgeSmall',
			type: 'boolean',
			defaultValue: false,
			value: null
		},
		{
			title: 'Badge Position',
			name: '$position',
			type: 'select',
			options: [
				{ name: 'Left', value: 'left' },
				{ name: 'Right', value: 'right' }
			],
			value: ''
		}
	]

	return (
		<ComponentBox
			title="Badge"
			description="Badges show notifications, counts, or status information on navigation items and icons. This functionality is automatically enabled on <b>ActionButton</b>, <b>ClipBadge</b>, <b>Avatar</b> and <b>TextLink</b>. If you want to enable it to a custom component use code below:"
			descriptionCode="import { BadgeStyle, BadgeStyleProps } from '@frontent-shared-components/badge/badge'\r\n\r\nconst StyledBadge = styled.div<BadgeStyleProps>`\r\n\t${BadgeStyle}\r\n`"
			options={options}>
			<DummyBadgeContainer />
		</ComponentBox>
	)
}

const DummyBadgeContainer = (props: BadgeStyleProps) => {
	return <Container {...props}>Dummy box</Container>
}

const Container = styled.div<BadgeStyleProps>`
	border: 2px dashed red;
	border-radius: 0.5em;
	display: inline-block;
	padding: 0.5em 1em;

	${BadgeStyle}
`

export default BadgeComponentBox
