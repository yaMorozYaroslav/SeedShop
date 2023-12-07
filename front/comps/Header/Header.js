'use client'
import React from 'react'
import {AuthPanel} from './AuthPanel/AuthPanel'
import {CartBadge} from './CartBadge/CartBadge'
import * as S from './header.styled'
import {ListCleaner} from './listCleaner'

export function Header(){
	
	return <S.HeadCont><ListCleaner/>
	                   <p>Flora</p> <CartBadge/> <AuthPanel/></S.HeadCont>
	}
