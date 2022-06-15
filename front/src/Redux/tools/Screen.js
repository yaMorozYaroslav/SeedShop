import React from 'react'
import {fetchElvs} from './api'

export function Screen(){
	const [dati, setDati] = React.useState()
	React.useEffect(()=> {
	 async function fetcher(){
	 	const result = await fetchElvs()
	 	setDati(result.data)
	 }
	 fetcher()
	 console.log(dati)
	    },[])
	if(dati)console.log(dati)
	return <p>{dati}</p>
}