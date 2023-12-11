'use client'
import React from 'react'
import {useCartContext} from '../../context/cart/CartState'
import emailjs from '@emailjs/browser'
import * as S from './cart.styled'
import {useRouter} from 'next/navigation'

export const Cart =()=> {
	const {cartItems, increase, decrease, 
		              removeFromCart, clearCart} = useCartContext()
	const [open, setOpen] = React.useState(false)
	console.log(cartItems)
	const [source, setSource] = React.useState({user_name:'', user_email:'',
		                                        user_phone:'', items:[]})
	const form = React.useRef()
	const {push} = useRouter()
	
	const handChange = (e) => setSource({...source, [e.target.name]: e.target.value}) 
	
	const cleaner = () => {clearCart();
		                   localStorage.removeItem('cart');
		                   setOpen(false);push('/')}
	const remover = (id) => {removeFromCart(id)
		                     if(cartItems.length === 1)push('/')}
	const sendEmail = e => {
		e.preventDefault()
		
		emailjs.sendForm(
		'service_wzlecr5', 'template_gf9ayyc', form.current, 'LTwbosNcCwgaQan9I')
		.then((result) => {
			console.log(result.text)
			}, (error) => {
				console.log(error.text)
				})
				e.target.reset()
		clearCart()
		localStorage.removeItem('cart')
		setOpen(false)
	}
	//console.log(source)
	React.useEffect(()=>{
	  if(cartItems && source.items.length !== cartItems.length)
		     setSource({...source, items: cartItems})
		},[source, cartItems])
		
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
		      
		    {open && <S.MailForm ref={form}
	                    onSubmit={sendEmail}>
	  
	           <S.Input onChange={handChange} placeholder='Name' 
	                        name='user_name'  required/><br/>
	           <S.Input onChange={handChange} placeholder='Email' 
	                        name='user_email' required/><br/>
	           <S.Input onChange={handChange} placeholder='PhoneNumber' 
	                       name='user_phone' required /><br/>
	       <br />
	             <S.Button type='submit'>Place The Order</S.Button>
	             <S.Button onClick={()=>setOpen(false)}>CloseForm</S.Button>
	                 </S.MailForm>}
	                 
	         <S.CartButts>
	            <p>total: {counter()}</p>
		          <S.Button onClick={()=>setOpen(true)}>Order Items</S.Button>
		          <S.Button onClick={cleaner}>ClearCart</S.Button><br/>
		           <S.StyledLink className='styledLink' href='/'>
		                                       To Menu</S.StyledLink>
		     </S.CartButts>
	       </S.Container>
	}
