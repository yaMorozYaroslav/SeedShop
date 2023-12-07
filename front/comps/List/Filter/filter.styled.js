import styled from 'styled-components'
//const mediaQuery = window.matchMedia("(min-width: 800px)").matches
//~ display:${p=>!p.$show?'none':'block'};
export const Container = styled.div`margin-left: 20px`
export const Panel = styled.div`
                                position: fixed;
                                top: 35%;
                                right:45%;
                                border-style:dotted;
                                text-align:center;
                                background: steelblue;
                                width:30%;
                                height: 225px;
                                padding:10px;
                                padding-top:25px;
                             @media (max-width: 800px) {height:250px;
                                                        width:45%;
                                                        display: block;}
                             @media (max-width: 600px) {right:35%;}
                             @media (max-width: 400px) {height:270px;
                                                        width:54%;
                                                        right: 20%;}`

export const Label = styled.label`margin:0.5%;font-size:24px;color:black;`
export const ShowBut = styled.button`font-size:22px; 
                                     margin-top: -5px;
                                     margin:5px;
                                     padding:10px;
                                     height:88%;
                                     width:92%;
			                         border: 2px solid groove;
			           @media (max-width: 600px) {font-size:20px}
			           @media (max-width: 400px) {font-size:18px;padding:5px;}`
			                         
export const FiltBut = styled.button`font-size:22px; 
                                     margin:10px;
                                     width:150px;
			                         border: 2px solid white;`
export const Select = styled.select`font-size:21px;`
export const Input = styled.input`margin:0.5%;font-size:22px;width:60%;
                             @media (max-width: 600px) {}`
