'use client'
import React, {createContext, useReducer} from "react"
import {BoxReducer}  from './BoxReducer'

export const BoxContext = createContext()

export const BoxState = ({ children }) => {
	const [state, dispatch] = useReducer(BoxReducer, {boxes:[]})
	
	const  addBox = payload => {
		dispatch({ type: 'ADD_BOX', payload })
		}
	const delBox = payload => {
		dispatch({ type: 'DEL_BOX', payload })
		}
	return (
	<BoxContext.Provider
	 value={{boxes: state.boxes, addBox, delBox}}>
	 {children}</BoxContext.Provider>
	)}
