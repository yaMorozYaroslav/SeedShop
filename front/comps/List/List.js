'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as S from './list.styled'
import {useSeedContext} from '../../context/seeds/SeedState'
import {useQueryContext} from '../../context/queries/QueryState'
import { usePathname } from 'next/navigation';

export function List({servData}){
	
	const pathname = usePathname()
	const isSeed = pathname === '/seed-list'
	const urlSingle = isSeed?'seeds':'items'
	
	console.log(isSeed)
	const {seeds} = useSeedContext()
	const {category} = useQueryContext()
	console.log(category)
	//console.log(seeds)
	let someData
	if(!seeds.data){someData=servData}else{someData=seeds.data}
return <S.List>
          {someData.map(item => (
             <li  key={item._id}>
               <Image alt='' src={item.photo||'./next.svg'} width={30} height={30}/>
               <Link href={`/${urlSingle}/${item._id}`}>{item.title}</Link>
              </li>
          ))}
        
        </S.List>
}
