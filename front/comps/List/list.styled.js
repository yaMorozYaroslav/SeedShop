import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.div``
export const StyledLink = styled(Link)`margin-left:60%; margin-right:10px;
                                       font-size: 24px;padding: 5px;
                                       border:1px solid olive;
                                       color:black`
export const AddBut = styled.button`font-size:26px;border-style: dashed; background: white;`                                    
export const List = styled.ul`
         display: grid;
         grid-template-columns: repeat(4,1fr);
         list-style: none;
         text-align:center;
         `
export const Cell = styled.li`border: 1px solid black;width:70%;padding:10px;margin:10px;`
export const StyledImage = styled(Image)`margin:10px;width:100px;`
export const TitleLink = styled(Link)`margin: 0.5%; font-size: 22px;
                                       padding: 5px; border:1px solid black`
