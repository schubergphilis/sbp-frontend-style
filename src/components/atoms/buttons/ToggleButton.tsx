import styled from 'styled-components'

interface Props {
	$isActive: boolean
	onClick?: VoidFunction
	icon?: JSX.Element
	title?: string
}

const ToggleButton = ({ $isActive = false, onClick, icon, title }: Props) => {
	return (
		<Button $isActive={$isActive} onClick={onClick} title={title}>
			<Toggle>{icon}</Toggle>
		</Button>
	)
}

const Button = styled.button<{ $isActive: boolean }>`
	border: 2px solid ${({ theme }) => theme.style.buttonActiveColor};
	background-color: transparent;
	border-radius: 2em;
	font-size: 1.25em;
	width: 2.5em;
	padding: 0;
	cursor: pointer;
	overflow: hidden;

	${({ $isActive, theme }) =>
		$isActive &&
		`
        background-color: ${theme.style.buttonActiveColor};

        > div {
            float: right;
        }
    `}
`

const Toggle = styled.div`
	display: block;
	width: 1.25em;
	height: 1.25em;
	line-height: 1.25em;
	background-color: ${({ theme }) => theme.style.fontColor};
	border-radius: 0.75em;
	color: ${({ theme }) => theme.style.colorBg};
	padding: 0.25em;
	text-align: center;

	> svg {
		width: 100%;
		height: 100%;
		display: block;
	}
`

export default ToggleButton
