import React from 'react'
import {fetchElvs} from './api'

export function Screen(){
	const [dati, setDati] = React.useState()
	let first = []
	let second = []
	let third = []
     if(dati){
      first = dati[0].floor
      second = dati[1].floor
      third = dati[2].floor
     }
	React.useEffect(()=> {
	 async function fetcher(){
	 	const result = await fetchElvs()
	 	setDati(result.data)
	 }
	 fetcher()
	    },[])
     
     return [first, second, third]
}