'use client'
import React from 'react'
import {AuthPanel} from './AuthPanel/AuthPanel'
import {CartBadge} from './CartBadge/CartBadge'
import * as S from './header.styled'
import {ListCleaner} from './listCleaner'
import {useTranslations} from 'next-intl'

export function Header(){
  const t = useTranslations('Header')
	return <S.HeadCont>
	             <ListCleaner/>
	                   <S.MainCont><S.MainTitle>{t("title")}</S.MainTitle></S.MainCont>
	                   
	                   <CartBadge/> 
	                   <AuthPanel/>
	                           </S.HeadCont>
	}
