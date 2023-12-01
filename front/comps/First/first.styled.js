import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.div`text-align: center;margin-top:1%; display: grid;
                                    grid-template-columns: repeat(7, 1fr);
                                    grid-template-rows: 1fr 0.9fr 1.5fr;
                                    column-gap: 10px;row-gap:0px;`
export const FirstLine = styled.p`grid-column: 3/6;grid-row:1;font-size: 38px;`
export const SecondLine = styled.p`grid-column:2/6;grid-row:2;font-size: 29px;`
export const ItemLink = styled(Link)`grid-column:5/6;grid-row:3;
                                     font-size:26px;padding:5px;`
export const SeedLink = styled(Link)`grid-column:3/4;grid-row:3;
                                     font-size:26px;padding:5px;`
export const StyledImage = styled(Image)`border-style: groove;padding:20px;`

