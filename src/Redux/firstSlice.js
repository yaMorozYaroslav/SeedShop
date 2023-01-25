import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	click: false, change: false
	}

export const firstSlice = createSlice({
	   name: 'first',
	   initialState,
	   reducers: {
		   onClick: state => {state.click = true},
		   offClick: state => {state.click = false},
		   onChange: state => {state.change = 0},
		   offChange: state = {state.change = 1}
		 }
	   })
	export const {onClick, offClick, onChange, offChange} = firstSlice.actions
	export default firstSlice.reducer
