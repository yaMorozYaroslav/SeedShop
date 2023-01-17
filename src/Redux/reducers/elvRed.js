import {createSlice} from '@reduxjs/toolkit'
import {getElvs} from '../actions/elvAct'

const initialState = {
	elvs: [],
	status: 'idle',
	error: null
}
const elvSlice = createSlice({
	name: 'elvs',
	initialState,
	reducers: {},
	 extraReducers(builder) {
    builder
      .addCase(getElvs.pending, (state, action) => {
        state.status = 'loading'
            })
      .addCase(getElvs.fulfilled, (state, action) => {
		   	state.status = 'succeeded'
		   	state.elvs.push(action.payload)
		   })
      .addCase(getElvs.rejected, (state, action)=> {
		   	state.status = 'failed'
		   	state.error = action.error.message
		   })
  }
	
})

export default elvSlice.reducer
/*extraReducers(builder){
		builder
		   .addCase(getElvs.pending, (state, action) => {
		   	state.status = 'loading'
		   })
		   .addCase(getElvs.fullfilled, (state, action) => {
		   	state.status = 'succeeded'
		   	state.elvs.push(action.payload)
		   })
		   .addCase(getElvs.rejected, (state, action)=> {
		   	state.status = 'failed'
		   	state.error = action.error.message
		   })
	}*/
/*
const elvRed = (elvs=[], action) => {
	switch(action.type){
		case type.FETCH_ELVS:
		     return action.payload
		default:
		     return elvs
	}
}*/