//'use client'
import {AuthPanel} from './AuthPanel/AuthPanel'
import {CartBadge} from './CartBadge/CartBadge'
import * as S from './header.styled'

export function Header(){
	return <S.HeadCont><p>Flora</p><CartBadge/><AuthPanel/></S.HeadCont>
	}
