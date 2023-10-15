import {ItemButts} from '../../../comps/ItemButts'
import Link from 'next/link'
import {StyledLink} from './extra.styled.js'

export const dynamicParams = false
export async function generateStaticParams(){
 const items =
  await fetch('https://vite-auth-back-267a98071db5.herokuapp.com/items')
	                                          .then((res) => res.json())
	//console.log(items)                                          
	// const items = await rawData.json()
    return items.data.map((item) => ({id: item._id}))
	}
async function getItem(source) {
  
  const item = 
    await fetch(`https://vite-auth-back-267a98071db5.herokuapp.com/items/${source}`)
                                              .then((res) => res.json())
     return item}

export default async function Item({params}){
	
	const item = await getItem(params.id)
	
	return <><p>{item._id}, price - {item.price}</p>
	<ItemButts/>
	<StyledLink href={'/'}>Back To Menu</StyledLink>
	</>
	}
