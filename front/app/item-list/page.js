//import Image from 'next/image'
//import Link from 'next/link'
import {List} from '../../comps/List/List'
import {Pages} from '../../comps/Pages/Pages'

async function anyName() {
  const allData = await fetch('http://localhost:5000/items?')
                                         .then((res) => res.json())
  const someData = allData.data
   const totalPages = allData.totalPages
  return  {someData, totalPages}
}

export default async function ItemList() {
	const {someData, totalPages} = await anyName()
  return (<>
    <Pages total={totalPages}/>
    <List servData={someData}/>
  </>)}
