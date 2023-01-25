import React from 'react'
import axios from 'axios'

export const Login =()=> {
	
	const [loading, setLoading] = React.useState(false)
	const [error, setError] = React.useState(false)
	const [username, setUser] = React.useState('')
	const [password, setPass] = React.useState('')
	
	const handleClick = async (e) => {
		e.preventDefault()
		setLoading(true)
		try{
			const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/1')
			setUser(data)
		}catch{
			setError(true)
			}
		setLoading(false)
		}
	return(
  <div className='container'>
    <span>{username.name}</span>
	 <form>
	 
	   <input 
	       type='username' placeholder='username' 
	       value={username} onChange={(e)=>setUser(e.target.value)}/>
	       
	   <input
	       type='password' placeholder='password'
	       value={password} onChange={(e)=> setPass(e.target.value)}/>
	       
	   <button disabled={!username||!password} onClick={handleClick}>
	      {loading?'please wait':'Login'}</button>
	     <span data-testid='error' style={{visibility: error ? 'visible' : 'hidden'}}>
	       Something went wrong.
	     </span>
	     
	 </form> 
  </div>
	 
	 )
	}
