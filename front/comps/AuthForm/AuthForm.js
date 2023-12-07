'use client'
import React from 'react'
import * as S from './auth-form.styled'
import {Label} from './auth-form.styled'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import {useUserContext} from '../../context/user/UserState'

const initialState = {name: '', email: '', password: '', confPass: ''}

export function AuthForm(){
	const router = useRouter()
	
	const {userData, setFromStorage, signIn, signUp, logout,
		                         error, clearError} =  useUserContext()
		                         
	const [source, setSource] = React.useState(initialState)
	
	const [registered, setRegistered] = React.useState(false)	
	
	function handSubmit(e){
		e.preventDefault()			 
			if(registered){signIn(source)
		   }else{
			  if((source.password !== source.confPass)){
	              alert('Passwords do not match.')
	         }else{signUp(source)
         }}}     
	     
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
    
    React.useEffect(()=>{
		  if(userData.user)router.push('/')
		},[userData])
		
  return  <S.Container>
    <S.Form onSubmit={handSubmit} id='form'>
     <S.Title>{!registered?'Registration':'Authentication'}</S.Title>
	 <S.Label>Email:</S.Label>
	 <S.Input name='email' placeholder='Write Your Email'
	          onChange={handChange} required/><br/>
	 <S.Label text='green'>Password:</S.Label>
	 <S.Input text='black' placeholder='Create Password' name='password'
	          onChange={handChange} required/><br/>
	 {!registered && (<>
	 <S.Label>Name:</S.Label>
	 <S.Input name='name' placeholder='Write Your Name'
	          onChange={handChange} required/><br/>
	 
	 <S.Label>Password:</S.Label>
	 <S.Input placeholder='Confirm Password' name='confPass'
	          onChange={handChange} required/>
	                   </>)}   
	 <S.Submit type='submit'>Submit</S.Submit><br/>          
	 
	</S.Form>
	 <S.Toggler onClick={()=>setRegistered(!registered)}>
	                        {registered?'Registration'
								        :'Authentication'}</S.Toggler>
								        
	  <S.StyledLink className='styledLink' href={'/'}>Menu</S.StyledLink>
  </S.Container>
	}
