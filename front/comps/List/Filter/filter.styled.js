import styled from 'styled-components'
const mediaQuery = window.matchMedia("(min-width: 800px)").matches
//~ display:${p=>!p.$show?'none':'block'};
export const Container = styled.div`margin-left: 20px`
export const Panel = styled.div`
                                position: absolute;
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
                                                        width:35%;
                                                        display: block;}
                             @media (max-width: 600px) {width:60%;
                                                        right:15%;}
                             @media (max-width: 400px) {height:220px;
                                                        width:54%;
                                                        right: 20%;}`

export const Label = styled.label`margin:0.5%;font-size:24px;color:black;`
export const ShowBut = styled.button`font-size:22px; 
                                     margin-top: -5px;
                                     margin:5px;
                                     height:88%;
                                     width:150px;
			                         border: 2px solid groove`
export const FiltBut = styled.button`font-size:22px; 
                                     margin:10px;
                                     width:150px;
			                         border: 2px solid white;`
export const Select = styled.select`font-size:19px;`
export const Input = styled.input`margin:0.5%;font-size:19px;width:60%;
                             @media (max-width: 800px) {background: white;
                                                        }`
