import { css } from 'styled-components'
import { AlignType } from '../../../datatypes/AlignType'

export interface BadgeStyleProps {
	$badge?: number
	$isBadgeSmall?: boolean
	$position?: AlignType
}

const BadgeStyle = css<BadgeStyleProps>`
	position: relative;

	&::before {
		opacity: ${({ $badge }) => (!$badge || $badge <= 0 ? 0 : 1)};
		font-size: ${({ theme }) =>
			theme.style.badgeSize ? theme.style.badgeSize : '1rem'};
		line-height: 1.5em;
		font-weight: bold;
		text-align: center;
		position: absolute;
		z-index: 1;
		right: ${({ $isBadgeSmall }) => ($isBadgeSmall ? '-0.5em' : '-1.5em')};
		top: ${({ $isBadgeSmall }) => ($isBadgeSmall ? '-0.5em' : '-1.5em')};
		min-width: ${({ $isBadgeSmall }) => ($isBadgeSmall ? '1em' : '2.5em')};
		height: ${({ $isBadgeSmall }) => ($isBadgeSmall ? '1em' : '2.5em')};
		padding: 0.5em
			${({ $badge, $isBadgeSmall }) =>
				$badge && $badge > 99 && !$isBadgeSmall ? '.75em' : ''};
		border-radius: 1.25rem;
		color: ${({ theme }) => theme.style.badgeColor};
		background-color: ${({ theme }) => theme.style.badgeColorBg};
		box-shadow: 0 5px 5px ${({ theme }) => theme.style.shadow};
		transform: scale(${({ $badge }) => (!$badge || $badge <= 0 ? 0 : 1)});
		transition:
			opacity 0.2s ease-in-out,
			transform 0.2s ease-in-out,
			padding 0.2s ease-in-out;

		${({ $position, $isBadgeSmall }) =>
			$position == 'left' &&
			`
				right: inherit;
				left: ${$isBadgeSmall ? '-0.5em' : '-1.5em'};
			`}

		content: '${({ $badge, $isBadgeSmall }) =>
			!$badge || $badge <= 0 || $isBadgeSmall
				? ''
				: $badge > 999
					? '999+'
					: $badge}';
	}
`

export default BadgeStyle
