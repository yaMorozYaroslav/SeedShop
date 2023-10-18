'use client'
import React from 'react'
import {useUserContext} from '../../context/user/UserState'

export function Logo(){
const {userId} =  useUserContext()

//console.log(userId)
return <p>Headerio</p>
}
