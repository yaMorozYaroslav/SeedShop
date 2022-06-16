import React from 'react'
import {fetchElvs} from './api'

export function Screen(){
	const [dati, setDati] = React.useState()
  
     console.log('Hi')
	React.useEffect(()=> {
	 async function fetcher(){
	 	const result = await fetchElvs()
	 	setDati(result.data)
	 }
	 fetcher()
	    },[])

     React.useEffect(()=> {
     	async function catcher(){
     		const result = await fetchElvs()
     		if(dati && result.data) {
     		 if(dati[0].floor !== result.data[0].floor){
                  setDati(result.data)
                      }
                    }
                  }
          catcher()
     },[dati])
     

	return (<section>
		     {dati?dati.map((elv)=><p key={elv.id}>{elv.floor}</p>):null}
		</section>)
}