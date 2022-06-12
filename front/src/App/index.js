import React from 'react'
import {Paragraph} from './styled.js'
import {SearchBox} from '../SearchBox'
export function App(){
	return (<>
		      <SearchBox requestSearch={console.log}/>
		      <Paragraph data-testid='Paragraph'/>


		    </>)
}