import Card from 'components/molecules/cards/Card'
import CardHeader from 'components/molecules/cards/CardHeader'
import styled from 'styled-components'

interface Props {}

const MenuBar = ({}: Props) => {
	return (
		<StickyCard>
			<CardHeader>
				<h2>Component menu</h2>
			</CardHeader>
		</StickyCard>
	)
}

const StickyCard = styled(Card)`
	position: sticky;
	top: 10px;
`

export default MenuBar
