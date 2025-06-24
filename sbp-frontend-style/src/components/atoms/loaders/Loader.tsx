import { css } from 'styled-components'

export interface LoaderStyleProps {
	size?: number
}

const LoaderStyle = css<LoaderStyleProps>`
	&::after {
		content: '';
		display: block;
		width: ${({ size }) => (size ? `${size}px` : '1.25em')};
		height: ${({ size }) => (size ? `${size}px` : '1.25em')};
		border-radius: 50%;
		color: inherit;
		border: 2px solid;
		border-left-width: 1px;
		border-bottom-color: transparent;
		animation: rotating 0.75s linear infinite;

		position: absolute;
		right: ${({ size }) => (size ? `calc(50% - ${size / 2}px)` : '1em')};
		top: ${({ size }) =>
			size ? `calc(50% - ${size / 2}px)` : 'calc(50% - 0.625em)'};
	}
`

export default LoaderStyle
