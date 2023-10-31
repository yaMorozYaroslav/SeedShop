'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as S from './list.styled'
import {AddForm} from './AddForm/AddForm'
import {useSeedContext} from '../../context/seeds/SeedState'
import {useQueryContext} from '../../context/queries/QueryState'
import { usePathname } from 'next/navigation';

export function List({servData}){
	
	const pathname = usePathname()
	const isSeed = pathname === '/seed-list'
	const urlSingle = isSeed?'seeds':'items'
	
	const [open, setOpen] = React.useState(false)
	const [currItem, setCurrItem] = React.useState({})
	console.log(currItem)
	const {seeds} = useSeedContext()
	const {category} = useQueryContext()
	
	const handEdit =(e, s)=> {e.preventDefault(); setCurrItem(s);setOpen(true)}
	
	let someData
	if(!seeds.data){someData=servData}else{someData=seeds.data}
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
             <li  key={item._id}>
               <Image alt='' src={item.photo||'./next.svg'} width={30} height={30}/>
               <Link href={`/${urlSingle}/${item._id}`}>{item.title}</Link>
               <button onClick={(e)=>handEdit(e, item)}>Edit</button>
              </li>
          ))}
        
        </S.List>
        
       </>
} 
