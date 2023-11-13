import {Single} from '../../../comps/Single/Single'

export const dynamicParams = false

export async function generateStaticParams(){
  const items = await fetch('http://localhost:5000/items?search=')
                                        .then((res) => res.json())
  const arrItems = items.data.map((item) => ({id: item._id}))
    return arrItems
	}
 async function getItem(source) {
  
   const item = await fetch(`http://localhost:5000/items/${source}`)
                                          .then((res) => res.json())
   return item

       }
export default async function Item({params}){
	
	const item = await getItem(params.id)
	
	return <Single unit={item} text='item-list'/>
	}
