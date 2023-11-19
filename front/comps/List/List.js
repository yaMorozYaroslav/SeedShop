'use client'
import React from 'react'
import Link from 'next/link'
import * as S from './list.styled'
import {AddForm} from './AddForm/AddForm'
import {Filter} from './Filter/Filter'
import {useItemContext} from '../../context/items/ItemState'
import {useSeedContext} from '../../context/seeds/SeedState'
import {useQueryContext} from '../../context/queries/QueryState'
import {useUserContext} from '../../context/user/UserState'
import {useCartContext} from '../../context/cart/CartState'
import { usePathname } from 'next/navigation'

export function List({servData}){
	
	const pathname = usePathname()
	const isSeed = pathname === '/seed-list'
	const urlSingle = isSeed?'seeds':'items'
	
	const [open, setOpen] = React.useState(false)
	const [currItem, setCurrItem] = React.useState({})
	const [staticData, setStaticData] = React.useState(servData)
	
	const {userData} = useUserContext()
	const {cartItems, addToCart} = useCartContext()
	const {items, removeItem} = useItemContext()
	const {seeds, removeSeed} = useSeedContext()
	const {category} = useQueryContext()
	const units = !items.length?seeds:items
	
	const creator =(id)=> userData.user && (userData.user._id === id)
	
	const handEdit =(e, s)=> {e.preventDefault(); setCurrItem(s);setOpen(true)}

	function addStaticUnit(source){
     setStaticData([...staticData, {...source, id: staticData.length} ])               
		}
	function updStaticUnit(source){
     setStaticData(staticData.map((item) => 
                     (item._id === currItem._id ? source : item)))
		}	
	function delUnit(e, id){
		e.preventDefault();
		if(isSeed){removeSeed(id)}else{removeItem(id)}
		if(!seeds.data&&!items.data)setStaticData(staticData.filter((item) =>item._id !== id))
		}	
		
	let someData
	if(!seeds.data&&!items.data){someData = staticData}
    if(seeds.data && isSeed){someData=seeds.data}
    if(items.data && !isSeed){someData=items.data}
  
   if(userData.user)console.log(userData.user.role)
     //console.log(someData)
  
return (<S.Container>
       <Filter/>
       <S.StyledLink className='styledLink' href={'/'}>To Menu</S.StyledLink>
       
       {open?
		     <AddForm setOpen={setOpen} 
		              currItem={currItem}
		              setCurrItem={setCurrItem}
		              addStaticUnit={addStaticUnit}
		              updStaticUnit={updStaticUnit} />
		    :userData.user && userData.user.role === 'admin'?          
			<S.AddBut onClick={()=>setOpen(true)}>
			                   {!isSeed?'AddItem'
								       :'AddSeed'}</S.AddBut>
            : null}
          
       <S.List>
          {someData && someData.map(item => (
             <S.Cell  key={item._id}>
               <S.StyledImage alt='' src={item.photo&&item.photo.length?item.photo:'./next.svg'}
                              width={100} height={100} priority={true}/><br/>
               <S.TitleLink href={`/${urlSingle}/${item._id}`}
				             className='styledLink'>{item.title.slice(0, 15)}</S.TitleLink>
               <p>category: {item.category||'undefined'}</p>
               <p>type: {item.type||'undefined'}</p>
               <p>price: {item.price}</p>
               {creator(item.creator)
				&&<button onClick={(e)=>
					      delUnit(e, item._id)}>Remove</button>}
               <button onClick={()=>addToCart(item)}>AddToCart</button>
               <button onClick={(e)=>handEdit(e, item)}>Edit</button>
              </S.Cell>
          ))}
        
        </S.List>
        
       </S.Container>)
} 
