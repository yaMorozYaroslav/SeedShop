import checkPropTypes from 'check-prop-types'
import rootRed from '../Redux/reducers'
import {middlewares} from '../Redux/store'
import {createStore, applyMiddleware} from 'redux'

export const findByTestAtrr =(component, attr)=> {
	const wrapper = component.find(`[data-test='${attr}']`)
	return wrapper
}

export const checkProps = (component, expectedProps) => {
	const propsErr = checkPropTypes(
		     component.propTypes, expectedProps, 'props', component.name)
	return propsErr
}
export const testStore = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
	return createStoreWithMiddleware(rootRed, initialState)
}