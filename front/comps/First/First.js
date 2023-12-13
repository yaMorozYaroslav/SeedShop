'use client'
import * as S from './first.styled'

export const First = () => {
  return (<S.Container>
  
        <S.FirstLine>Welcome to our seed store.</S.FirstLine>
        <S.SecondLine>More than 15 years of impeccable service. <br/>
                      Now online</S.SecondLine><br/>
          
        <S.SeedLink className='styledLink' href={'/seed-list'}>
                                                     Seeds<br/> 
          
            
            <S.StyledImage alt='seeds' src='./next.svg' 
                           width={0} height={0}/>
          </S.SeedLink>
          
         
            <S.ItemLink className='styledLink' href={'/item-list'}>
                                                 Products <br/>
            <S.StyledImage alt='items' src='./next.svg' 
                           width={0} height={0}/></S.ItemLink>
        
  </S.Container>)}
