'use client'
import React from 'react'
import {AuthPanel} from './AuthPanel/AuthPanel'
import {CartBadge} from './CartBadge/CartBadge'
import * as S from './header.styled'
//~ import {ListCleaner} from './listCleaner'
import {useTranslations} from 'next-intl'
import {useLocale} from 'next-intl'

export function Header(){
  const t = useTranslations('Header')
  
  const locale = useLocale()
  const isEnglish =()=> {if(locale === 'en'){return 'ua'}else{return 'en'}}
    console.log(isEnglish())
    
	return <><S.HeadCont>
	                <S.MainCont><S.MainTitle>{t("title")}</S.MainTitle></S.MainCont>              
           
	                   <CartBadge/> 
	                   <AuthPanel/>
	                           </S.HeadCont>
	       <S.Switch href='/' locale={isEnglish()} className='styledLink'>Link</S.Switch>
	       </>
	}
