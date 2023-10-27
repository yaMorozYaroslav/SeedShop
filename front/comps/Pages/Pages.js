'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import {useSeedContext} from '../../context/seeds/SeedState'
import {useItemContext} from '../../context/items/ItemState'
import * as S from './pages.styled.js'


export function Pages(total) {
	const pathname = usePathname()
	const isSeed = pathname === '/seed-list'
	
	const {seeds, fetchSeeds} = useSeedContext()
	const {items, fetchItems} = useItemContext()
	const active = (s) => seeds.currPage === s||items.currPage === s	
	console.log(active)		                               
    function fetchUnits(e){
		//e.preventDefault()
		if(isSeed){fetchSeeds('','',e.target.value,'','')
	    }else{fetchItems('','',e.target.value,'','')}
		} 
  return (<>
          <S.Container style={{}}>
             Pages:{[...Array(total.total)].map((e, i) => 
    <S.Button activer={active(i)||undefined} key={i} value={i+1}
		             onClick={fetchUnits}>
				                               {i+1}</S.Button>)}</S.Container>       
          </> )
}
