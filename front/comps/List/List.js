'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as S from './list.styled'
import {useSeedContext} from '../../context/seeds/SeedState'


export function List({servData}){
	const {seeds} = useSeedContext()
	console.log(seeds)
	let someData
	if(!seeds.data){someData=servData}else{someData=seeds.data}
return <S.List>
          {someData.map(item => (
             <li  key={item._id}>
               <Image alt='' src={item.photo||'./next.svg'} width={30} height={30}/>
               <Link href={`/items/${item._id}`}>{item.title}</Link>
              </li>
          ))}
        
        </S.List>
}
