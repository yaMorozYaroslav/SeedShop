import React from 'react'
import { usePathname } from 'next/navigation';
import {useQueryContext} from '../../../context/queries/QueryState'
import {useItemContext} from '../../../context/items/ItemState'
import {useSeedContext} from '../../../context/seeds/SeedState'
import * as S from './filter.styled'
import {seedTypes, itemTypes} from '../select-types'

export const Filter =(props)=> {
       
	const pathname = usePathname()
	const isSeed = pathname === '/seed-list'
	
	const [show, setShow] = React.useState(false)
	
	const {state, category, type, 
		   page, search, reverse, 
		   setCategory, setType,
		   setSearch,setReverse, reset} = useQueryContext()
    //console.log(state)
	const {items, fetchItems} = useItemContext()
	const {seeds, fetchSeeds} = useSeedContext()
	const fetchUnits = () => isSeed?fetchSeeds:fetchItems
	
	
	let categories
    if(!isSeed){ categories = ['', 'flowers', 'vegies', 'seedlings']
	}else{categories = ['', 'soils', 'supplements', 'equipment']}
	
	  let currType
	{categories.map((item,i) => {
		            if(category === item&&item.length){
						           currType = Object.values(
		                           !isSeed?seedTypes:itemTypes)[isSeed?i:i-1]}})}
	
	const onSort =()=> {
		               setReverse(!reverse)
		               fetchItems(category, type, page, search, !reverse)
		               }
	
	const resetFilt =()=> {
		reset()
		fetchItems('', '', 1, '', false)
		}
	function onCategory(event){
		event.preventDefault()
		if(search)setSearch('')
		setCategory(event.target.value)	
		fetchItems(event.target.value, '', 1, '', reverse)
		}
	function onType(event){
		event.preventDefault()
		setType(event.target.value)
		fetchItems(category, event.target.value, 1, '', reverse)
		}
	function onSearch(event){
		event.preventDefault()
		setSearch(event.target.value)
		if(category)setCategory('')
		fetchItems(category, type, 1, event.target.value, reverse)
		}
		
    const changeBorder =(e)=> {
			e.target.style.border = '2px solid green'
			setTimeout(() => e.target.style.border = null, 1000)
			}
		
	return <S.Container>
	   {show && <div>
		 <S.ShowBut onMouseOver={changeBorder}  
		         onClick={()=>setShow(false)}>HideFilters</S.ShowBut><br/>
		         
		  <S.Label>Category</S.Label>
		 <S.Select name='category'
	             onChange={onCategory}>
	{categories.map((item, i) => <option key={i} 
		                                 value={item}>{item}</option>)}
	 </S.Select>
	     
	       <S.Label>Type</S.Label>
	     <S.Select name='type'
	         value={state.itemType}
	         onChange={onType}
	         
	         required >
	     {currType && currType.map((item,i) => 
			   <option key={i}
				    value={item}>{!item?'all':item}</option>)}
	 </S.Select><br/>
	     <S.Label>Sort By Price</S.Label>
	     <S.ShowBut disabled={reverse}
	             onClick={onSort}>Minimum</S.ShowBut>
	     <S.ShowBut disabled={!reverse}
	             onClick={onSort}>Maximum</S.ShowBut>
	     
	     <S.Input value={state.itemSearch} 
	            onChange={onSearch} placeholder='Search By Text'/>
	     <S.ShowBut onClick={resetFilt} onMouseOver={changeBorder}>
	                                                   Reset</S.ShowBut>
	     </div>}
	     {!show && <S.ShowBut onMouseOver={changeBorder} 
			                  onClick={()=>setShow(true)}>
			                                    ShowFilters</S.ShowBut>}
	     </S.Container>
	}
