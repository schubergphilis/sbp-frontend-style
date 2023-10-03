import ToggleButton from 'components/atoms/buttons/ToggleButton'
import SelectInput from 'components/atoms/forms/SelectInput'
import TextInput from 'components/atoms/forms/TextInput'
import { OptionType } from 'datatypes/OptionType'
import { ValueType } from 'datatypes/ValueType'
import SelectOptionModel from 'models/SelectOptionModel'
import { ChangeEvent } from 'react'
import { styled } from 'styled-components'

interface Props {
	title: string
	name: string
	type: OptionType
	value: ValueType | null
	defaultValue?: ValueType | null
	options?: SelectOptionModel[]
	state: ValueType | null
	handleEvent: (name: string, value: ValueType | null) => void
}

const OptionRow = ({
	title,
	options = [],
	name,
	type,
	value,
	defaultValue,
	state,
	handleEvent
}: Props) => {
	return (
		<Row>
			<Title>{title}</Title>
			<Control>
				{type === 'boolean' ? (
					<ToggleButton
						isActive={state as boolean}
						onClick={() => handleEvent(name, !state)}
					/>
				) : type === 'element' ? (
					<ToggleButton
						isActive={!(state === null || state === undefined)}
						onClick={() =>
							handleEvent(
								name,
								state === undefined || state === null
									? value
										? value
										: defaultValue
										? defaultValue
										: null
									: null
							)
						}
					/>
				) : type === 'text' ? (
					<TextInput
						value={(state as string) ?? ''}
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							handleEvent(name, event.target.value)
						}
					/>
				) : type === 'number' ? (
					<TextInput
						type="number"
						value={(state as string) ?? ''}
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							handleEvent(name, event.target.value)
						}
					/>
				) : type === 'select' ? (
					<SelectInput
						onChange={(event: ChangeEvent<HTMLSelectElement>) =>
							handleEvent(name, event.target.value)
						}>
						<option value="">Nothing</option>
						{options.map(({ name, value }, index) => (
							<option key={index} value={value}>
								{name}
							</option>
						))}
					</SelectInput>
				) : null}
			</Control>
		</Row>
	)
}

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 0.5em;
	padding: 1em;
	border-bottom: 1px solid ${({ theme }) => theme.style.borderColor};
	align-items: center;
`
const Title = styled.div`
	flex: 1 1 auto;
	text-align: left;
`
const Control = styled.div`
	flex: 1 1 auto;
	text-align: right;
`
export default OptionRow
