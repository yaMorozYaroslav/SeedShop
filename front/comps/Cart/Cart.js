'use client'
import {useCartContext} from '../../context/cart/CartState'
import * as S from './cart.styled'
import Link from 'next/link'

export const Cart =()=> {
	const {cartItems} = useCartContext()
	
	function counter(){
		let total
		cartItems.map(item=>total =+ item.price * item.quantity)
		return total
		}
		
	//console.log(counter())
	return <S.Container>{cartItems.map((item,index)=>
		              <S.Thing key={item._id}> 
		                <p>{index+1}. {item.title}</p>
		                <p>price: {item.price}</p>
		                <p>quantity: {item.quantity}</p></S.Thing>)}
		               <p>total: {counter()}</p>
		               <Link className='styledLink' href='/'>
		                                       To Menu</Link>
		   </S.Container>
	}
