import ToggleButton from 'components/atoms/buttons/ToggleButton'
import { OptionType } from 'datatypes/OptionType'
import { ValueType } from 'datatypes/ValueType'
import styled from 'styled-components'

interface Props {
	title: string
	name: string
	type: OptionType
	value: ValueType
	state: ValueType | null
	onClick: (name: string, value: ValueType | null) => void
}

const OptionRow = ({ title, name, type, value, state, onClick }: Props) => {
	return (
		<Row>
			<div>{title}</div>
			<div>
				{type === 'boolean' ? (
					<ToggleButton
						isActive={state as boolean}
						onClick={() => onClick(name, !state)}
					/>
				) : type === 'element' ? (
					<ToggleButton
						isActive={!(state === null || state === undefined)}
						onClick={() =>
							onClick(
								name,
								state === undefined || state === null ? value : null
							)
						}
					/>
				) : null}
			</div>
		</Row>
	)
}

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 0.5em;
	padding: 1em;
	border-bottom: 1px solid ${({ theme }) => theme.style.borderColor};
	align-items: center;
`

export default OptionRow
