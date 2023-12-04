'use client'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.div`text-align:center;`
export const CartList = styled.div`text-align: left; width: 60%;
                                   margin-left:20%;margin-bottom:30px;
                        @media (max-width: 1000px) {margin-left:15%;width:70%}`
export const Button = styled.button`font-size:25px;margin:5px;margin-bottom:20px;
                                    padding:5px;`
export const StyledLink = styled(Link)`font-size: 24px;padding: 10px;
                                       margin-bottom:10px; border:1px solid olive; 
                                       color:black;`
export const Thing = styled.section`border:1px solid black; font-size:23px;
                                    padding: 20px; margin:5px;`
export const Number = styled.label`border-style:groove;font-size:30px;padding:5px;`
export const StyledImage = styled(Image)`margin:10px;border: 1px solid black;`
export const Title = styled.label`position: relative;bottom: 80px;left:20px;`
export const Quantity = styled.label`background: lightgreen;padding:10px;margin-left:-100px;`
export const Butts = styled.section`border-style:dotted;left;width:80%;margin-left:20%;
                                    text-align:right;margin-top:20px;
                     @media (max-width: 1000px) {font-size:40px;}`
export const ThingButt= styled.button`font-size:22px;`
export const MailForm = styled.form`position:fixed;
                                    top:100px;left:30%;
                                    width:40%;
                                    padding:20px;
                                    text-align:center;
                                    background: green;`
export const Input = styled.input`font-size:25px`


