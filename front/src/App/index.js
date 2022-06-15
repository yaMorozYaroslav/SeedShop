import React from 'react'
import {getElvs, toEight} from '../Redux/actions/elvAct'
import {useDispatch, useSelector} from 'react-redux'
import {Screen} from '../Redux/tools/Screen'

export function App(){
  const dispatch = useDispatch()
  const elvStatus = useSelector(state=>state.elvs.status)
  React.useEffect(()=> {
    if(elvStatus === 'idle'){
    dispatch(getElvs())
                            }
         },[dispatch, elvStatus])
  const hand8 =()=> dispatch(toEight())
  const elvs = useSelector(state=>state.elvs)
  if(elvs.elvs.length)console.log(elvs)
  return(
    <div>
      Text
      <Screen/>
    </div>
  	)
}