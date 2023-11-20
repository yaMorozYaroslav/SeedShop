'use client'
import Badge from "@material-ui/core/Badge"
import {useCartContext} from '../../../context/cart/CartState'
import * as S from './cart-badge.styled'
//import CartIcon from "@material-ui/icons/ShoppingCart"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const CartBadge = () => {
const {cartItems} = useCartContext()
const setCartToStorage = e => {
	e.preventDefault()
	console.log(cartItems)
	localStorage.setItem('cart', JSON.stringify(cartItems))
	}
return (<S.Container>

     <S.CartBadge color='secondary'
                  overlap="rectangular"
                  badgeContent={cartItems.length||null}> 
        <label>Cart</label>
       <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />             
     </S.CartBadge>
        </S.Container>)
}
