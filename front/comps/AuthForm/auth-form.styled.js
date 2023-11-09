'use client'

import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`display: grid; justify-content: center; grid-template-columns: repeat(6, 1fr);`
export const Form = styled.form`
                 grid-column: 3/5;
                 padding: 1%;
                 margin-top: 5%;
                 text-align: right;
                 border: 1px solid black;`
export const Label = styled('label').withConfig({shouldForwardProp: () => true})(
	           ({text})=>text&&`color: red;`);
export const Input = styled('input').withConfig({shouldForwardProp:() => true})`
                 background: ${p=>p.text};
                 font-size: 24px;
                 margin: 5px;
                 width: 50%`
export const Submit = styled.button`position:relative;right:35%;margin:10px;font-size:24px;`
export const Toggler = styled.button`grid-column: 3/3`

export const StyledLink = styled(Link)`
                             grid-column:4/4;
                             color: green;
                             text-align: center;
                             border:1px solid black;
                             padding: 10px;`
