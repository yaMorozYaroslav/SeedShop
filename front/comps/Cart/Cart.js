'use client'
import React from 'react'
import {useCartContext} from '../../context/cart/CartState'
import emailjs from '@emailjs/browser'
import * as S from './cart.styled'
import Link from 'next/link'

export const Cart =()=> {
	const {cartItems, clearCart} = useCartContext()
	const [open, setOpen] = React.useState(false)
	
	const [source, setSource] = React.useState({user_name:'', user_email:'',
		                                        user_phone:'', items:[]})
	const form = React.useRef()
	
	const handChange = (e) => setSource({...source, [e.target.name]: e.target.value}) 
	
	const sendEmail = e => {
		e.preventDefault()
		
		emailjs.sendForm(
		'service_wzlecr5', 'template_gf9ayyc', form.current, 'LTwbosNcCwgaQan9I')
		.then((result) => {
			console.log(result.text)
			}, (error) => {
				console.log(error.text)
				})
	    //setResponse(source)
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
		
	//console.log(counter())
	return <S.Container>	
	        <S.CartList>{cartItems.map((item,index)=>
		              <S.Thing key={item._id}> 
		                <p>{index+1}. {item.title}</p>
		                <p>price: {item.price}</p>
		                <p>quantity: {item.quantity}</p></S.Thing>)}
		               <p>total: {counter()}</p>
		               <Link className='styledLink' href='/'>
		                                       To Menu</Link>
		    </S.CartList>
		    {open && <S.MailForm ref={form}
	                    onSubmit={sendEmail}>
	  
	           <S.Input onChange={handChange} placeholder='Name' 
	                        name='user_name'  required/><br/>
	           <S.Input onChange={handChange} placeholder='Email' 
	                        name='user_email' required/><br/>
	           <S.Input onChange={handChange} placeholder='PhoneNumber' 
	                       name='user_phone' required /><br/>
	
	           <textarea readOnly value={JSON.stringify(source.items)} name='items'/>
	       <br />
	             <button type='submit'>SendMail</button>
	             <button onClick={()=>setOpen(false)}>CloseForm</button>
	         </S.MailForm>}
	       </S.Container>
	}
