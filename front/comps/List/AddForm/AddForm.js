'use client'
import React from 'react'
import Link from 'next/link'
import FileBase from 'react-file-base64'
import { usePathname } from 'next/navigation';
import {useSeedContext} from '../../../context/seeds/SeedState'
import {useItemContext} from '../../../context/items/ItemState'
import * as S from './add-form.styled'

const initialState = {title: '', description: '', price: '', 
	                  category: '', type: '', photo: ''}

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
			  }

export function AddForm({setOpen, currItem}) {
	
	const pathname = usePathname()
	const isSeed = pathname === '/seed-list'
	//const urlSingle = isSeed?'seeds':'items'
	
	const {addSeed} = useSeedContext()
	//const {items, addSeed, updateSeed} = React.useContext(ItemContext)
	
	const ref = React.useRef()
	const [source, setSource] = React.useState(initialState)
   
    let categories
    if(!isSeed){ categories = ['', 'flowers', 'vegies', 'seedlings']
	}else{categories = ['', 'soils', 'supplements', 'equipment']}
    //const currItem = items.data && items.data.find((item) => item._id === currentId)
    
    React.useEffect(()=>{
		
	       	   if(currItem._id)setSource(currItem)
								 
	       },[currItem])
	 /*      
    const reset =()=> {	
		//setCurrentId(null)
		setSource(initialState)
		ref.current.reset()
		}
		
	const handSubmit =(e)=> {
		e.preventDefault()
	   if(!currentId){addItem(source)			           
	   }else{updateItem(currentId, source)}
			 reset()
		     closeItemForm()

		     setTimeout(() => {
					alert('Element has been '+
	                      (!currentId?'added.':'updated.'))},1000)
		        }
		       */ 
     let currType
	{categories.map((item,i) => {
		            if(source.category===item&&item.length){
						           currType = Object.values(
		                           !isSeed?seedTypes:itemTypes)[isSeed?i:i-1]}})}
   
	
		
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	
	const changeBorder =(e)=> {
			e.target.style.border = '2px solid purple'
			setTimeout(() => e.target.style.border = null, 1000)
			}
	
	function handSubmit(e){
		  e.preventDefault()
		  addSeed(source)
		}
		
	 return(
	 <S.Container>
	 
	 <S.Title>{isSeed?'Item':'Seed'}</S.Title>
	<S.Form onSubmit={handSubmit} ref={ref}>
	
	 <label>Title:</label>
	 <S.Input name='title' 
	          value={source.title}    
	          onChange={handChange}
	                     required/><br/>
	 
	 <label>Description:</label><br/>
	 <S.Textarea name='description'
	              value={source.description} 
	              onChange={handChange}
	                              required/><br/>
	 
	 <label>Price:</label>
	 <S.Input name='price'
	        value={source.price}
	        onChange={e=>setSource(
				          {...source,
						   price: Number(e.target.value)||0})}
	                                               required/>$<br/>
	 
	 <label>Category:</label>
	 <S.Category name='category'
	         value={source.category}
	         onChange={handChange} >
	{categories.map((item, i) => <option key={i} value={item}>{item}</option>)}
	 </S.Category><br/>
	 
	 <label>Type:</label>
	 <S.Category name='type'
	         value={source.type}
	         onChange={handChange}
	          >
	     {currType && currType.map((item,i) => 
			   <option key={i} value={item}>{item}</option>)}
	 </S.Category><br/>
	
	  <div className='file-base'>
	   <label>Photo: </label>
      <FileBase          
                         type="file"
                         multiple={false}
                         onDone={({base64})=>setSource({
                            ...source, photo: base64})}/><br/></div>
                            
	     <S.Submit onMouseOver={changeBorder} type='submit'>Save</S.Submit>
	     <S.Close onMouseOver={changeBorder} 
	              onClick={()=>setOpen(false)}>CloseForm</S.Close>
	
	   </S.Form>
	 </S.Container>
	 )
	}
