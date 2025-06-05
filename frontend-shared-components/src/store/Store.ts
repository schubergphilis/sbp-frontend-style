import { combineReducers, configureStore } from '@reduxjs/toolkit'

import {
	CustomMiddlewareAPI,
	localStorageMiddleware,
	reHydrateStore
} from 'middleware/LocalStorageMiddleware'
import { dynamicTableSlice } from './DynamicTableSlice'
import { settingsSlice } from './SettingsSlice'

export const reducers = combineReducers({
	[settingsSlice.name]: settingsSlice.reducer,
	[dynamicTableSlice.name]: dynamicTableSlice.reducer
})

const blockList = ['test']

export const store = configureStore({
	reducer: reducers,
	devTools: !import.meta.env.PROD,
	preloadedState: reHydrateStore(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat((x: CustomMiddlewareAPI) => {
			x.blockList = blockList

			return localStorageMiddleware(x)
		})
})

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
