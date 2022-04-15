import React from 'react'
import {useSelector} from 'react-redux'
import {Memo} from './Memo'

export const Memos=({setCurrentId})=>{
	const memos = useSelector((state)=>state.memos)
	
	return(!memos.length ?'Loading...':(
		<section>
		  {memos.map((memo)=>(
		  	<article key={memo._id}>
		  	   <Memo memo={memo} setCurrentId={setCurrentId}/>
		  	</article>
		  	))}
        </section>
		  	))}