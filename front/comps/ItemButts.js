'use client'
import React from 'react'
import {useUserContext} from '../context/user/UserState'
export function ItemButts(){
	const {userData, signIn, error} =  useUserContext()
	
	if (typeof window !== 'undefined'){
	//localStorage.setItem('user', userData)
	console.log(window.localStorage)
	}
  const loginUser = () => signIn({email:'ya.moroz.yaroslav@gmail.com',password:'HorHor'})
  console.log(userData)
	return <button onClick={loginUser}>{userData.token},nothing</button>
	}
