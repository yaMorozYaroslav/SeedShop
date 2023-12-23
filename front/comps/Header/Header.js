'use client'
import React from 'react'
import {AuthPanel} from './AuthPanel/AuthPanel'
import {CartBadge} from './CartBadge/CartBadge'
import * as S from './header.styled'
//~ import {ListCleaner} from './listCleaner'
import {useTranslations} from 'next-intl'
import {useLocale} from 'next-intl'
import { usePathname } from 'next/navigation'
//~ import {useItemContext} from '../../context/seeds/SeedState'
//~ import {useSeedContext} from '../../context/items/ItemState'

export function Header(){
  const t = useTranslations('Header')
  const p = usePathname()
  //~ const {items} = useItemContext()
  //const {resetSeeds} = useSeedContext()
  const locale = useLocale()
  const isEnglish =()=> {if(locale === 'en'){return 'ua'}else{return 'en'}}
    console.log(isEnglish())
  React.useEffect(()=>{
	    },[])
	return <><S.HeadCont>
	                <S.MainCont><S.MainTitle>{t("title")}</S.MainTitle></S.MainCont>              
           
	                   <CartBadge/> 
	                   <AuthPanel/>
	                           </S.HeadCont>
	       <S.Switch href='/' locale={isEnglish()} className='styledLink'>
	                          {isEnglish()==='en'?'english':'українська'}</S.Switch>
	       </>
	}
