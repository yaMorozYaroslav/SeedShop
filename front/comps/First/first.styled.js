import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.div`text-align: center;margin-top:3%; display: grid;
                                    grid-template-columns: repeat(6, 1fr);
                                    grid-template-rows: repeat(4, 90px);
                                    row-gap: 30px;`
export const FirstLine = styled.p`grid-column: 3/5;grid-row:1;font-size: 36px;`
export const SecondLine = styled.p`grid-column:3/5;grid-row:2;font-size: 28px;`
export const CellSeed = styled.section`grid-column:3/4;grid-row:3/4;`
export const CellItem = styled.section`grid-column:4/5;grid-row:3/4;`
export const StyledLink = styled(Link)`margin: 10px;`
export const StyledImage = styled(Image)``

