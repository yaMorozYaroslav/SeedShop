import {List} from '../../comps/List/List'
import {Pages} from '../../comps/Pages/Pages'
import { revalidateTag } from 'next/cache'

async function anyName() {
  const allData = 
        await fetch('http://localhost:5000/items?search=', 
                                 { next: { tags: ['items'] }})
                                         .then((res) => res.json())
    revalidateTag('items')
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
