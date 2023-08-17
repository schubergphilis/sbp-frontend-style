import structure from 'component-list.json'
import Card from 'components/molecules/cards/Card'
import CardHeader from 'components/molecules/cards/CardHeader'
import MenuItemModel from 'models/MenuItemModel'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const MenuBar = () => {
	const menuList: MenuItemModel = JSON.parse(JSON.stringify(structure))

	return (
		<StickyCard>
			<CardHeader>
				<h2>Component menu</h2>
				<ul>
					{menuList.children?.map((props, index) => (
						<MenuItem key={index} {...props} />
					))}
				</ul>
			</CardHeader>
		</StickyCard>
	)
}

const StickyCard = styled(Card)`
	position: sticky;
	top: 1em;

	ul {
		ul > li {
			padding-left: 1em;
		}
	}
`

export default MenuBar
