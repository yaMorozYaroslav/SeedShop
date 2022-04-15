import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {createMemo} from '../action/memoAct'

export const Form = ({currentId, setCurrentId}) =>{
	const [memoData, setMemoData] = React.useState({
		 title: '', message: '', creator: ''
	    })
	const memo = useSelector((state)=>
		    currentId?state.posts.find((p)=>p._id===currentId):null)
	const dispatch = useDispatch()

	React.useEffect(()=>{
		if(memo) setMemoData(memo)
	}, [memo])
	const submit =(e)=>{
		e.preventDefault()
		dispatch(createMemo(memoData))
		clear()
	}
	
	const clear =()=> {
		setCurrentId(null)
		setMemoData({ title: '', message: '', creator: ''})
	}
	return(
	<section>
 <form>
   <label htmlFor="title">title :</label>
   <textarea 
    id="memoTitle"
    name="memoTitle"
    value={memoData.title}
    onChange={(e)=>setMemoData({...memoData, title: e.target.value})} />

    <label htmlFor="message">message :</label>
   <textarea 
    id="memoMessage"
    name="memoMessage"
    value={memoData.message}
    onChange={(e)=>setMemoData({...memoData, message: e.target.value})} />

    <label htmlFor="creator">creator :</label>
   <textarea 
    id="memoCreator"
    name="memoCreator"
    value={memoData.creator}
    onChange={(e)=>setMemoData({...memoData, creator: e.target.value})} />
    <button onClick={submit}>submit</button>
   </form>
  </section>
  )
}