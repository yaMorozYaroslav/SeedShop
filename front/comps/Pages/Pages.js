'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import {useSeedContext} from '../../context/seeds/SeedState'
import {useItemContext} from '../../context/items/ItemState'
import * as S from './pages.styled.js'
import {Button} from './pages.styled.js'


export function Pages(total) {
	const pathname = usePathname()
	const isSeed = pathname === '/seed-list'
	
	const {seeds, fetchSeeds} = useSeedContext()
	const {items, fetchItems} = useItemContext()
	const activer = (s) => seeds.currPage === s||items.currPage === s
	const idler   = (s) => !seeds.currPage&&!items.currPage&&s===1	
			                               
    function fetchUnits(e){
		e.preventDefault()
		if(isSeed){fetchSeeds('','',e.target.value,'','')
	    }else{fetchItems('','',e.target.value,'','')}
		} 
		//console.log(total)
  return (<>
          <S.Container >
             Pages:
               {[...Array(total.total)].map((e, i) => 
                  <Button $stata={activer(i+1)||idler(i+1)}
                           key={i} value={i+1} onClick={fetchUnits}>
				                                        {i+1}</Button>)}
		  </S.Container>       
          </> )
}
