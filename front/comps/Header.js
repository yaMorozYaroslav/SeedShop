'use client'
import React from 'react'
import {useUserContext} from '../context/user/UserState'

export function Header(){
const {userId} =  useUserContext()

//console.log(userId)
return <p>Headerio</p>
}
