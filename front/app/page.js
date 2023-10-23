import Image from 'next/image'
import Link from 'next/link'

async function anyName() {
  const allData = await fetch('http://localhost:5000/items')
  const newData = await allData.json()

  const someData = newData.data.map(({photo, ...rest}) => rest)
  return  someData
}

export default async function Main() {
	const someData = await anyName()
  return (<>
  
    <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          {someData.map(({ _id, title, date }) => (
            <li  key={_id}>
  <Link href={`/items/${_id}`}>{title}</Link>
</li>
          ))}
          
          <Link href={'/seed-form'}>AddSeed</Link>
        </ul>
  </>)
}
