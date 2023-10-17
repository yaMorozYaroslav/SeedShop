'use client'
import React from 'react'
import * as S from './auth.styled'
import decode from 'jwt-decode'
import Link from 'next/link'
import {ItemButts} from '../../comps/ItemButts'
import {useUserContext} from '../../context/user/UserState'

const initialState = {name: '', email: '', password: '', confPass: ''}

export default function Login(){
	const {userData, setFromStorage, signIn, signUp, logout,
		                         error, clearError} =  useUserContext()
	const [source, setSource] = React.useState(initialState)
	const [registered, setRegistered] = React.useState(false)
	
	const removeProfile = () => localStorage.removeItem('profile')
	let profile
	
	let currentUser
	
	if (typeof window !== 'undefined'){
    profile = JSON.parse(localStorage.getItem('profile'))
	currentUser = (source) => Object.keys(source).length > 0
	console.log(userData)
	}else{profile = undefined, currentUser = undefined}
	
	const handSubmit =(e)=> {
		e.preventDefault()
		if(!registered&&source.password
		                     === source.confPass){signUp(source)
	     }else{alert('Passwords do not match.')}
        if(registered)signIn(source)        
	  }
	React.useEffect(()=>{
		
		const shouldUpdateStorage = currentUser(userData) && 
		         JSON.stringify(userData) !== JSON.stringify(profile)
		if(shouldUpdateStorage){
		  localStorage.setItem('profile', JSON.stringify(userData))
		  }

		const shouldUpdateState = profile && currentUser(profile) &&
		         JSON.stringify(userData) !== JSON.stringify(profile)
		if(shouldUpdateState){
		setFromStorage(profile)
	    }
		},[userData, profile, setFromStorage])
		
		if(error)alert(error)
	    if(error)clearError() 
	    
	     React.useEffect(()=>{
	            let token
	        	if(userData)token = userData.token
	        	if(token){
	        		const decodedToken = decode(token)
	        		//console.log(decodedToken)
	        		if(decodedToken.exp * 1000 < new Date().getTime()){
	        		 logout()
	        		 removeProfile()
	        		 alert('Token has expired')
	              }
	        	}
	        },[userData, profile, logout])
	        
	        
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
