import React from 'react'
import {getElvs} from '../Redux/actions/elvAct'
import {useDispatch, useSelector} from 'react-redux'

export function App(){
  const dispatch = useDispatch()
  React.useEffect(()=> {
    dispatch(getElvs())
  },[dispatch])
  const elvs = useSelector(state=>state.elvs)
  if(elvs.length)console.log(elvs)
  return(
    <div>
      Text
    </div>
  	)
}