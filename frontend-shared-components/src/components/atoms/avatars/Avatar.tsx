import { Colorpicker } from 'helpers/ColorpickerHelper'
import { AbbreviateName } from 'helpers/FunctionHelpers'
import { JSX } from 'react'
import styled from 'styled-components'
import { BadgeStyle } from '../badges'
import { BadgeStyleProps } from '../badges/Badge'

interface Props extends BadgeStyleProps {
	name?: string
	$isSmall?: boolean
	children?: JSX.Element
}

const Avatar = ({
	name = '',
	$isSmall = false,
	children,
	$isBadgeSmall,
	...props
}: Props) => {
	return (
		<Container
			$isSmall={$isSmall}
			$isBadgeSmall={$isBadgeSmall || $isSmall}
			{...props}>
			<Color
				$isSmall={$isSmall}
				color={name ? Colorpicker(name) : 'transparent'}
				$name={name}>
				{children ? children : AbbreviateName(name)}
			</Color>
		</Container>
	)
}

interface AvatarStyleProps extends BadgeStyleProps {
	$isSmall: boolean
}

const Container = styled.div<AvatarStyleProps>`
	width: ${({ $isSmall }) => ($isSmall ? '1.5em' : '4em')};
	height: ${({ $isSmall }) => ($isSmall ? '1.5em' : '4em')};
	border: 1px solid ${({ theme }) => theme.style.borderColor};
	border-radius: 50%;

	${BadgeStyle}

	&::before {
		right: ${({ $isSmall, $isBadgeSmall }) =>
			$isBadgeSmall ? ($isSmall ? '-0.5em' : '0em') : '-1.25em'};
		top: ${({ $isSmall, $isBadgeSmall }) =>
			$isBadgeSmall ? ($isSmall ? '-0.5em' : '0em') : '-1.25em'};
	}
`
const Color = styled.div<{ color: string; $name: string; $isSmall: boolean }>`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	min-width: 1.5em;
	min-height: 1.5em;
	max-width: 2.25em;
	max-height: 2.25em;
	margin: auto;
	border-radius: 50%;
	background-color: ${({ color }) => color};
	color: ${({ theme, $name }) =>
		$name === '' ? 'inherit' : theme.style.buttonPrimaryColor};
	font-family: ${({ theme }) => theme.fonts.headerReqular};
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: default;
	overflow: hidden;
	font-size: ${({ $isSmall }) => ($isSmall ? '.75em' : '1.5em')};

	& > svg {
		width: 100%;
		height: 100%;
		margin: 0.25em;
	}
`

export default Avatar
