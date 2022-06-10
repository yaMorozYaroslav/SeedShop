import {createStore, applyMiddleware, compose} from 'redux'
import rootRed from './reducers'
import thunk from 'redux-thunk'

/*export const middlewares = [thunk]

export const createStoreWithMiddleware = applyMiddleware(
	                                ...middlewares)(createStore)*/
export const store = createStore(
	           rootRed, compose(applyMiddleware(thunk)))
