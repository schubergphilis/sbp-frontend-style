import {
	Action,
	combineReducers,
	configureStore,
	ThunkAction
} from '@reduxjs/toolkit'

import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { WebStorage } from 'redux-persist/lib/types'
import { settingsSlice } from './SettingsSlice'

const persistStorage = (): WebStorage => {
	const isServer = typeof window === 'undefined'

	// Returns noop (dummy) storage.
	if (isServer) {
		return {
			getItem() {
				return Promise.resolve(null)
			},
			setItem() {
				return Promise.resolve()
			},
			removeItem() {
				return Promise.resolve()
			}
		}
	}

	return createWebStorage('local')
}

const rootPersistConfig = {
	key: 'root',
	storage: persistStorage(),
	blacklist: [],
	debug: process.env.NODE_ENV !== 'production'
}

const settingsPersistConfig = {
	key: 'settings',
	storage: persistStorage(),
	blacklist: [],
	debug: process.env.NODE_ENV !== 'production'
}

export const reducers = combineReducers({
	[settingsSlice.name]: persistReducer(
		settingsPersistConfig,
		settingsSlice.reducer
	)
})

const makeConfiguredStore = (reducer: any) =>
	configureStore({
		reducer: reducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
				}
			}),
		devTools: process.env.NODE_ENV !== 'production'
	})

const persistedReducer = persistReducer(rootPersistConfig, reducers)
const pstore = makeConfiguredStore(persistedReducer)

export const persistor = persistStore(pstore)

export const makeStore = () => pstore

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<typeof pstore.getState>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>
