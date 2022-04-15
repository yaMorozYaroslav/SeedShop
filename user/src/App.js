import React from 'react'
import {useDispatch} from 'react-redux'

import {getMemos} from './action/memoAct'
import {Memos} from './comp/Memos'

React.useEffect(()=>{
  dispatch(getPosts())
}, [currentId, dispatch])

export const App =()=> {
  const [currentId, setCurrentId] = React.useState(null)
  return (
    <div>
     <Memos setCurrentId={setCurrentId} />
    </div>
  );
}


