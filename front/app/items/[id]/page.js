import {Single} from '../../../comps/Single/Single'
import { revalidateTag } from 'next/cache'

export const dynamicParams = true

export async function generateStaticParams(){
  const items = await fetch(
    'https://seed-shop-back-78049b8c30bb.herokuapp.com/items?search=')
                                        .then((res) => res.json())
  const arrItems = items.data.map((item) => ({id: item._id}))
    return arrItems
	}
 async function getItem(source) {
  
   const item = await fetch(
    `https://seed-shop-back-78049b8c30bb.herokuapp.com/items/${source}`) 
                            //~ { next: { tags: ['item'] }})
                                            .then((res) => res.json())
      //~ revalidateTag('item')
   return item

       }
export default async function Item({params}){
	
	const item = await getItem(params.id)
	
	return <Single unit={item} text='item-list'/>
	}
