import {createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../tools/api'

export const getElvs = createAsyncThunk('elvs/fetchElvs', async()=> {
	const response = await api.fetchElvs()
	return response.data
})
export const toZero = createAsyncThunk('elvs/toZero', async()=> {
	const response = await api.moveZero()
    return response.data
})