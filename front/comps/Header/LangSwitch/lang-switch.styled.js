'use client'
import styled from 'styled-components'
import {Link} from '../../../navigation'

export const Switch = styled(Link)`position:relative;color:black;
                                   top: 0px;right:-70%;
                                   padding-left:10px;padding-right:10px;border:solid;
                      @media (max-width: 600px) {top:30px;right:-55%;}
                      @media (max-width: 400px) {top:30px;right:-25%;}`
