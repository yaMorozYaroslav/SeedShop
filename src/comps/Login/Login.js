import React from 'react'

export const Login =()=> {
	const [error, setError] = React.useState(false)
	return (
  <div className='container'>
	 <form>
	   <input type='text' placeholder='username' value='text' readOnly/>
	   <input type='password' placeholder='password' />
	   <button disabled='true'>Login</button>
	     <span data-testid='error' style={{visibility: error ? 'visible' : 'hidden'}}>
	       Something went wrong.
	     </span>
	 </form> 
  </div>
	 
	 )
	}
