'use client'
import styled from 'styled-components'
import Image from 'next/image'

export const HeadCont = styled.section`display: flex;
                                       text-align:center;
                                       justify-content: space-around;
                                                                           
                        @media (max-width: 600px) {display:grid;
                                                   grid-template-columns: repeat(2, 50%);
                                                   height:132px;}
                        @media (max-width: 400px) {margin-left:-15px;}`
export const MainCont = styled.div`background-image:url('/grass.jpg');
                                   background-size: cover;
                                   width:30%;height:30px;padding:20px;
                                   border:solid;border-radius:10px;
                                   margin:3px -40px 0px 0px;
                        @media (max-width: 1000px) {margin-right:0px;}
                        @media (max-width: 600px) {width:90%;}
                        @media (max-width: 400px) {width:85%;margin-left:15px;}`
export const MainTitle = styled.h6`color:white;font-size:75px;margin:-32px 0px 0px 0px;
                                  width:30%;
                          @media (max-width: 800px) {font-size:65px;
                                                     margin-left:-5px;margin-top:-24px;}
                          @media (max-width: 400px) {font-size:57px;
                                                     margin-left:-10px;margin-top:-18px;} `
