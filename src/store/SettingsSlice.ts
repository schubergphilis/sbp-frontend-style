import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from './Store'

// Type for our state
export interface SettingsState {
	isDarkMode?: boolean
	isLargeMode?: boolean
	isMenuOpen?: boolean
}

// Initial state
const initialState: SettingsState = {}

// Actual Slice
export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setDarkModeState(state, { payload }: PayloadAction<boolean>) {
			state.isDarkMode = payload
		},
		setLargeModeState(state, { payload }: PayloadAction<boolean>) {
			state.isLargeMode = payload
		},
		toggleMenuOpenState(state) {
			state.isMenuOpen = !state.isMenuOpen
		}
	}
})

export const isDarkModeState = (state: AppState) => state.settings.isDarkMode

export const isLargeModeState = (state: AppState) => state.settings.isLargeMode

export const isMenuOpenState = (state: AppState) => state.settings.isMenuOpen

export const { setDarkModeState, setLargeModeState, toggleMenuOpenState } =
	settingsSlice.actions

export default settingsSlice.reducer
