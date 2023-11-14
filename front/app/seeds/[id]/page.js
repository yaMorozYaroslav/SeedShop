import {Single} from '../../../comps/Single/Single'

export const dynamicParams = true
import { revalidateTag } from 'next/cache'

export async function generateStaticParams(){
  const seeds = await fetch('http://localhost:5000/seeds?search=')
                                        .then((res) => res.json())
  const arrSeeds = seeds.data.map((seed) => ({id: seed._id}))
    return  arrSeeds
	}
       async function getSeed(source) {
  
   const seed = fetch(`http://localhost:5000/seeds/${source}`, 
                            { next: { tags: ['seed'] }})
                                            .then((res) => res.json())
      revalidateTag('seed')
   return seed

       }
 
export default async function Seed({params}){

	const seed = await getSeed(params.id)
	
	return <Single unit={seed} text='seed-list'/>
	}
