import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	click: false, change: 0
	}

export const firstSlice = createSlice({
	   name: 'first',
	   initialState,
	   reducers: {
		   onClick: state => {state.click = true},
		   offClick: state => {state.click = false},
		   onChange: state => {state.change = 1},
		   offChange: state => {state.change = 0}
		 }
	   })
	export const {onClick, offClick, onChange, offChange} = firstSlice.actions
	export default firstSlice.reducer
