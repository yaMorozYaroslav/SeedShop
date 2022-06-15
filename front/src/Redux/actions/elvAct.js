import {createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../tools/api'

export const getElvs = createAsyncThunk('elvs/fetchElvs', async()=> {
	const response = await api.fetchElvs()
	return response.data
})
export const toEight = createAsyncThunk('elvs/toEigth', async()=> {
	const response = await api.moveEight()
    return response.data
})