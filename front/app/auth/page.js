'use client'
import React from 'react'
import decode from 'jwt-decode'
import Link from 'next/link'
import {useUserContext} from '../../context/user/UserState'

const initialState = {name: '', email: '', password: '', confPass: ''}

export default function Login(){
	const {userData, setFromStorage, signIn, signUp, logout,
		                         error, clearError} =  useUserContext()
	const [source, setSource] = React.useState(initialState)
	const [registered, setRegistered] = React.useState(false)
	
	console.log(userData.user)
	const removeProfile = () => localStorage.removeItem('profile')
	let profile
	
	let currentUser
	
	if (typeof window !== 'undefined'){
	//localStorage.setItem('user', userData)
    profile = JSON.parse(localStorage.getItem('profile'))
	currentUser = (source) => Object.keys(source).length > 0
	//console.log(window.localStorage)
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
		        console.log(userData)
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
  //const loginUser = () => signIn({email:'ya.moro@gmail.com',password:'HorHor'})
  //console.log(userData)
  //return <button onClick={loginUser}>{userData.token},nothing</button>
  return <form onSubmit={handSubmit} id='form'>
	 <label>Email:</label>
	 <input name='email'
	 onChange={handChange} required/>
	
	 <label>Password:</label>
	 <input name='password'
	 onChange={handChange} required/>
	 
	 {!registered && (<>
	 <label>Name:</label>
	 <input name='name'
	 onChange={handChange} required/>
	 
	 <label>Confirm Password:</label>
	 <input name='confPass'
	 onChange={handChange} required/>
	                   </>)}
	 <br/>    
	 <button  type='submit'>Submit</button><br/>          
	 <button onClick={()=>setRegistered(!registered)}>
	                        {!registered?'To Registration'
								        :'To Authentication'}</button>
								        
	  <Link href={'/'}>{userData.user?userData.user.name:null} or</Link>
	 
	</form>
	}
