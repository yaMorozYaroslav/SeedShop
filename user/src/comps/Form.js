import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {createMemo, updateMemo} from '../action/memoAct'

export const Form = ({currentId, setCurrentId}) =>{
	const [memoData, setMemoData] = React.useState({
		 title: '', message: '', creator: ''
	    })
	const memo = useSelector((state)=>
		    currentId?state.memos.find((p)=>p._id===currentId):null)
	const dispatch = useDispatch()

	React.useEffect(()=>{
		if(memo) setMemoData(memo)
	}, [memo])
	const submit =(e)=>{
		e.preventDefault()
		
	if(currentId&&memoData.title&&memoData.message&&memoData.creator){
		dispatch(updateMemo(currentId, memoData))
		clear()
	}
	if(memoData.title&&memoData.message&&memoData.creator){
		dispatch(createMemo(memoData))
		clear()
	}else{
	  alert('Fill in all the fields')
	}
	}
	
	const clear =()=> {
		setCurrentId(null)
		setMemoData({ title: '', message: '', creator: ''})
	}
	return(
	<section className="form">
 <form>
  <article>
   <label htmlFor="title">title :</label>
   <textarea 
    id="memoTitle"
    name="memoTitle"
    value={memoData.title}
    onChange={(e)=>setMemoData({...memoData, title: e.target.value})} />
  </article>
  <article>
    <label htmlFor="message">message :</label>
   <textarea 
    id="memoMessage"
    name="memoMessage"
    value={memoData.message}
    onChange={(e)=>setMemoData({...memoData, message: e.target.value})} />
  </article>
   <article>
    <label htmlFor="creator">creator :</label>
   <textarea 
    id="memoCreator"
    name="memoCreator"
    value={memoData.creator}
    onChange={(e)=>setMemoData({...memoData, creator: e.target.value})} />
    </article>
    <button onClick={submit}>submit</button>
    <button onClick={clear}>clear</button>
   </form>
  </section>

  )
}