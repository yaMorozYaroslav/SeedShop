import React from 'react'

export function Button(){
	const [value, setValue] = React.useState('Press Here')
	const dummyFunction =()=> {
		setValue("You clicked.")
	}
	return(
       <button onClick={dummyFunction} title="dummyButton">
          {value}
       </button>
		)
}