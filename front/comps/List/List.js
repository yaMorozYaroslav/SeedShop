'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as S from './list.styled'
import {AddForm} from './AddForm/AddForm'
import {useItemContext} from '../../context/items/ItemState'
import {useSeedContext} from '../../context/seeds/SeedState'
import {useQueryContext} from '../../context/queries/QueryState'
import { usePathname } from 'next/navigation'

export function List({servData}){
	
	const pathname = usePathname()
	const isSeed = pathname === '/seed-list'
	const urlSingle = isSeed?'seeds':'items'
	
	const [open, setOpen] = React.useState(false)
	const [currItem, setCurrItem] = React.useState({})
	//console.log(currItem)
	const {items} = useItemContext()
	const {seeds} = useSeedContext()
	const {category} = useQueryContext()
	const units = !items.length?seeds:items
	
	const handEdit =(e, s)=> {e.preventDefault(); setCurrItem(s);setOpen(true)}
	
	let someData
	if(!seeds.data&&!items.data){someData=[...servData, ...units]
   }else{if(seeds.data){someData=seeds.data}else{someData=items.data}}
   console.log(servData)
   //console.log(items)
  
return <>
       <Link href={'/'}>ToMain</Link>
       
       {open?<AddForm setOpen={setOpen} 
		              currItem={currItem}
		              setCurrItem={setCurrItem}/>
		              
			:<button onClick={()=>setOpen(true)}>
			                   {!isSeed?'AddItem'
								       :'AddSeed'}</button>}
       <S.List>
          {someData.map(item => (
             <S.Cell  key={item._id}>
               <Image alt='' src={item.photo||'./next.svg'} width={100} height={100}/><br/>
               <Link href={`/${urlSingle}/${item._id}`}>{item.title}</Link>
               <p>price: {item.price}</p>
               <button onClick={(e)=>handEdit(e, item)}>Edit</button>
              </S.Cell>
          ))}
        
        </S.List>
        
       </>
} 
