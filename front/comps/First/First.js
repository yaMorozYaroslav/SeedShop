'use client'
import * as S from './first.styled'
import {useTranslations} from 'next-intl'
//~ import {useLocale} from 'next-intl'

        
export const First = () => {
	//~ const locale = useLocale()
        //~ <Link href="/" locale="ua">English</Link>
	const t = useTranslations('First')
  return (<S.Container>
        
        <S.FirstLine>{t('title')}</S.FirstLine>
        <S.SecondLine>{t('second')}</S.SecondLine><br/>
          
        <S.SeedLink className='styledLink' href={'/seed-list'}>
                                               {t('seeds')} <br/> 
          
           
            <S.StyledImage alt='seeds' src='/next.svg' 
                           width={0} height={0}/>
          </S.SeedLink>
            <S.ItemLink className='styledLink' href={'/item-list'}>
                                                   {t('goods')} <br/>
            <S.StyledImage alt='items' src='/next.svg' 
                           width={0} height={0}/></S.ItemLink>
        
  </S.Container>)}
