import styled from 'styled-components'

interface Props {
	children?: JSX.Element | string
}

const Elipse = ({ children }: Props) => {
	return (
		<Container title={typeof children === 'string' ? children : undefined}>
			{children}
		</Container>
	)
}

const Container = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 15em;
`

export default Elipse
