'use client'
import React from 'react'
import {useCartContext} from '../../context/cart/CartState'
import * as S from './cart.styled'
import {useRouter} from 'next/navigation'
import MailForm from './MailForm/MailForm'

export const Cart =()=> {
	const {cartItems, increase, decrease, 
		              removeFromCart, clearCart} = useCartContext()
	const [open, setOpen] = React.useState(false)
	
	const {push} = useRouter()
	
	const handChange = (e) => setSource({...source, [e.target.name]: e.target.value}) 
	
	const cleaner = () => {clearCart();
		                   localStorage.removeItem('cart');
		                   setOpen(false);push('/')}
	const remover = (id) => {removeFromCart(id)
		                     if(cartItems.length === 1)push('/')}
		
	function counter(){
		let total
		cartItems.map(item=>total =+ item.price * item.quantity)
		return total
		}

	return <S.Container>	
	
	    <S.CartList>{cartItems.map((item,index)=>
				 
		   <S.Thing key={item._id}> 
		      <S.Number>{index+1}.</S.Number>
              <S.StyledImage alt='' src={item.photo&&item.photo.length
				                      ?item.photo:'./next.svg'}
                              width={0} height={0} priority={true}/>
		        <S.Title>{item.title} </S.Title><br/>
		               
		        <S.Quantity>price: {item.price}/<br/>
		                       quantity: {item.quantity}</S.Quantity>
		                       
		              <S.Butts> 
		                <S.ThingButt onClick={()=>increase(item._id)}>increase</S.ThingButt> 
		                <S.ThingButt onClick={()=>decrease(item._id)}>decrease</S.ThingButt>
		                <S.ThingButt onClick={()=>remover(item._id)}>remove</S.ThingButt>
		              </S.Butts>                         
		   </S.Thing>)}
	    </S.CartList>
		      
		    {open && <S.MailForm setOpen={setOpen}/>}
	                 
	         <S.CartButts>
	            <S.Total>total: {counter()}</S.Total>
		          <S.Button onClick={()=>setOpen(true)}>Order Items</S.Button>
		          <S.Button onClick={cleaner}>ClearCart</S.Button><br/>
		            <S.StyledLink className='styledLink' href='/'>
		                                       To Menu</S.StyledLink>
		     </S.CartButts>
	       </S.Container>
	}
