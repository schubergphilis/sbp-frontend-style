import { css } from 'styled-components'

export interface BadgeStyleProps {
	$badge?: number
	$isBadgeSmall?: boolean
}

const $badgeStyle = css<BadgeStyleProps>`
	position: relative;

	&::before {
		content: '${({ $badge, $isBadgeSmall }) =>
			!$badge || $badge <= 0 || $isBadgeSmall
				? ''
				: $badge > 999
				? '999+'
				: $badge}';
		opacity: ${({ $badge }) => (!$badge || $badge <= 0 ? 0 : 1)};
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: bold;
		text-align: center;
		position: absolute;
		z-index: 1;
		right: ${({ $isBadgeSmall }) => ($isBadgeSmall ? '-0.5em' : '-1.5em')};
		top: ${({ $isBadgeSmall }) => ($isBadgeSmall ? '-0.5em' : '-1.5em')};
		min-width: ${({ $isBadgeSmall }) => ($isBadgeSmall ? '1em' : '2.5em')};
		height: ${({ $isBadgeSmall }) => ($isBadgeSmall ? '1em' : '2.5em')};
		padding: 0.5em ${({ $badge }) => ($badge && $badge > 99 ? '.75em' : '')};
		border-radius: 1.25em;
		color: inherit;
		background-color: ${({ theme }) => theme.style.colorPrimary};
		box-shadow: 0 5px 5px ${({ theme }) => theme.style.shadow};
		transform: scale(${({ $badge }) => (!$badge || $badge <= 0 ? 0 : 1)});
		transition:
			opacity 0.2s ease-in-out,
			transform 0.2s ease-in-out,
			padding 0.2s ease-in-out;
	}
`

export default $badgeStyle
