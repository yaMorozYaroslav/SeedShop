import {StyledLink} from './extra.styled.js'

export const dynamicParams = false

export async function generateStaticParams(){
  const items = await fetch('http://localhost:5000/items?search=').then((res) => res.json())
  const seeds = await fetch('http://localhost:5000/seeds?search=').then((res) => res.json())
    return items.data.map((item) => ({id: item._id}))
	}
async function getItem(source) {
  
  const item = 
    await fetch(`http://localhost:5000/items/${source}`)
                                              .then((res) => res.json())
     return item}

export default async function Item({params}){
	
	const item = await getItem(params.id)
	
	return <><p>{item._id}, price - {item.price}</p>
	
	<StyledLink href={'/'}>Back To Menu</StyledLink>
	</>
	}
