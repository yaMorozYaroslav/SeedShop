'use client'
import React from 'react'
import Link from 'next/link'
import FileBase from 'react-file-base64'
import { usePathname } from 'next/navigation';
import {useSeedContext} from '../../context/seeds/SeedState'


const initialState = {title: '', description: '', price: '', 
	                  category: '', type: '', photo: ''}

const allTypes = {                  
       subVegies : ['', 'early', 'late'],
       subFlowers : ['', 'annual', 'multi-year'],
       subSeedlings : ['', 'fruit', 'vegies', 'flowers']
	   }


export function AddForm() {
	
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
    /*const currItem = items.data && items.data.find((item) => item._id === currentId)
    
    React.useEffect(()=>{
		
	       	   if(currItem)setSource(currItem)
	       	   //console.log(currItem)
								 
	       },[currItem])
	       
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
    if(source.category==='vegies'){currType = subVegies}
	if(source.category==='flowers'){currType = subFlowers}
	if(source.category==='seedlings'){currType = subSeedlings}
	
		
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	
	const changeBorder =(e)=> {
			e.target.style.border = '2px solid purple'
			setTimeout(() => e.target.style.border = null, 1000)
			}
	
	const sText = {fontSize:'24px'}
	const sInput = {fontSize:'22px', margin:'7px'}
	const sButton = {fontSize:'26px', margin:'14px', cursor: 'pointer'}
	function handSubmit(e){
		  e.preventDefault()
		  addSeed(source)
		}
	 return(
	 <section style={{'display': 'block',
		              'textAlign':'center'}}>
	 <h1 style={{'fontSize':'30px'}}>Item</h1>
	<form onSubmit={handSubmit} style={sText} ref={ref}>
	 <label>Title:</label>
	 <input name='title' 
	 value={source.title}    
	 onChange={handChange}
	 style={sInput} required/><br/>
	 
	 <label style={{marginRight: '245px'}}>Description:</label><br/>
	 <textarea name='description'
	 value={source.description} 
	 onChange={handChange}
	 style={{...sInput, height: '50px', marginLeft: '45px'} } required/><br/>
	 
	 <label>Price:</label>
	 <input name='price'
	        value={source.price}
	        onChange={e=>setSource(
				          {...source, price: Number(e.target.value)||0})}
	        style={sInput} required/>$<br/>
	 
	 <label>Category:</label>
	 <select name='category'
	         value={source.category}
	         onChange={handChange}
	         style={{...sInput, cursor: 'pointer'}}
	         >
	{categories.map(item => <option value={item}>{item}</option>)}
	 </select><br/>
	 <label>Type:</label>
	 <select name='type'
	         value={source.type}
	         onChange={handChange}
	         style={{...sInput, cursor: 'pointer'}}
	          >
	     {currType && currType.map((item,i) => 
			   <option key={i} value={item}>{item}</option>)}
	 </select><br/>
	 <label>Photo: </label>
      <FileBase          
                         type="file"
                         multiple={false}
                         onDone={({base64})=>setSource({
                            ...source, photo: base64})}/><br/>
                            
	 <button style={sButton} onMouseOver={changeBorder} type='submit'>Save</button>
	<Link href={'/'}>Back To Menu</Link>
	</form>
	 </section>
	 )
	}
