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
	const [staticData, setStaticData] = React.useState(servData)
	//console.log(currItem)
	const {items} = useItemContext()
	const {seeds} = useSeedContext()
	const {category} = useQueryContext()
	const units = !items.length?seeds:items
	
	const handEdit =(e, s)=> {e.preventDefault(); setCurrItem(s);setOpen(true)}
	//let modServData
	function addStaticUnit(source){
		setStaticData([...staticData, source])
		}
	function delStaticUnit(e, id){
		e.preventDefault();
		setStaticData(staticData.filter((item) =>item._id !== id))
		}
	function updStaticUnit(source){
        setStaticData(staticData.map((item) => 
                     (item._id === currItem._id ? source : item)))
		}	
    console.log(items)
	let someData
	if(!seeds.data&&!items.data){someData = staticData
   }else{if(seeds.data){someData=seeds.data}else{someData=items.data}}
   //console.log(servData)
   //console.log(someData)
  
return <>
       <Link href={'/'}>ToMain</Link>
       
       {open?<AddForm setOpen={setOpen} 
		              currItem={currItem}
		              setCurrItem={setCurrItem}
		              addStaticUnit={addStaticUnit}
		              updStaticUnit={updStaticUnit} />
		              
			:<button onClick={()=>setOpen(true)}>
			                   {!isSeed?'AddItem'
								       :'AddSeed'}</button>}
       <S.List>
          {someData.map(item => (
             <S.Cell  key={item._id}>
               <Image alt='' src={item.photo&&item.photo.length?item.photo:'./next.svg'} width={100} height={100} priority={true}/><br/>
               <Link href={`/${urlSingle}/${item._id}`}>{item.title}</Link>
               <p>price: {item.price}</p>
               <button onClick={(e)=>delStaticUnit(e, item._id)}>Remove</button>
               <button onClick={(e)=>handEdit(e, item)}>Edit</button>
              </S.Cell>
          ))}
        
        </S.List>
        
       </>
} 
