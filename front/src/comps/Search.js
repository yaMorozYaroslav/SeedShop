import React from 'react'

export function Search(){
	const [inputValue, setInputValue] = React.useState('')

	const handleChange =event=> {
		setInputValue(event.target.value)
	}
  return <input 
           type="text" onChange={handleChange} title='dummySearch'/>
}