import {ItemButts} from '../../../comps/ItemButts'
import Link from 'next/link'
import {StyledLink} from './extra.styled.js'

export const dynamicParams = false
/*export async function generateStaticParams(){
 const items =
  await fetch('https://auth-prod-back-7afcce7d449f.herokuapp.com/items')
	                                          .then((res) => res.json())
	 const items = await rawData.json()
    return items.items.map((item) => ({id: item._id}))
	}*/
async function getItem(params) {
  //console.log(params)
  const item = 
    await fetch(`https://auth-prod-back-7afcce7d449f.herokuapp.com/items/${params}`)
                                              .then((res) => res.json())
     return item}

export default async function Item({params}){
	
	const item = await getItem(params.id)
	
	return <><p>{item._id}, price - {item.price}</p>
	<ItemButts/>
	<StyledLink href={'/'}>Back To Menu</StyledLink>
	</>
	}
