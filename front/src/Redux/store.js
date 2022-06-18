/*import {createStore, applyMiddleware} from 'redux'
import rootRed from './reducers'
import thunk from 'redux-thunk'

export const middle = [thunk]
//I want to
export const storeWithMiddleware = applyMiddleware(...middle)(createStore)
export const store = storeWithMiddleware(rootRed)*/
import {configureStore} from '@reduxjs/toolkit'

import elvRed from './reducers/elvRed'

export default configureStore({
	reducer: {
		elvs: elvRed
	}
})
