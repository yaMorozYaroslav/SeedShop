'use client'
import * as S from './first.styled'
import {useTranslations} from 'next-intl'
import Link from 'next/link'
import {useLocale} from 'next-intl'

        
export const First = () => {
	const locale = useLocale()
	const t = useTranslations('First')
	console.log(locale)
  return (<S.Container>
        <S.TheLink href={'/ua'}>English</S.TheLink>
        <S.FirstLine>{t('title')}</S.FirstLine>
        <S.SecondLine>{t('second')}</S.SecondLine><br/>
          
        <S.SeedLink className='styledLink' href={`${locale}/seed-list`}>
                                                     Seeds<br/> 
          
           
            <S.StyledImage alt='seeds' src='/next.svg' 
                           width={0} height={0}/>
          </S.SeedLink>
            <S.ItemLink className='styledLink' href={'/item-list'}>
                                                 Products <br/>
            <S.StyledImage alt='items' src='/next.svg' 
                           width={0} height={0}/></S.ItemLink>
        
  </S.Container>)}
