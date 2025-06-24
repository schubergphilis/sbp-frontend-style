import { Dispatch, Middleware, MiddlewareAPI, isAction } from '@reduxjs/toolkit'

const STORAGE_NAME = 'applicationState'

export interface CustomMiddlewareAPI extends MiddlewareAPI {
	name?: string
	blockList?: string[]
}

export const localStorageMiddleware: Middleware<Dispatch> =
	({ getState, blockList = [], name = STORAGE_NAME }: CustomMiddlewareAPI) =>
	(next) =>
	(action) => {
		const result = next(action)

		if (!isAction(action)) return result

		const isBlocked = blockList.find((item) => action.type.startsWith(item))

		if (isBlocked !== undefined) return result

		const tempState = { ...getState() }

		blockList.forEach((block) => {
			if (!block.includes('/')) {
				delete tempState[block]
				return
			}

			const items = block.split('/')

			if (tempState[items[0]][items[1]] === null) return

			const { [items[1]]: _, ...other } = tempState[items[0]]

			tempState[items[0]] = other
			return
		})

		localStorage.setItem(name, JSON.stringify(tempState))
	}

export const reHydrateStore = (name: string = STORAGE_NAME) => {
	if (localStorage.getItem(name) === null) return

	return JSON.parse(localStorage.getItem(name) ?? '') // re-hydrate the store
}
