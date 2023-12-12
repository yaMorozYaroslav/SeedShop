import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.div`background: lightgreen;padding:1px;
                                    margin-bottom:10px;margin-top:6px;
                         @media (max-width:600px) {margin-top:30px;}
                         @media (max-width:400px) {}`
export const ListButts = styled.section`display:flex;margin-top:5px;
                         @media (max-width:400px) {margin-left:-15px;`
export const AddAdmin = styled.button`font-size:23px;border-style: dashed;padding:10px;
                                      background: white;height:63px;margin-top:5px;
                        @media (max-width: 600px) {font-size:20px;}
                        @media (max-width: 400px) {font-size:18px;padding:5px;}`
export const StyledLink = styled(Link)`margin:5px;
                                       font-size: 24px;padding: 15px;
                                       border:1px solid olive;
                                       color:black; background:white;
                        @media (max-width: 400px){font-size:20px; padding: 18px;
                                                  padding-left:5px;padding-right:5px}`                                    
export const List = styled.ul` display: grid;
                               grid-template-columns: repeat(4,1fr);
                               grid-template-rows: 400px;
                               width: 90%;
                               margin: 0% 0% 15px -0.4%;
                               list-style: none;
                               text-align:center;
                    @media (max-width: 1000px) {grid-template-columns: repeat(2, 1fr)} 
                    @media (max-width: 600px) {margin-left:-4%;}
                    @media (max-width: 400px) {display:block;
                                               margin-left:-6%;}`
export const Cell = styled.li`font-size: 20px; border: 2px solid black;height: 365px;
                              width:85%;padding:10px;margin:10px;background:white;
                    @media (max-width: 600px) {font-size: 18px;padding:3px;
                                               width:90%;height:385px;}
                    @media (max-width: 400px) {font-size: 20px;width:85%;height:360px;}`
export const StyledImage = styled(Image)`margin:10px;width:100px;`
export const TitleLink = styled(Link)`font-size: 22px;
                                      padding: 5px; border:1px solid black;
                         @media (max-width: 600px) {font-size: 18px;}`
export const Parag = styled.p`margin: 12px;`
export const AddButt = styled.button`border-style:groove;margin:2px;font-size:21px;`
export const NoData = styled.p``
export const SpinCont = styled.div`display:flex;justify-content:center;height:415px;
                        @media (max-width: 1000px) {height:520px;}
                        @media (max-width: 400px) {height:500px;}`
export const Spinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  margin-top:60px;
  width: 200px;
  height: 200px;
  animation: spin 2s linear infinite;
@media (max-width: 1000px) {width: 200px;height:200px;margin-top:30px;}
@media (max-width: 600px) {width:200px;height:200px;}
@media (max-width: 400px) {width:180px;height:180px;margin-top:160px;}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`
