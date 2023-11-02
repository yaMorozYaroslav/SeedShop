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

export function AddForm({setOpen, currItem, setCurrItem}) {
	
	const pathname = usePathname()
	const isSeed = pathname === '/seed-list'
	//const urlSingle = isSeed?'seeds':'items'
	
	const {addSeed, updateSeed} = useSeedContext()
	const {addItem, updateItem} = useItemContext()
	
	const ref = React.useRef()
	const [source, setSource] = React.useState(initialState)
   
    let categories
    if(isSeed){ categories = ['', 'flowers', 'vegies', 'seedlings']
	}else{categories = ['', 'soils', 'supplements', 'equipment']}
    
    React.useEffect(()=>{
		
	       	   if(currItem._id)setSource(currItem)
	       
	       },[currItem])
	 /*  comments    */
    const reset =()=> {	
		setCurrItem({})
		setSource(initialState)
		ref.current.reset()
		}
		
		       
     let currType
	{categories.map((item,i) => {
		            if(source.category===item&&item.length){
						           currType = Object.values(
		                           !isSeed?itemTypes:seedTypes)[isSeed?i:i-1]}})}
   
	
		
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	
	const changeBorder =(e)=> {
			e.target.style.border = '2px solid purple'
			setTimeout(() => e.target.style.border = null, 1000)
			}
	
	const handClose =(e)=> {e.preventDefault();setOpen(false);}
	const handSubmit =(e)=> {
		e.preventDefault()
	if(isSeed){
	   if(!source._id){addSeed(source)			           
	  }else{updateSeed(source._id, source)}
			 
   }else{
       if(!source._id){addItem(source)			           
	  }else{updateItem(source._id, source)}
        }
        reset()
	    setOpen(false)
		     setTimeout(() => {
					alert('Element has been '+
	                      (!source._id?'added.':'updated.'))},1000)
		        }
	
	//const handSubmit =(e)=> {e.preventDefault();updateSeed(currItem._id, source);}
    //console.log(currItem._id)
	 return(
	 <S.Container>
	 
	 <S.Title>{!isSeed?'Item':'Seed'}</S.Title>
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
	              onClick={handClose}>CloseForm</S.Close>
	
	   </S.Form>
	 </S.Container>
	 )
	}
