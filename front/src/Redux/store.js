import {createStore, applyMiddleware} from 'redux'
import rootRed from './reducers'
import thunk from 'redux-thunk'

export const middle = [thunk]

export const storeWithMiddleware = applyMiddleware(...middle)(createStore)
export const store = storeWithMiddleware(rootRed)