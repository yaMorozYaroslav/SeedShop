import React from 'react'
import emailjs from '@emailjs/browser'

export const MailForm =(setOpen)=> {
    const [source, setSource] = React.useState({user_name:'', user_email:'',
		                                        user_phone:'', delivery_method:'',
		                                        items:[]})
	const form = React.useRef()
	
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
	React.useEffect(()=>{
	  if(cartItems && source.items.length !== cartItems.length)
		     setSource({...source, items: cartItems})
		},[source, cartItems])
	return  <><S.Mailer ref={form}
	                    onSubmit={sendEmail}>
	  
	           <S.Input onChange={handChange} placeholder='Name' 
	                        name='user_name'  required/><br/>
	           <S.Input onChange={handChange} placeholder='Email' 
	                        name='user_email' required/><br/>
	           <S.Input onChange={handChange} placeholder='PhoneNumber' 
	                       name='user_phone' required /><br/>
	           <select onChange={handChange} name='delivery_method' required>
	               <option value=''/>
	               <option value='pick up'>Pick Up</option>
	               <option value='postal office'>Postal Office</option>
	           </select>
	       <br />
	             <S.Button type='submit'>Place The Order</S.Button>
	             <S.Button onClick={()=>setOpen(false)}>CloseForm</S.Button>
	                 </S.Mailer></>                   
		                    }
