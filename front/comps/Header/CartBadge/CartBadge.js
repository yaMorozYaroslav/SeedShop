'use client'
import React from 'react'
import {useCartContext} from '../../../context/cart/CartState'
import * as S from './cart-badge.styled'
import Badge from '@mui/material/Badge'
import CartIcon from '@mui/icons-material/ShoppingCart'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export const CartBadge = () => {
const {cartItems, setFromLocale} = useCartContext()
const pathname = usePathname()

const setCartToStorage = e => {
	
	localStorage.setItem('cart', JSON.stringify(cartItems))
	}
//console.log(cartItems)
React.useEffect(()=>{if(cartItems.length)setCartToStorage()},[cartItems])
React.useEffect(()=>{
	 const localCart = JSON.parse(localStorage.getItem('cart'))
	 if(localCart){setFromLocale(localCart)}},[])
//console.log(!cartItems.length)
return (<S.Container>
        <Link className='styledLink' href={!cartItems.length?pathname:'/shop-cart'}>
        <S.Label>Cart</S.Label>
     <Badge color='error'
            overlap="rectangular"
            badgeContent={cartItems.length||null}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}> 
        <CartIcon style={{fontSize:'32px'}}/>             
     </Badge>
        </Link>
        </S.Container>)
}
