import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DefaultStyle } from 'styled-components'
import { AppState } from './Store'

// Type for our state
export interface SettingsState {
	isDarkMode: boolean
	isLargeMode: boolean
	isMenuOpen: boolean
	lightStyle?: DefaultStyle
	darkStyle?: DefaultStyle
}

// Initial state
const initialState: SettingsState = {
	isDarkMode: false,
	isLargeMode: false,
	isMenuOpen: false
}

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
		},
		setLightStyleState(
			state,
			{ payload }: PayloadAction<DefaultStyle | undefined>
		) {
			state.lightStyle = payload
		},
		setDarkStyleState(
			state,
			{ payload }: PayloadAction<DefaultStyle | undefined>
		) {
			state.darkStyle = payload
		}
	}
})

export const isDarkModeState = (state: AppState): boolean =>
	state.settings.isDarkMode

export const isLargeModeState = (state: AppState): boolean =>
	state.settings.isLargeMode

export const isMenuOpenState = (state: AppState) => state.settings.isMenuOpen

export const lightStyleState = (state: AppState) => state.settings.lightStyle

export const darkStyleState = (state: AppState) => state.settings.darkStyle

export const {
	setDarkModeState,
	setLargeModeState,
	toggleMenuOpenState,
	setLightStyleState,
	setDarkStyleState
} = settingsSlice.actions

export default settingsSlice.reducer
