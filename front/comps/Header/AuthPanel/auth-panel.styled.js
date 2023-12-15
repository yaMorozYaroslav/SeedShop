'use client'

import styled from 'styled-components'
import Link from 'next/link'

export const Name = styled.p`background:black;color:white;
                             border-radius:10px;font-size:23px;
                             height:28.5px;
                             padding:17px;padding-bottom:19px;
                             margin:9px;margin-right:-2px;
                    @media (max-width: 600px) {width:85%;
                                               margin:5px -3px 0px 1px}
                    @media (max-width: 400px) {width:69%;margin-left:12%;}`
export const LogBut = styled.div`padding:15px;padding-bottom:16.5px;
                                 margin-top:8px;
                                 height:29px;
                                 border:2px solid olive;border-radius:10px;
                                 cursor:pointer;
                                 font-size:24px;
                      @media (max-width: 600px) {margin:10px;margin-top:5px;}`
export const StyledLink = styled(Link)``

