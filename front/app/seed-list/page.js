import Image from 'next/image'
import {Pages} from '../../comps/Pages/Pages'
import {List} from '../../comps/List/List'
import {useSeedContext} from '../../context/seeds/SeedState'
import { revalidateTag } from 'next/cache'


async function anyName() {
  const allData = 
     await fetch('http://localhost:5000/seeds?', 
                            { next: { tags: ['seeds'] }})
                                            .then((res) => res.json())
      revalidateTag('seeds')
 // const someData = newData.data.map(({photo, ...rest}) => rest)
   const someData = allData.data
   const totalPages = allData.totalPages
  return  {someData, totalPages}
}

  

export default async function SeedList() {
	const {someData, totalPages} = await anyName()
	
  return (<>
     
      <Pages total={totalPages}/>
      <List servData={someData}/>
        </>
  )
}
