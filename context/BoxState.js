import { createContext, useReducer } from "react"
import BoxReducer from './BoxReducer'

export const BoxContext = createContext()

export const BoxState = ({ children }) => {
	const [state, dispatch] = useReducer(BoxReducer, {boxes: []})
	}
