import TextLink from 'components/atoms/buttons/TextLink'
import {
	CleanName,
	FirstToUpperCase,
	RemoveExtension,
	ToKebabCase
} from 'helpers/FunctionHelpers'
import MenuItemModel from 'models/MenuItemModel'
import { useLocation } from 'react-router-dom'

interface Props {
	path: String
	name: string
	children?: MenuItemModel[]
}

const MenuItem = ({ name, children }: Props) => {
	const itemName = FirstToUpperCase(CleanName(RemoveExtension(name)))
	const itemUrl = `#${ToKebabCase(RemoveExtension(name))}`

	const { hash } = useLocation()

	return (
		<li>
			{children ? (
				<>
					<h4>{itemName}</h4>
					<ul>
						{children.map((props, index) => (
							<MenuItem key={index} {...props} />
						))}
					</ul>
				</>
			) : (
				<TextLink href={itemUrl} isActive={hash === itemUrl}>
					{itemName}
				</TextLink>
			)}
		</li>
	)
}

export default MenuItem
