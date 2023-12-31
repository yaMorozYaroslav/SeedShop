'use client'
import * as S from './first.styled'
import {useTranslations} from 'next-intl'
import {Link} from '../../navigation'

        
export const First = () => { 
	const t = useTranslations('First')
	
  return (<S.Container>
        <S.FirstLine>{t('title')}</S.FirstLine>
        <S.SecondLine>{t('second')}</S.SecondLine><br/>
          
        <S.SeedLink className='styledLink' href={'/seed-list'}>
                                               {t('seeds')} <br/> 
          
           
            <S.StyledImage alt='seeds' src='/first/seeds.jpg' 
                           width={0} height={0}/>
          </S.SeedLink>
            <S.ItemLink className='styledLink' href={'/item-list'}>
                                                   {t('goods')} <br/>
            <S.StyledImage alt='items' src='/first/prods.jpg' 
                           width={0} height={0}/></S.ItemLink>
        
  </S.Container>)}
