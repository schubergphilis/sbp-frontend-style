import ActionButton from 'components/atoms/buttons/ActionButton'
import { TextLinkStyle } from 'components/atoms/buttons/TextLink'
import CardHeader from 'components/molecules/cards/CardHeader'
import styled from 'styled-components'

interface Props {
	menu: string[]
	selected: number
	isClassic?: boolean
	onChange: (id: number) => void
}

const TabBar = ({
	menu,
	selected,
	isClassic = true,
	onChange,
	...props
}: Props) => {
	return (
		<Container {...props}>
			{menu.map((name, index) =>
				isClassic ? (
					<MenuButton
						key={index}
						type="button"
						variant="ghost"
						$isActive={selected === index}
						onClick={() => onChange(index)}>
						{name}
					</MenuButton>
				) : (
					<MenuLink
						key={index}
						type="button"
						$isActive={selected === index}
						onClick={() => onChange(index)}>
						{name}
					</MenuLink>
				)
			)}
		</Container>
	)
}

const Container = styled(CardHeader)`
	padding-bottom: 0;
	height: 4.625em;

	& > div {
		display: flex;
		gap: 1em;
	}
`

const MenuButton = styled(ActionButton)<{
	$isActive: boolean
}>`
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	border-bottom-color: transparent;
	border-bottom-width: 3px;

	${({ $isActive, theme }) =>
		$isActive &&
		`
        border-bottom-color: ${theme.style.colorBg};
    `}
`
const MenuLink = styled.button<{ $isActive: boolean; $disabled?: boolean }>`
	padding: 0.25em 0;
	${TextLinkStyle}
`
export default TabBar
