import React from 'react'
import {fetchElvs} from './api'

export function Screen(){
	const [dati, setDati] = React.useState()
     const elvFirst = []
     const elvSecond = []
     const elvThird = []
     if(dati){
     	elvFirst.push(dati[0].floor)
     }
     console.log(elvFirst)
	React.useEffect(()=> {
	 async function fetcher(){
	 	const result = await fetchElvs()
	 	setDati(result.data)
	 }
	 fetcher()
	    },[dati])

    

	return (<section>
		     {dati?dati.map((elv)=><p key={elv.id}>{elv.floor}</p>):null}
		</section>)
}