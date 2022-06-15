import React from 'react'
import {getElvs} from '../Redux/actions/elvAct'
import {useDispatch, useSelector} from 'react-redux'

export function App(){
  const dispatch = useDispatch()
  const elvStatus = useSelector(state=>state.elvs.status)
  React.useEffect(()=> {
    if(elvStatus === 'idle'){
    dispatch(getElvs())
               }
  },[dispatch, elvStatus])
  const elvs = useSelector(state=>state.elvs)
  if(elvs.elvs.length)console.log(elvs)
  return(
    <div>
      Text
    </div>
  	)
}