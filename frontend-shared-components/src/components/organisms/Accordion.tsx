import Card from 'components/molecules/cards/Card'
import CardContent from 'components/molecules/cards/CardContent'
import CardHeader from 'components/molecules/cards/CardHeader'
import {
	HTMLAttributes,
	ReactElement,
	useCallback,
	useEffect,
	useState
} from 'react'
import styled from 'styled-components'

interface AccordionModel {
	title: string
	content: string | ReactElement
	date?: Date
}

interface Props extends HTMLAttributes<HTMLDivElement> {
	list: AccordionModel[]
	expand?: number[]
	isControlled?: boolean
	showSelected?: boolean
	icon?: ReactElement
}

const Accordion = ({
	list,
	expand,
	showSelected,
	isControlled,
	icon,
	...props
}: Props) => {
	const [openList, setOpenList] = useState<number[]>([2])

	useEffect(() => {
		if (expand) setOpenList(expand)
	}, [expand])

	const handleOpenList = useCallback(
		(index: number) => {
			const isOpen = openList.findIndex((item) => item === index)

			const list = isControlled ? [] : [...openList]

			if (isOpen > -1) {
				delete list[isOpen]
			} else {
				list.push(index)
			}

			setOpenList(list)
		},
		[openList, isControlled]
	)

	const challenge = useCallback(
		(index: number): boolean => {
			return openList.findIndex((item) => item === index) > -1
		},
		[openList]
	)
	return (
		<Container {...props}>
			{list.map(({ title, content }, index) => (
				<Card key={index} isSelected={showSelected ? challenge(index) : false}>
					<CardHeader
						isOpen={challenge(index)}
						icon={icon}
						onClick={() => handleOpenList(index)}>
						{title}
					</CardHeader>
					<CardContent isOpen={challenge(index)}>{content}</CardContent>
				</Card>
			))}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
`

export default Accordion
