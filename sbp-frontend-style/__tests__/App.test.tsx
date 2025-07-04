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
