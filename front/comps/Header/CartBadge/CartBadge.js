'use client'
import Badge from "@material-ui/core/Badge"
import {useCartContext} from '../../../context/cart/CartState'
import * as S from './cart-badge.styled'
import CartIcon from "@material-ui/icons/ShoppingCart"

export const CartBadge = () => {
const {cartItems} = useCartContext()
const setCartToStorage = e => {
	e.preventDefault()
	console.log(cartItems)
	localStorage.setItem('cart', JSON.stringify(cartItems))
	}
return <S.Container><Badge color='secondary'
                overlap="rectangular"
                badgeContent={cartItems.length}> 
                   
                   <p>Cart</p></Badge>
                   <CartIcon fontSize="large" />
        <button onClick={setCartToStorage}>Set</button></S.Container>
}
