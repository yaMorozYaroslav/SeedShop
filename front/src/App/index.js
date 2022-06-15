import React from 'react'
//import {getElvs} from '../Redux/actions/elvAct'
import {fetchElvs} from '../Redux/reducers/elvRed'
import {useDispatch, useSelector} from 'react-redux'

export function App(){
  const dispatch = useDispatch()
  const elvStatus = useSelector(state=>state.elvs.status)
  React.useEffect(()=> {
    if(elvStatus === 'idle'){
    dispatch(fetchElvs())
               }
  },[dispatch])
  const elvs = useSelector(state=>state.elvs.elvs)
  if(elvs.length>0)console.log(elvs)
  return(
    <div>
      Text
    </div>
  	)
}