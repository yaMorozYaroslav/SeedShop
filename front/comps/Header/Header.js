//'use client'
import {AuthPanel} from './AuthPanel/AuthPanel'
import * as S from './header.styled'
//import styles from './Header.module.css'

export function Header(){
	return <S.HeadCont><p>Flora</p><p>Cart</p><AuthPanel/></S.HeadCont>
	}
