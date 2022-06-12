import React from 'react'
import styled from 'styled-components'

const Container = styled.div`display: flex; flex-direction: row`

export const SearchBox = ({requestSearch}) => {
	const [query, setQuery] = React.useState('')
	const searchClick =()=>{
		if(query){
			requstSearch(query)
		}
	}
	const updateQuery =e=> {
		setQuery(e.target.value)
	}
	return(
		<Container>
		 <input
		     type="text"
		     name="search"
		     placeholder="Search"
		     value={query}
		     onChange={updateQuery} />
	     <button data-testid = 'search-button' onClick={searchClick}>b</button>
	    </Container>
	)
}