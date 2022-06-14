import {applyMiddleware, createStore} from 'redux'
import rootRed from '../reducers'
import {middle} from '../store'

export const mockStore =initial=> {
	const storeWithMiddleware = applyMiddleware(...middle)(createStore)
	return storeWithMiddleware(rootRed, initial)
}