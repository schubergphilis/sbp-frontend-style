import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from './Store'

// Type for our state
export interface DynamicTableState {
	columnSizeList?: number[]
}

// Initial state
const initialState: DynamicTableState = {}

// Actual Slice
export const dynamicTableSlice = createSlice({
	name: 'dynamicTable',
	initialState,
	reducers: {
		setColumnSizeListState(state, { payload }: PayloadAction<number[]>) {
			state.columnSizeList = payload
		}
	}
})

export const getColumnSizeListState = (
	state: AppState
): number[] | undefined => {
	return state.dynamicTable.columnSizeList
}

export const { setColumnSizeListState } = dynamicTableSlice.actions

export default dynamicTableSlice.reducer
