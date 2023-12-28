import styled from 'styled-components'
import {Link} from '../../navigation'
import Image from 'next/image'

export const Container = styled.div`text-align: center;margin-top:25px; display: grid;
                                    grid-template-columns: repeat(7, 1fr);
                                    grid-template-rows: 0fr 1fr 1.5fr;
                                    column-gap: 10px;
                         @media (max-width: 800px) {top:100px;}
                         @media (max-width: 400px) {column-gap:0px;}`
export const FirstLine = styled.p`grid-column: 2/7;grid-row:1;font-size: 40px;
                         @media (max-width: 800px) {grid-column:3/6;}
                         @media (max-width: 600px) {font-size:35px;margin-top:40px;}
                         @media (max-width: 400px) {grid-column:3/6; font-size:35px;}`
export const SecondLine = styled.p`grid-column:2/7;grid-row:2;
                                   margin-top:15px;font-size: 29px;
                          @media (max-width: 800px) {}
                          @media (max-width: 600px) {grid-column:3/6;font-size:32px;
                                                     margin-top:0px;}
                          @media (max-width: 400px) {margin-top:-5px; margin-left:2px;
                                                     font-size:28px;
                                                     grid-column:1/8;}`
export const ItemLink = styled(Link)`grid-column:5/6;grid-row:3;
                                     font-size:26px;padding:5px;
                        @media (max-width: 600px) {margin-top:-20px;}
                        @media (max-width: 400px) {margin-top:-35px;}`
export const SeedLink = styled(Link)`grid-column:3/4;grid-row:3;
                                     font-size:26px;padding:5px;
                        @media (max-width: 600px) {margin-top:-20px;}
                        @media (max-width: 400px) {margin-top:-35px;}`
export const StyledImage = styled(Image)`width:100px;height:100px;
                                         border-style: groove;padding:25px;
                           @media (max-width: 400px) {padding:5px;}`

