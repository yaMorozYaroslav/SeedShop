import React from 'react'
import { usePathname } from 'next/navigation';
import {useQueryContext} from '../../context/queries/QueryState'
import {useItemContext} from '../../context/items/ItemState'
import {useSeedContext} from '../../context/seeds/SeedState'

export const Filter =(props)=> {
	
const seedTypes = {                  
       subVegies : ['', 'early', 'late'],
       subFlowers : ['', 'annual', 'multi-year'],
       subSeedlings : ['', 'fruit', 'vegies', 'flowers']
	   }
const itemTypes = {
	   subSeed : ['', 'flowers', 'veggies', 'herbs', 'seedlings'],
       subSoil : ['', 'for flowers','for veggies', 'for fruit'],
       subSupplements : ['', 'fertilizers', 'pesticides', 'other'],
       subEquipment : ['', 'gloves','tools','gear']
       
	const pathname = usePathname()
	const isSeed = pathname === '/seed-list'
	
	const [show, setShow] = React.useState(false)
	
	const {state, category, type, search,
		  reverse, setCategory, setType, 
		  setSearch,setReverse, reset} = useQueryContext()
		           
	const {items, fetchItems} = useItemContext()
	const {seeds, fetchSeeds} = useSeedContext()
	const fetchUnits = () => isSeed?fetchSeeds:fetchItems
	
	
	let categories
    if(!isSeed){ categories = ['', 'flowers', 'vegies', 'seedlings']
	}else{categories = ['', 'soils', 'supplements', 'equipment']}
	
	  let currType
	{categories.map((item,i) => {
		            if(source.category===item&&item.length){
						           currType = Object.values(
		                           !isSeed?seedTypes:itemTypes)[isSeed?i:i-1]}})}
	
	const onSort =()=> {
		               setReverse(!reverse)
		               fetchItems(category, type, 1, search, !reverse)
		               }
	
	const resetFilt =()=> {
		reset()
		fetchItems('', '', 1, '', true)
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
			
		const text = {'fontSize':'23px', 'margin': '4px',
			           border: '2px solid white', 'cursor':'pointer'}
		
	return <div style={{marginLeft:'20px'}}> {show && <div>
		 <button onMouseOver={changeBorder} 
		         style={{...text, 'cursor':'pointer'}} 
		         onClick={()=>setShow(false)}>HideFilters</button>
		         
		  <label style={{'fontSize':'30px', 'color':'purple'}}>
		                                              Category</label>
		 <select value={category} 
		        style={{...text, 'cursor':'pointer'}}
		        onChange={onCategory}>
		        
	       <option value=''>all</option>
	       <option value='seeds'>seeds</option>
	       <option value='soils'>soils</option>
	       <option value='supplements'>supplements</option>
	       <option value='equipment'>equipment</option>
	     </select>
	     
	       <label style={{'fontSize':'30px', 'color':'darkblue'}}>Type</label>
	     <select name='type'
	         value={state.itemType}
	         onChange={onType}
	         style={{...text, 'cursor':'pointer'}}
	         required >
	     {currType && currType.map((item,i) => 
			   <option key={i}
				    value={item}>{!item?'all':item}</option>)}
	 </select><br/>
	     <label>Sort By Price</label>
	     <button style={text} disabled={minPrice}
	             onClick={onSort}>Minimum</button>
	     <button style={text} disabled={maxPrice}
	             onClick={onSort}>Maximum</button>
	     
	     <input style={{...text, cursor:'se-resize'}} value={state.itemSearch} 
	            onChange={onSearch} placeholder='Search By Title'/>
	     <button onClick={resetFilt} onMouseOver={changeBorder}
	             style={{...text, 'cursor':'pointer'}}>Reset</button>
	     </div>}
	     {!show && !single && <button onMouseOver={changeBorder} 
			        style={{...text, 'cursor':'pointer'}} 
			           onClick={()=>setShow(true)}>ShowFilters</button>}
	     </div>
	}
