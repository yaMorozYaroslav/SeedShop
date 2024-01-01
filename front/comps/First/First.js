'use client'
import * as S from './first.styled'
import {useTranslations} from 'next-intl'
import {Link} from '../../navigation'
import Image from 'next/image'

        
export const First = () => { 
	const t = useTranslations('First')
	
  return (<S.Container>
        <S.FirstLine>{t('title')}</S.FirstLine>
        <S.SecondLine>{t('second')}</S.SecondLine><br/>
          
        <S.SeedLink className='styledLink' href={'/seed-list'}>
                                               {t('seeds')} <br/> 
           <S.ImageCont>
            <Image alt='seeds' src='/first/seeds.jpg' 
                   sizes="(max-width: 768px) 100vw" fill={true} priority/>
           </S.ImageCont>
        </S.SeedLink>
        <S.ItemLink className='styledLink' href={'/item-list'}>
                                                   {t('goods')} <br/>
            <S.ImageCont>                                     
             <Image alt='items' src='/first/prods.jpg' 
                    sizes="(max-width: 768px) 100vw" fill={true}/>
            </S.ImageCont>
        </S.ItemLink>
        
  </S.Container>)}
