export const dynamicParams = false

export async function generateStaticParams(){
  const items = await fetch('http://localhost:5000/items?search=').then((res) => res.json())
  //const seeds = await fetch('http://localhost:5000/seeds?search=').then((res) => res.json())
  const arrItems = items.data.map((item) => ({id: item._id}))
 // const arrSeeds = seeds.data.map((seed) => ({id: seed._id}))
   // return items.data.map((item) => ({id: item._id}))
    return arrItems
	}
 async function getItem(source) {
  
   const item = await fetch(`http://localhost:5000/items/${source}`)
                                          .then((res) => res.json())
   
  // const seed = await fetch(`http://localhost:5000/seeds/${source}`)
  //                                           .then((res) => res.json())}
     return item

       }
 /*async function getSeed(source) {
  
   const seed = await fetch(`http://localhost:5000/seeds/${source}`)
                                              .then((res) => res.json())
     if(seed){return seed}
     if(!seed){return false}

       } */
export default async function Item({params}){
	
	const item = await getItem(params.id)
	
	return <><p>{item._id}, price - {item.price}</p>
	         <p>{item.title}</p>
	</>
	}
