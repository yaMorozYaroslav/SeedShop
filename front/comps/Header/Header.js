'use client'
import {AuthPanel} from './AuthPanel/AuthPanel'
import * as S from './header.styled'

export function Header(){
	return <S.HeadCont><p>Flora</p><p>Cart</p><AuthPanel/></S.HeadCont>
	}
