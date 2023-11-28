import styled from 'styled-components'

interface Props {
	size?: number // in pixels
	color?: string // hex code
}

const CoinLoader: React.FC<Props> = (props) => {
	return (
		<Container {...props}>
			<div></div>
		</Container>
	)
}

const Container = styled.div<Props>`
	display: inline-block;
	transform: translateZ(1px);
	& > div {
		display: inline-block;
		width: ${({ size }) => (size ? `${size}px` : '32px')};
		height: ${({ size }) => (size ? `${size}px` : '32px')};
		margin: 8px;
		border-radius: 50%;
		background-color: ${({ color }) => (color ? `${color}` : '#ffcc01')};
		animation: coin-loader 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}
`

export default CoinLoader
