import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}

const RadioInput = ({ label, ...props }: Props) => {
	return (
		<Label htmlFor={props.id} $readOnly={props.readOnly}>
			<Container>
				<Radio type="radio" {...props} id={props.id} />
			</Container>

			<Title $disabled={props.disabled || props.readOnly}>{label}</Title>
		</Label>
	)
}

const Label = styled.label<{ $readOnly?: boolean }>`
	display: inline-block;

	${({ $readOnly }) =>
		$readOnly &&
		`
        opacity: 0.75;
        pointer-events: none;
    `}
`
const Container = styled.div`
	display: inline-block;
	vertical-align: middle;
`
const Radio = styled.input`
	display: block;
	width: 1.25em;
	height: 1.25em;
	float: left;

	&:checked {
		color: white;
		accent-color: ${({ theme }) => theme.style.inputColorActive};
	}
`
const Title = styled.span<{ $disabled?: boolean }>`
	vertical-align: middle;
	margin-left: 0.5em;
	color: ${({ $disabled, theme }) =>
		$disabled ? theme.style.buttonDisabledColorBg : 'inherit'};
`

export default RadioInput
