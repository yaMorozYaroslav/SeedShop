import Image from 'next/image'
import Link from 'next/link'
import {Pages} from '../../comps/Pages/Pages'
import {useSeedContext} from '../../context/seeds/SeedState'

async function anyName() {
  const allData = await fetch('http://localhost:5000/seeds?page=2')
  const newData = await allData.json()

 // const someData = newData.data.map(({photo, ...rest}) => rest)
  const someData = newData.data
  //.map(item => item)
  const totalPages = newData.totalPages
  return  {someData, totalPages}
}

export default async function SeedList() {
	const {someData, totalPages} = await anyName()
	const {seeds} = useSeedContext()
  return (<>
      <Pages total={totalPages}/>
   <Link href={'/seed-form'}>AddSeed</Link>
    <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          {someData.map(item => (
            <li  key={item._id}>
            <Image alt='' src={item.photo||'./next.svg'} width={30} height={30}/>
  <Link href={`/items/${item._id}`}>{item.title}</Link>
</li>
          ))}
        
        </ul>
        </>
  )
}
