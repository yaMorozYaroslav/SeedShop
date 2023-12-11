'use client'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.div`margin-top:20px;
                         @media (max-width:600px) {margin-top:45px;}`
export const CartList = styled.div`width: 60%;
                                   margin-left:20%;margin-bottom:30px;
                        @media (max-width: 1000px) {margin-left:15%;width:70%}
                        @media (max-width: 800px) {margin-left:5%;width:90%}`
export const Thing = styled.section`display:grid;
                                    grid-template-columns: repeat(6, 1fr);
                                    grid-template-rows: 100px 100px 100px;
                                    border:2px solid black; font-size:23px;
                                    padding: 15px; height:180px; margin:5px;
                     @media (max-width: 600px){height:310px; }`
export const Number = styled.label`grid-row:2;margin-left:-5px;margin-top:25px;
                                   font-size:32px;padding:10px;
                      @media (max-width: 600px){margin-top:30px;}`
export const StyledImage = styled(Image)`grid-row:1;width:120px;height:120px;
                                         margin:10px;border: 1px solid black;
                           @media (max-width:400px) {}`
export const Title = styled.p`grid-column:2/5;grid-row:1;
                     @media (max-width: 600px) {grid-column:2/7;}`
export const Quantity = styled.p`grid-column:2/5;grid-row:2;margin-top:-10px;
                                 background: lightgreen;padding:15px;width:80%;height:45px;
                        @media (max-width: 600px) {grid-column:2/7;
                                                   margin-top:20px;
                                                   height:70px;width:83%}`
export const Butts = styled.section`grid-column:5/7;grid-row:1/3;
                                    border-style:dotted;
                                    width:100%;height:175px;
                                    text-align:right;
                                    margin-top:0px;
                     @media (max-width: 1000px) {display:block;}
                     @media (max-width: 600px) {grid-column:1/7;grid-row:3;
                                                height:58px;margin-top:50px;}`
export const ThingButt= styled.button`font-size:22px;width:100%;;height:58px;
                        @media (max-width: 600px) {width:33.3%;font-size:20px;}`
export const MailForm = styled.form`position:fixed;
                                    top:100px;left:30%;
                                    width:40%;
                                    padding:20px;
                                    text-align:center;
                                    background: green;`
export const Input = styled.input`font-size:25px`
export const Button = styled.button`font-size:25px;margin:5px;margin-bottom:20px;
                                    padding:5px;`
export const StyledLink = styled(Link)`font-size: 24px;padding: 10px;
                                       margin-bottom:10px; border:1px solid olive; 
                                       color:black;`
export const CartButts = styled.section`text-align:center;`


