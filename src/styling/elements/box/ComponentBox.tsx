import Card from 'components/molecules/cards/Card'
import CardContent from 'components/molecules/cards/CardContent'
import CardFooter from 'components/molecules/cards/CardFooter'
import CardHeader from 'components/molecules/cards/CardHeader'
import { ValueType } from 'datatypes/ValueType'
import parse from 'html-react-parser'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { cloneElement, useState } from 'react'
import { styled } from 'styled-components'
import CodeBlock from './CodeBlock'
import OptionRow from './OptionRow'

import ActionButton from 'components/atoms/buttons/ActionButton'
import { AccumulateReturn, AccumulateState } from 'helpers/AccumulateHelper'
import StepsModel from 'models/StepsModel'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import tsx from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import github from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'

SyntaxHighlighter.registerLanguage('tsx', tsx)

interface Props {
	title: string
	description: string
	descriptionCode?: string
	options: ComponentOptionModel[]
	children: JSX.Element
}

const ComponentBox = ({
	options,
	title,
	description,
	descriptionCode,
	children
}: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const init: StepsModel = options.reduce((accumulator, { name, value }) => {
		const response = AccumulateReturn(accumulator, name, value)
		return { ...accumulator, ...response }
	}, {} as StepsModel)

	const [steps, setSteps] = useState<StepsModel>(init)

	const clone = cloneElement(children, steps)

	const handleEvent = (name: string, value: ValueType | null): void => {
		const response = AccumulateReturn(steps, name, value)

		setSteps({
			...steps,
			...response
		})
	}

	const toggleOptions = (): void => {
		setIsOpen(!isOpen)
	}

	return (
		<ComponentCard>
			<CardHeader>
				<h2>{title}</h2>
				<p>{parse(description)}</p>
				{descriptionCode && (
					<SyntaxHighlighter
						language="tsx"
						style={github}
						showLineNumbers={true}
						wrapLines
						wrapLongLines>
						{descriptionCode
							.replace(/\\t/gim, '\t')
							.replace(/\\r\\n/gim, '\r\n')
							.replace(/\\s\\s/gim, 's')}
					</SyntaxHighlighter>
				)}
			</CardHeader>
			<ComponentCardContent>
				<Element>{clone}</Element>
				<ElementOptions>
					{options
						.filter(({ general }) => !general)
						.map((props, index) => (
							<OptionRow
								key={index}
								handleEvent={handleEvent}
								state={AccumulateState(steps, props.name)}
								{...props}
							/>
						))}
					<General>
						<GeneralHeader isBlock onClick={toggleOptions} $isOpen={isOpen}>
							General options
						</GeneralHeader>
						<GeneralCollapse $isOpen={isOpen}>
							{options
								.filter(({ general }) => general)
								.map((props, index) => (
									<OptionRow
										key={index}
										handleEvent={handleEvent}
										state={AccumulateState(steps, props.name)}
										{...props}
									/>
								))}
						</GeneralCollapse>
					</General>
				</ElementOptions>
			</ComponentCardContent>
			<ComponentCardFooter>
				<CodeBlock>{clone}</CodeBlock>
			</ComponentCardFooter>
		</ComponentCard>
	)
}

const ComponentCard = styled(Card)`
	pre {
		padding: 1em !important;
		background-color: ${({ theme }) => theme.style.cardColorBg}!important;
		color: ${({ theme }) => theme.style.fontColor}!important;

		> code {
			white-space: break-spaces !important;
		}
	}
`
const ComponentCardContent = styled(CardContent)`
	display: flex;
	justify-content: space-between;
	padding: 0;
`
const ComponentCardFooter = styled(CardFooter)`
	display: block;
	text-align: left;
`
const Element = styled.div`
	flex: 1 1 auto;
	padding: 2em;
	align-self: center;
`
const ElementOptions = styled.div`
	flex: 0 1 auto;
	max-width: 50%;
	background-color: ${({ theme }) => theme.style.cardColorBg};
	padding: 2em;
	box-shadow: -5px 0px 5px ${({ theme }) => theme.style.shadow};
`
const General = styled.div`
	margin-top: 1em;
	position: relative;
`
const GeneralHeader = styled(ActionButton)<{ $isOpen: boolean }>`
	position: relative;

	&::after {
		content: '^';
		display: block;
		width: 2em;
		height: 1em;
		position: absolute;
		right: 0;
		top: 0.4em;
		font-size: 1.5em;
		line-height: 1.25em;
		text-align: center;
		rotate: 0deg;
		transition: rotate 0.2s ease-in-out;
	}

	${({ $isOpen }) =>
		$isOpen &&
		`
		&::after {
			rotate: 180deg;
		}
	`}
`
const GeneralCollapse = styled.div<{ $isOpen: boolean }>`
	overflow: hidden;
	max-height: 150px;
	transition: max-height 0.2s ease-in-out;

	${({ $isOpen }) =>
		!$isOpen &&
		` 
		max-height: 0;
	`}
`
export default ComponentBox
