'use client'
import React from 'react'
import {useUserContext} from '../context/user/UserState'
export function ItemButts(){
	const {userId} =  useUserContext()
	
	if (typeof window !== 'undefined'){
	localStorage.setItem('user', userId)
	console.log(window)
	}
	return <button>{userId}</button>
	}
