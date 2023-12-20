import styled from 'styled-components'

export const ExtraCont = styled.div`width:100%;height:100%;
                                    display:flex;justify-content:center;`
export const Container = styled.div`
                                    position: fixed;
                                    top:120px;
                                    background: white;
                                    display: block;
		                            text-align:center;
		                            width:40%;
		                 @media (max-width:800px) {width:55%;}
		                 @media (max-width:600px) {width:75%;}
		                 @media (max-width:600px) {width:85%;}
                       `
export const Title = styled.h1`font-size:30px`
export const Form = styled.form`font-size:24px`
export const Input = styled.input`fontSize:22px;margin:7px;width:40%`
export const Textarea = styled.textarea`fontSize:22px;margin:0px;
                                        height:50px;`
export const Category = styled.select`fontSize:22px;margin:7px;cursor:pointer`
export const Submit = styled.button`font-size:26px;margin:14px;cursor:pointer;
                      @media (max-width:400px){margin:5px;}`
export const Close = styled.button`font-size:26px;margin:14px;cursor:pointer;
                     @media (max-width:400px){margin:5px;}`
