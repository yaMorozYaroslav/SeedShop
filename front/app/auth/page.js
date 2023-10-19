'use client'
import React from 'react'
import * as S from './auth.styled'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

//import {ItemButts} from '../../comps/ItemButts'
import {useUserContext} from '../../context/user/UserState'

const initialState = {name: '', email: '', password: '', confPass: ''}

export default function Login(){
	const router = useRouter()
	
	const {userData, setFromStorage, signIn, signUp, logout,
		                         error, clearError} =  useUserContext()
		                         
	const [source, setSource] = React.useState(initialState)
	
	const [registered, setRegistered] = React.useState(false)
	//console.log(registered)
	
	
	const handSubmit =(e)=> {
		e.preventDefault()
	    if(!registered&&source.password !== source.confPass){
	     alert('Passwords do not match.')}else{
			if(registered){signIn(source)}else{signUp(source)}}
  
        router.push('/')          
	  }
	
	    
	        
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
  
  return <form onSubmit={handSubmit} id='form'>
	 <S.Label>Email:</S.Label>
	 <S.Input name='email'
	 onChange={handChange} required/><br/>
	
	 <label>Password:</label>
	 <input name='password'
	 onChange={handChange} required/><br/>
	 
	 {!registered && (<>
	 <label>Name:</label>
	 <input name='name'
	 onChange={handChange} required/><br/>
	 
	 <label>Confirm Password:</label>
	 <input name='confPass'
	 onChange={handChange} required/>
	                   </>)}
	 <br/>    
	 <button  type='submit'>Submit</button><br/>          
	 <button onClick={()=>setRegistered(!registered)}>
	                        {!registered?'To Registration'
								        :'To Authentication'}</button>
								        
	  <Link href={'/'}>ToMenu</Link>
	 
	</form>
	}
