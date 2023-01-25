import {configureStore,combineReducers} from '@reduxjs/toolkit';

import firstReducer from './firstSlice'

const rootReducer = combineReducers({
	first: firstReducer
	})

export const setupStore = preloadedState => {
	return configureStore({
	reducer: rootReducer, preloadedState
	 })
   }
