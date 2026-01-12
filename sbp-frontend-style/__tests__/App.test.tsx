/**
 * @jest-environment jsdom
 */
import '@inrupt/jest-jsdom-polyfills'
import { act, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../src/App'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn()
}))

jest.mock('react-syntax-highlighter', () => {
	const MockLight = jest.fn(({ children, language }) => (
		<div data-testid="syntax-highlighter" data-language={language}>
			{children}
		</div>
	)) as any
	MockLight.registerLanguage = jest.fn()

	return {
		Light: MockLight
	}
})

jest.mock(
	'react-syntax-highlighter/dist/esm/languages/hljs/typescript',
	() => ({})
)
jest.mock('react-syntax-highlighter/dist/esm/languages/hljs/xml', () => ({}))
jest.mock(
	'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark',
	() => ({})
)

describe('App', () => {
	it('should render the app', async () => {
		await act(async () => {
			render(
				<BrowserRouter>
					<App />
				</BrowserRouter>
			)
		})

		expect(screen).toBeDefined()
		// const linkElement = screen.getByText(/welcome/i)
		// expect(linkElement).toBeInTheDocument()
	})
})
