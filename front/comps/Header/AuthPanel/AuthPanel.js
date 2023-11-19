'use client'

import React from 'react'
import decode from 'jwt-decode'
import Link from 'next/link'


import {useUserContext} from '../../../context/user/UserState'
 
export function AuthPanel(){
	
 const {userData, setFromStorage, signIn, signUp, logout,
		                         error, clearError} =  useUserContext()
    	
    	const removeProfile = () => localStorage.removeItem('profile')
    
    let profile
	let currentUser
	
	if (typeof window !== 'undefined'){
    profile = JSON.parse(localStorage.getItem('profile'))
	currentUser = (source) => Object.keys(source).length > 0
	
	}else{profile = undefined, currentUser = undefined}
   console.log(!profile)
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
		
		React.useEffect(()=>{
		 if(error)alert(error)
	     if(error)clearError() 
			},[error])

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
	       // console.log(userData)
	    return <>
	    <p>{userData.user?userData.user.name:'Incognito'}</p>
	    {userData.user
			?<button onClick={()=>{logout();removeProfile();}}>Logout</button>
			:<button> <Link href={'/auth'}>Login</Link></button>}
		 </>
		}
