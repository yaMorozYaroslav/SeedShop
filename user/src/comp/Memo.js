import React from 'react'
import moment from 'moment'
import {useDispatch} from 'react-redux'

import {deleteMemo} from '../action/memoAct'

export const Memo =({memo, setCurrentId})=>{
	const dispatch = useDispatch()
  return(
     <div>
       <h1>{memo.title}</h1>
       <p>{memo.message}</p>
       <p>{memo.creator}</p>
     </div>

  	)
}