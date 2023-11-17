'use client'
import * as S from './first.styled'

export const First = () => {
  return (<S.Container>
  
        <S.FirstLine>Welcome to our seed store.</S.FirstLine>
        <S.SecondLine>More than 15 years of impeccable service. Now online</S.SecondLine><br/>
          
          <S.CellSeed>
            <S.StyledLink className='styledLink' href={'/seed-list'}>
                                                     View all seeds<br/>
            <S.StyledImage alt='seeds' src='./next.svg' 
                           width={100} height={100}/></S.StyledLink>
          </S.CellSeed>
          
          <S.CellItem>
            <S.StyledLink className='styledLink' href={'/item-list'}>
                                                 View all products <br/>
            <S.StyledImage alt='items' src='./next.svg' 
                           width={100} height={100}/></S.StyledLink>
          </S.CellItem>
  </S.Container>)}
