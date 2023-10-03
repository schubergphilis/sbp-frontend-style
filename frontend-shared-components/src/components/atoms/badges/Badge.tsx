import { css } from 'styled-components'

export interface BadgeStyleProps {
	badge?: number
	isSmall?: boolean
}

const BadgeStyle = css<{ badge?: number; isSmall?: boolean }>`
	position: relative;

	&::before {
		content: '${({ badge, isSmall }) =>
			!badge || badge <= 0 || isSmall ? '' : badge > 999 ? '999+' : badge}';
		opacity: ${({ badge }) => (!badge || badge <= 0 ? 0 : 1)};
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: bold;
		text-align: center;
		position: absolute;
		right: ${({ isSmall }) => (isSmall ? '-0.5em' : '-1.5em')};
		top: ${({ isSmall }) => (isSmall ? '-0.5em' : '-1.5em')};
		min-width: ${({ isSmall }) => (isSmall ? '1em' : '2.5em')};
		height: ${({ isSmall }) => (isSmall ? '1em' : '2.5em')};
		padding: 0.5em ${({ badge }) => (badge && badge > 99 ? '.75em' : '')};
		border-radius: 1.25em;
		colors: inherit;
		background-color: ${({ theme }) => theme.style.colorPrimary};
		box-shadow: 0 5px 5px ${({ theme }) => theme.style.shadow};
		transform: scale(${({ badge }) => (!badge || badge <= 0 ? 0 : 1)});
		transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out,
			padding 0.2s ease-in-out;
	}
`

export default BadgeStyle
