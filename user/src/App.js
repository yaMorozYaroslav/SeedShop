import React from 'react'
import {useDispatch} from 'react-redux'

import {getMemos} from './action/memoAct'
import {Memos} from './comps/Memos'
import {Form} from './comps/Form'

export const App =()=> {
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = React.useState(null)

  React.useEffect(()=>{
  dispatch(getMemos())
}, [currentId, dispatch])

  return (
    <>
     <Memos setCurrentId={setCurrentId} />
     <Form currentId={currentId} setCurrentId={setCurrentId} />
    </>
  );
}


