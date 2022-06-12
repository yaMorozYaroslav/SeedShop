import React from 'react'
import {Paragraph} from './styled.js'
import {SearchBox} from '../SearchBox'
export function App(){
	const [state, setState] = React.useState(false)
	const handClick =()=> setState(item=>!item)
	return (<>
		      <SearchBox requestSearch={console.log}/>
		      <Paragraph onClick={handClick} data-testid='Paragraph'>
		      {state?'Click':'Clock'}
		      </Paragraph>


		    </>)
}