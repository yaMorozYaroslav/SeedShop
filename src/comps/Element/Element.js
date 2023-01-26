import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {onClick, offClick} from '../../Redux/firstSlice'

export function Element(){
	const dispatch = useDispatch()
	const selectClick = state => state.first.click
	const clickState = useSelector(selectClick)
	
	return(
	 <div>
	   <div>{clickState?1:0}</div>
	   <button 
	       onClick={() => dispatch(onClick())}
		   onDoubleClick={() => dispatch(offClick())}>onClick</button>
	 </div>
	)
	}
