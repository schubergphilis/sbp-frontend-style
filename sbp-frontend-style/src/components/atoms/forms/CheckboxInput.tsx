import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}

const CheckboxInput = ({ label, ...props }: Props) => {
	return (
		<Label htmlFor={props.id} $readOnly={props.readOnly}>
			<Container>
				<Radio type="checkbox" {...props} id={props.id} />
			</Container>

			<Title $disabled={props.disabled || props.readOnly}>{label}</Title>
		</Label>
	)
}

const Label = styled.label<{ $readOnly?: boolean }>`
	display: flex;
	gap: 0.5em;

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
	margin-top: 0.25em;
`
const Radio = styled.input`
	display: block;
	width: 1.25em;
	height: 1.25em;
	float: left;
`
const Title = styled.span<{ $disabled?: boolean }>`
	vertical-align: middle;
	color: ${({ $disabled, theme }) =>
		$disabled ? theme.style.buttonDisabledColorBg : 'inherit'};
`

export default CheckboxInput
