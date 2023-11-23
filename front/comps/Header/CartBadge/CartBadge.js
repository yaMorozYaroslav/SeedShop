'use client'
import React from 'react'
import {useCartContext} from '../../../context/cart/CartState'
import * as S from './cart-badge.styled'
import Badge from '@mui/material/Badge'
import CartIcon from '@mui/icons-material/ShoppingCart'
import Link from 'next/link'


export const CartBadge = () => {
const {cartItems, setFromLocale} = useCartContext()

const setCartToStorage = e => {
	
	localStorage.setItem('cart', JSON.stringify(cartItems))
	}
 if (typeof window !== 'undefined') {
	     const localCart = JSON.parse(
	                            localStorage.getItem('cart'))}
//console.log(cartItems)
React.useEffect(()=>{if(cartItems.length)setCartToStorage()},[cartItems])
React.useEffect(()=>{if(localCart)setFromLocale(localCart)},[])
//console.log(!cartItems.length)
return (<S.Container>
        <Link className='styledLink' href={!cartItems.length?'':'/shop-cart'}>
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
