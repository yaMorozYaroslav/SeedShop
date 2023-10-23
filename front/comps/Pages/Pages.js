'use client'
import React from 'react'
import Link from 'next/link'
import {useSeedContext} from '../../context/seeds/SeedState'


export function Pages(total) {
	const {seeds, fetchSeeds} = useSeedContext()
	console.log(seeds)
	const Buttons = () => 
	    
        <div style={{'display':'flex', margin: '5px','fontSize':'23px'}}>
             Pages:{[...Array(total.total)].map((e, i) => 
    <button style={{'margin':'5px', 'fontSize':'21px', 'cursor':'pointer',
		             color: 0===i+1?'':'blue'}} key={i}
		             onClick={()=>fetchSeeds('','',i+1,'','')}>
				                               {i+1}</button>)}</div>
				                               
				                               

  return (<>
          <Buttons/>
          <Link href={'/'}>ToMenu</Link>
        
          </> )
}
