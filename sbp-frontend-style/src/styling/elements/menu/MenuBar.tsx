import structure from 'component-list.json' with { type: 'json' }
import Card from 'components/molecules/cards/Card'
import CardContent from 'components/molecules/cards/CardContent'
import CardHeader from 'components/molecules/cards/CardHeader'
import MenuItemModel from 'models/MenuItemModel'
import { styled } from 'styled-components'
import MenuItem from './MenuItem'

const MenuBar = () => {
	const menuList: MenuItemModel = JSON.parse(JSON.stringify(structure))

	return (
		<StickyCard>
			<CardHeader>
				<h2>Component menu</h2>
			</CardHeader>
			<StickyCardContent>
				<ul>
					{menuList.children?.map((props, index) => (
						<MenuItem key={index} {...props} />
					))}
				</ul>
			</StickyCardContent>
		</StickyCard>
	)
}

const StickyCard = styled(Card)`
	position: sticky;
	top: 1em;
`
const StickyCardContent = styled(CardContent)`
	padding: 0;

	> ul {
		max-height: calc(100vh - 8em);
		padding: 1em;
		overflow: hidden auto;

		ul > li {
			padding-left: 1em;
		}
	}
`
export default MenuBar
