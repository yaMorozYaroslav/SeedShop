'use client'
import styled from 'styled-components'
import {Link} from '../../../navigation'

export const Name = styled.p`background:black;color:white;
                             border-radius:10px;font-size:23px;
                             height:29.5px;
                             padding:17px;padding-bottom:14px;
                             margin:8px 11px 11px -5px;
                    @media (max-width: 600px) {margin:6px 20% 0% -20%;}
                    @media (max-width: 400px) {}`
export const LogBut = styled.div`padding:15px 5% 13px 5%;
                                 text-align:center;
                                 margin:8px 0px 0px -25%;
                                 height:29px;width:120%;
                                 border:2px solid olive;border-radius:10px;
                                 cursor:pointer;
                                 font-size:24px;
                      @media (max-width: 600px) {margin:6px 10% 0% -10%;}
                      @media (max-width: 400px) {}`
export const StyledLink = styled(Link)`
                          @media (max-width:600px){margin-left:10px;width:95%;}
                          @media (max-width:400px){margin-left:10px;width:100%;}`

