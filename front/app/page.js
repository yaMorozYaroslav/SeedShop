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
  
        <p>Welcome to our seed store.
           More than 15 years of impeccable service. Now online</p>
          <Link className='styledLink' href={'/seed-list'}>View all seeds</Link>..
          <Link className='styledLink' href={'/item-list'}>View all products</Link>
       
  </>)
}
