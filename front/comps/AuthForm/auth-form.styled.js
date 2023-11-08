'use client'

import styled from 'styled-components'
import Link from 'next/link'

export const Form = styled.form`
                 width: 500px;
                 text-align: left`
export const Label = styled('label').withConfig({shouldForwardProp: () => true})(({
	           text})=>({color: text}))
export const Input = styled.input`
                 background: ${p=>p.text};
                 width: 10px`

export const StyledLink = styled(Link)`
                             color: pink;
                             margin: 10px;`
