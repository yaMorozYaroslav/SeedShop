'use client'
import React from 'react'
import {useUserContext} from '../context/store'

export function Header(){
const {userId} =  useUserContext()

console.log(userId)
return <p>Header</p>
}
