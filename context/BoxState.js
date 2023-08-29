import {createContext, useReducer} from "react"
import BoxReducer from './BoxReducer'

export const BoxContext = createContext()

export const BoxState = ({ children }) => {
	const [state, dispatch] = useReducer(BoxReducer, {boxes: []})
	
	const  addBox = payload => {
		dispatch({ type: 'ADD_BOX', payload })
		}
	const delBox = boxId => {
		dispatch({ type: 'DEL_BOX', boxId })
		}
	return (
	<BoxContext.Provider
	 value={{state: state.boxes, addBox, delBox}}>
	 {children}</BoxContext.Provider>
	)}
