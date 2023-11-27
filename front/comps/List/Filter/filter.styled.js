import styled from 'styled-components'

export const Container = styled.div`margin-left: 20px`
export const Panel = styled.div`display:${p=>!p.$show?'none':'block'};
                                position: absolute;
                                left:40%;
                                text-align:center;
                                background: white;
                                width:500px;
                                height: 150px;
                                padding:30px;`

export const Label = styled.label`margin:0.5%;font-size:21px;color:purple`
export const ShowBut = styled.button`font-size:23px; 
                                     margin: 10px;
			                         border: 2px solid white`
export const Select = styled.select`font-size:17px;`
export const Input = styled.input`margin:0.5%;font-size:17px`
