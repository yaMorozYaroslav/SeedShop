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
	const [shown, setShown] = React.useState(servData)
	const [currItem, setCurrItem] = React.useState({})
	const [staticData, setStaticData] = React.useState(servData)
	
	const {userData} = useUserContext()
	const {cartItems, addToCart} = useCartContext()
	const {items, removeItem} = useItemContext()
	const {seeds, removeSeed} = useSeedContext()
	const {category} = useQueryContext()
	const units = !items.length?seeds:items
	
	const creator =(id)=> userData.user && (userData.user._id === id)
	const admin = userData.user && userData.user.role === 'admin'
	//~ console.log(admin)
	const handAdd =(e, s)=> {e.preventDefault();addToCart(s);}
	
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

   React.useEffect(()=>{ if(seeds.data && isSeed){setShown(seeds.data)}
	                    if(items.data && !isSeed){setShown(items.data)}
	                   },[items, seeds])
  
return (<S.Container>
      <S.ListButts>
        <Filter/>
        {admin &&       
			<S.AddAdmin onClick={()=>setOpen(true)}>
			                   {!isSeed?'AddItem'
								       :'AddSeed'}</S.AddAdmin>}
        <S.StyledLink className='styledLink' href={'/'}>Menu</S.StyledLink>
      < /S.ListButts>    
       {open &&
		     <AddForm setOpen={setOpen} 
		              currItem={currItem}
		              setCurrItem={setCurrItem}
		              addStaticUnit={addStaticUnit}
		              updStaticUnit={updStaticUnit} />}
          
       <S.List>
          {shown && !shown.length&&<S.NoData>No products found for this request</S.NoData>}
          {shown && shown.map(item => (
             <S.Cell  key={item._id}>
               <S.StyledImage alt='' src={item.photo&&item.photo.length?item.photo:'./next.svg'}
                              width={100} height={100} priority={true}/><br/>
               <S.TitleLink href={`/${urlSingle}/${item._id}`}
				             className='styledLink'>{item.title.slice(0, 12)}</S.TitleLink>
               <S.Parag>category: {item.category||'undefined'}</S.Parag>
               <S.Parag>type: {item.type||'undefined'}</S.Parag>
               <S.Parag>price: {item.price}</S.Parag>
               
               <S.AddButt onClick={(e)=>handAdd(e,item)}>AddToCart</S.AddButt><br/>
               {(creator(item.creator)||admin)
				&&<><S.AddButt onClick={(e)=>
					      delUnit(e, item._id)}>Remove</S.AddButt>
				  <S.AddButt onClick={(e)=>handEdit(e, item)}>Edit</S.AddButt></>}
               
              </S.Cell>
          ))}
        
        </S.List>
        
       </S.Container>)
} 
