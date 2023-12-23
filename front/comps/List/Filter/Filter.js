import React from 'react'
import { usePathname } from 'next/navigation';
import {useQueryContext} from '../../../context/queries/QueryState'
import {useItemContext} from '../../../context/items/ItemState'
import {useSeedContext} from '../../../context/seeds/SeedState'
import * as S from './filter.styled'
import {seedTypes, itemTypes} from '../select-types'
import Fade from '@mui/material/Fade';
import { useLocale } from 'next-intl'

export const Filter =(props)=> {
    
	const locale = useLocale()   
	const pathname = usePathname()
	const isSeed = pathname === `/${locale}/seed-list`
	
	const [show, setShow] = React.useState(false)
	
	const {state, setCategory, setType,
		   setSearch,setReverse, reset} = useQueryContext()

	const {items, fetchItems} = useItemContext()
	const {seeds, fetchSeeds} = useSeedContext()
	
	//const size = ScreenSize()
	
	let categories
    if(isSeed){ categories = ['', 'flowers', 'vegies', 'seedlings']
	}else{categories = ['', 'soils', 'supplements', 'equipment']}
	
	  let currType
	{categories.map((item,i) => {
		            if(state.category === item&&item.length){
						           currType = Object.values(
		                           isSeed?seedTypes:itemTypes)[isSeed?i-1:i-1]}})}
		                           
    function fetchUnits(source){if(isSeed){fetchSeeds(source)
		                       }else{fetchItems(source)     }}
	const onSort =()=> {
		               setReverse(!state.reverse)
		               fetchUnits({...state, reverse: !state.reverse})
		               }
	
	const resetFilt =()=> {
		reset()
		//fetchItems('', '', 1, '', false)
		fetchUnits({category:'',type:'',page:1, search:'', reverse:false})
		}
	function onCategory(event){
		event.preventDefault()
		if(state.search)setSearch('')
		setCategory(event.target.value)	
		fetchUnits({...state, category: event.target.value, type: '', page: 1})
		}
	function onType(event){
		event.preventDefault()
		setType(event.target.value)
		fetchUnits({...state, type: event.target.value, page:1})
		}
	 
	function onSearch(event){
		event.preventDefault()
		setSearch(event.target.value)
		if(state.category)setCategory('')
		fetchUnits({...state, page:1, search: event.target.value})
		}
		
    const changeBorder =(e)=> {
			e.target.style.border = '2px solid green'
			setTimeout(() => e.target.style.border = null, 1000)
			}
		//	const mediaQuery = window.matchMedia("(max-width: 800px)").matches
	
	return <S.Container>
	        
	   <Fade style={{ transitionDuration: '1000ms' }} in={show}>
	   
	      <S.Panel>
		         
		  <S.Label>Category</S.Label>
		 <S.Select name='category'
		           value={state.category}
	               onChange={onCategory}>
	{categories.map((item, i) => <option key={i} 
		                                 value={item}>{item}</option>)}
	 </S.Select><br/>
	     
	       <S.Label>Type</S.Label>
	     <S.Select name='type'
	               onChange={onType}>
	     {currType && currType.map((item,i) => 
			   <option key={i}
				    value={item}>{!item?'all':item}</option>)}
	 </S.Select><br/>
	     <S.Label>Sort By Price</S.Label>
	     <S.FiltBut onClick={onSort}>
	               {state.reverse?'Minimum':'Maximum'}</S.FiltBut><br/>
	     
	     <S.Input value={state.search} 
	              onChange={onSearch} 
	              placeholder='Search By Text'/><br/>
	     <S.FiltBut onClick={resetFilt} 
	                onMouseOver={changeBorder}>Reset</S.FiltBut>
	     </S.Panel></Fade>
	     
	    <S.ShowBut onMouseOver={changeBorder}  
		           onClick={()=>setShow(!show)}>
		                 {show?'HideFilters':'ShowFilters'}</S.ShowBut>
	     </S.Container>
	}
