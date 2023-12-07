'use client'

import styled from 'styled-components'
import Link from 'next/link'

export const Name = styled.p`background:black;color:white;border-radius:20px;
                             height:28px;padding:12px;margin:11px;
                    @media (max-width: 600px) {margin-top:0px;margin-right:0px;}`
export const LogBut = styled.div`padding:10px;
                                 margin-top:11px;
                                 height:28px;
                                 border:2px solid olive;
                                 border-radius:20px;
                                 cursor:pointer;
                      @media (max-width: 600px) {margin:10px;margin-top:0px;}`
export const StyledLink = styled(Link)``

