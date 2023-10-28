import styled from 'styled-components'

export const Container = styled.div`display:flex;margin:5px;fontSize:23px;`

export const Button = styled.button`margin:5px; fontSize:21px;
                                    cursor:pointer; 
                                    color:${props => props.$stata ? 'blue': 'black'}`
