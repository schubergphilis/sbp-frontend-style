import Card from 'components/molecules/cards/Card'
import CardContent from 'components/molecules/cards/CardContent'
import CardHeader from 'components/molecules/cards/CardHeader'
import { ValueType } from 'datatypes/ValueType'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { cloneElement, useState } from 'react'
import { styled } from 'styled-components'
import OptionRow from './OptionRow'

interface Props {
	title: string
	description: string
	options: ComponentOptionModel[]
	children: JSX.Element
}

const ComponentBox = ({ options, title, description, children }: Props) => {
	const [steps, setSteps] = useState<any>({})

	const onClick = (name: string, value: ValueType | null): void => {
		setSteps({
			...steps,
			[name]: value
		})
	}

	return (
		<Card>
			<CardHeader>
				<h2>{title}</h2>
				<p>{description}</p>
			</CardHeader>
			<ComponentCardContent>
				<Element>{cloneElement(children, steps)}</Element>
				<ElementOptions>
					{options.map((props, index) => (
						<OptionRow
							key={index}
							onClick={onClick}
							state={steps[props.name]}
							{...props}
						/>
					))}
				</ElementOptions>
			</ComponentCardContent>
		</Card>
	)
}

const ComponentCardContent = styled(CardContent)`
	display: flex;
	justify-content: space-between;
	padding: 0;
`
const Element = styled.div`
	flex: 1 1 auto;
	padding: 2em;
	align-self: center;
`
const ElementOptions = styled.div`
	flex: 0 1 33%;
	background-color: ${({ theme }) => theme.style.cardColorBg};
	padding: 2em;
	box-shadow: -5px 0px 5px ${({ theme }) => theme.style.shadow};
`

export default ComponentBox
