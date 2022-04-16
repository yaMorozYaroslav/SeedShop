import React from 'react'
import {useSelector} from 'react-redux'
import {Memo} from './Memo'

export const Memos=({setCurrentId})=>{
	const memos = useSelector((state)=>state.memos)
	const ordered = memos.slice().sort((a,b)=>
		                 b.createdAt.localeCompare(a.createdAt))
	return(!memos.length ?'Loading...':(
		<section className="memos">
		  {ordered.map((memo)=>(
		  	<article key={memo._id}>
		  	   <Memo memo={memo} setCurrentId={setCurrentId}/>
		  	</article>
		  	))}
        </section>
		  	))}