import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as type from '../tools/consts'
import * as api from '../tools/api'

export const fetchElvs = createAsyncThunk('elvs/fetchElvs', async()=> {
	const response = await api.fetchElvs()
	return response.data
})

const initialState = {
	elvs: [],
	status: 'idle',
	error: null
}
const elvSlice = createSlice({
	name: 'elvs',
	initialState,
	reducers: {}
})

export default elvSlice.reducer

/*
const elvRed = (elvs=[], action) => {
	switch(action.type){
		case type.FETCH_ELVS:
		     return action.payload
		default:
		     return elvs
	}
}*/