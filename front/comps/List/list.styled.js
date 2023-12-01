import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.div``
export const ListButts = styled.section`display:flex;margin-top:10px;
                         @media (max-width:400px) {margin-left:-15px;`
export const AddAdmin = styled.button`font-size:23px;border-style: dashed;padding:10px;
                                      background: white;height:63px;margin-top:5px;
                        @media (max-width: 600px) {font-size:20px;}
                        @media (max-width: 400px) {font-size:18px;padding:5px;}`
export const StyledLink = styled(Link)`margin:5px;
                                       font-size: 24px;padding: 15px;
                                       border:1px solid olive;
                                       color:black;
                        @media (max-width: 400px){font-size:20px; padding: 18px;
                                                  padding-left:5px;padding-right:5px}`
export const NoData = styled.p``                                    
export const List = styled.ul` display: grid;
                               grid-template-columns: repeat(4,1fr);
                               width: 95%;
                               margin-left:0%;
                               margin-top:0%;
                               list-style: none;
                               text-align:center;
                    @media (max-width: 1000px) {grid-template-columns: repeat(2,1fr);}
                    @media (max-width: 600px) {grid-template-columns: repeat(2,1fr);
                                    margin-left:-6%;}
                    @media (max-width: 400px) {display:block;}`
export const Cell = styled.li`font-size: 20px; border: 2px solid black;height: 365px;
                              width:85%;padding:10px;margin:10px;
                    @media (max-width: 600px) {font-size: 18px;padding:3px;
                                               width:86%;height:390px;}
                    @media (max-width: 400px) {font-size: 20px;width:85%;height:360px;}`
export const StyledImage = styled(Image)`margin:10px;width:100px;`
export const TitleLink = styled(Link)`font-size: 22px;
                                      padding: 5px; border:1px solid black;
                         @media (max-width: 600px) {font-size: 18px;}`
export const Parag = styled.p`margin: 12px;`
export const AddButt = styled.button`border-style:groove;margin:2px;font-size:21px;`
