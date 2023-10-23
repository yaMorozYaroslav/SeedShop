import Image from 'next/image'
import Link from 'next/link'
import {Pages} from '../../comps/Pages/Pages'
import {List} from '../../comps/List/List'
import {useSeedContext} from '../../context/seeds/SeedState'

async function anyName() {
  const allData = 
     await fetch('http://localhost:5000/seeds?category=&type=&page=1')
                                              .then((res) => res.json())

 // const someData = newData.data.map(({photo, ...rest}) => rest)
  const someData = allData.data
  //.map(item => item)
  const totalPages = allData.totalPages
  return  {someData, totalPages}
}

export default async function SeedList() {
	const {someData, totalPages} = await anyName()
	//const {seeds} = useSeedContext()
  return (<>
      <Pages total={totalPages}/>
   <Link href={'/seed-form'}>AddSeed</Link>
    <List servData={someData}/>
        </>
  )
}
