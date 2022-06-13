import React from 'react'

export const Ticket =props=> {
	const [count, setCount] = React.useState(0)

	const increment =()=> {
		setCount(count => count + 1)
	}
	return(
		<div>
		   <h2 data-testid='name' className='name'>{props.name}</h2>
		   <button onClick={increment}>add</button>
		   <h2 data-testid='count' className='count'>{count}</h2>
		</div>
		  )
}