'use client'
import styled from 'styled-components'
import {Link} from '../../../navigation'

export const Switch = styled.select`color:black;margin-left:-10px;margin-top:20px;
                                   height:35px;width:8%;
                                   border:none;font-size:28px;
                                   background:green;color:gold;
                                   padding:0px 7px 1px 7px;
                      -webkit-appearance: none;
                      @media (max-width: 600px) {margin-top:10px;width:40%;}
                      @media (max-width: 400px) {}
                      option:hover{background:black;}
                      `
export const Option = styled.option`font-size:30px;`
