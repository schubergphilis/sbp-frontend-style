import ActionButton from 'components/atoms/buttons/ActionButton'
import PageSize from 'components/atoms/debugger/PageSize'
import ComponentOptionModel from 'models/ComponentOptionModel'
import { JSX } from 'react'
import styled from 'styled-components'

import ComponentBox from 'styling/elements/box/ComponentBox'

const CloudStyleComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Dark mode',
			name: 'isDarkMode',
			type: 'boolean',
			defaultValue: false,
			value: null,
			global: true
		},
		{
			title: 'Large mode',
			name: 'isLargeMode',
			type: 'boolean',
			defaultValue: false,
			value: null,
			global: true
		},
		{
			title: 'Light style',
			name: 'lightStyle',
			type: 'element',
			defaultValue: { colorSecondary: '#ff6600' },
			value: null,
			global: true
		},
		{
			title: 'Dark style',
			name: 'darkStyle',
			type: 'element',
			defaultValue: { colorSecondary: '#8cd600' },
			value: null,
			global: true
		},
		{
			title: 'Debug mode',
			name: 'isDebug',
			type: 'boolean',
			defaultValue: false,
			value: null,
			global: true
		}
	]

	return (
		<ComponentBox
			title="Cloud style"
			description="Within the base of the application it needs a Style wrapper <b>CloudStyle</b> to set the default styling and this will also be the input for customizing the components for your needs."
			options={options}>
			<CloudStyle>
				<ActionButton>Welcome</ActionButton>
			</CloudStyle>
		</ComponentBox>
	)
}

const CloudStyle = ({
	children,
	isDebug
}: {
	children: JSX.Element
	isDebug?: boolean
}) => {
	return (
		<Container>
			{children}
			{isDebug ? <PageSize /> : null}
		</Container>
	)
}

const Container = styled.div`
	position: relative;
	border: 1px solid ${({ theme }) => theme.style.borderColor};

	> button {
		margin: 4em;
	}
`
export default CloudStyleComponentBox
