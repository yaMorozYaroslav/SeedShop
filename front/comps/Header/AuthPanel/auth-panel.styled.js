'use client'
import styled from 'styled-components'
import {Link} from '../../../navigation'

export const Name = styled.p`background:black;color:white;
                             border-radius:10px;font-size:23px;
                             height:29.5px;
                             padding:17px;padding-bottom:14px;
                             margin:11px;margin-right:-2px;
                    @media (max-width: 600px) {margin:6px 20% 0% -20%;}
                    @media (max-width: 400px) {}`
export const LogBut = styled.div`padding:15px 2% 13px 2%;
                                 text-align:center;
                                 margin-top:11px;
                                 height:29px;
                                 border:2px solid olive;border-radius:10px;
                                 cursor:pointer;
                                 font-size:24px;
                      @media (max-width: 600px) {margin:6px 10% 0% -10%;}
                      @media (max-width: 400px) {}`
export const StyledLink = styled(Link)`
                          @media (max-width:600px){margin-left:10px;width:95%;}
                          @media (max-width:400px){margin-left:10px;width:100%;}`

