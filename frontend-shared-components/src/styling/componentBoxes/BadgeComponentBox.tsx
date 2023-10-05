import BadgeStyle from 'components/atoms/badges/Badge'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { styled } from 'styled-components'
import ComponentBox from 'styling/elements/box/ComponentBox'

const BadgeComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Badge Amount',
			name: 'badge',
			type: 'number',
			value: 1
		},
		{
			title: 'Small Badge',
			name: 'isSmall',
			type: 'boolean',
			defaultValue: false,
			value: null
		}
	]

	return (
		<ComponentBox
			title="Badge"
			description="Badges show notifications, counts, or status information on navigation items and icons. This functionality is automatically enabled on <b>ActionButton</b>, <b>ClipBadge</b> and <b>TextLink</b>. If you want to enable it to a custom component use code below:"
			descriptionCode="import { BadgeStyle, BadgeStyleProps } from '@frontent-shared-components/badge/badge'\r\n\r\nconst StyledBadge = styled.div<BadgeStyleProps>`\r\n\t${BadgeStyle}\r\n`"
			options={options}>
			<DummyBadgeContainer />
		</ComponentBox>
	)
}

interface Props {
	badge?: number
	isSmall?: boolean
}

const DummyBadgeContainer = ({ badge = 0, isSmall }: Props) => {
	return (
		<Container badge={badge} isSmall={isSmall}>
			Dummy box
		</Container>
	)
}

const Container = styled.div<{ badge: number; isSmall?: boolean }>`
	border: 2px dashed red;
	border-radius: 0.5em;
	display: inline-block;
	padding: 0.5em 1em;

	${BadgeStyle}
`

export default BadgeComponentBox
