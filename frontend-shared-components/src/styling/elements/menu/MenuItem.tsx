import TextLink, {
	TextLinkStyleProps,
	TextLinktyle
} from 'components/atoms/buttons/TextLink'
import {
	CleanName,
	FirstToUpperCase,
	RemoveExtension,
	ToKebabCase
} from 'helpers/FunctionHelpers'
import MenuItemModel from 'models/MenuItemModel'
import { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { styled } from 'styled-components'

interface Props {
	path: String
	name: string
	children?: MenuItemModel[]
}

const MenuItem = ({ name, children }: Props) => {
	const itemName = FirstToUpperCase(CleanName(RemoveExtension(name)))
	const itemUrl = `#${ToKebabCase(RemoveExtension(name))}`

	const { hash } = useLocation()

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleCollapse = useCallback((isOpen: boolean) => {
		setIsOpen(!isOpen)
	}, [])

	return (
		<ListItem>
			{children ? (
				<>
					<LinkButton onClick={() => handleCollapse(isOpen)}>
						{itemName}
					</LinkButton>

					<List $isOpen={isOpen}>
						{children.map((props, index) => (
							<MenuItem key={index} {...props} />
						))}
					</List>
				</>
			) : (
				<TextLink href={itemUrl} isActive={hash === itemUrl}>
					{itemName}
				</TextLink>
			)}
		</ListItem>
	)
}

const LinkButton = styled.button<TextLinkStyleProps>`
	${TextLinktyle}

	font-weight: bold;
	display: block;
	width: 100%;
	text-align: left;
`
const List = styled.ul<{ $isOpen: boolean }>`
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.2s ease-in-out;

	${({ $isOpen }) =>
		$isOpen &&
		`
		max-height: 20em;
	`}
`
const ListItem = styled.li``
export default MenuItem
