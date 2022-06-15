import React from 'react'
import {getElvs, toEight, toZero} from '../Redux/actions/elvAct'
import {useDispatch, useSelector} from 'react-redux'
import {Screen} from '../Redux/tools/Screen'

export function App(){
  const dispatch = useDispatch()
  const elvStatus = useSelector(state=>state.elvs.status)
  React.useEffect(()=> {
    if(elvStatus === 'idle'){
    dispatch(getElvs())
    dispatch(toEight())
                            }
         },[dispatch, elvStatus])
  const hand0 =()=> dispatch(toZero())
  const hand8 =()=> dispatch(toEight())
  const elvs = useSelector(state=>state.elvs)
  if(elvs.elvs.length)console.log(elvs)
  return(
    <div>
      <button onClick={hand0}>Zero</button>
      <button onClick={hand8}>Eight</button>
      Text
      <Screen/>
    </div>
  	)
}