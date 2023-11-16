import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.div``
export const AddBut = styled.button``
export const StyledLink = styled(Link)`margin: 0.5%; font-size: 22px;
                                       padding: 5px; border:1px solid olive;
                                       margin-left: 70%;`
                                       
export const List = styled.ul`
         display: grid;
         grid-template-columns: 1fr 1fr;
         list-style: none;
         text-align:center;
         `
export const Cell = styled.li`border: 1px solid black;width:70%;padding:10px;margin:10px;`
export const StyledImage = styled(Image)`margin:10px;width:100px;`
export const TitleLink = styled(Link)`margin: 0.5%; font-size: 22px;
                                       padding: 5px; border:1px solid black`
