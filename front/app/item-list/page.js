import Image from 'next/image'
import Link from 'next/link'
import {List} from '../../comps/List/List'
import {AddForm} from '../../comps/AddForm/AddForm'

async function anyName() {
  const allData = await fetch('http://localhost:5000/items')
                                         .then((res) => res.json())
  const someData = allData.data
   const totalPages = allData.totalPages
  return  {someData, totalPages}
}

export default async function ItemList() {
	const {someData, totalPages} = await anyName()
  return (<>
  
    <List servData={someData}/>
          <Link href={'/seed-form'}>AddSeed</Link>
  </>)}
