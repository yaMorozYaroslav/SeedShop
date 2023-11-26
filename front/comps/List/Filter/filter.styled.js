import styled from 'styled-components'

export const Container = styled.div`margin-left: 20px`
export const Panel = styled.div`display:${p=>!p.$show?'none':'inline'}`

export const Label = styled.label`margin:0.5%;font-size:21px;color:purple`
export const ShowBut = styled.button`font-size:23px; 
                                     margin: 10px;
			                         border: 2px solid white`
export const Select = styled.select`font-size:21px;`
export const Input = styled.input`margin:0.5%;font-size:21px`
