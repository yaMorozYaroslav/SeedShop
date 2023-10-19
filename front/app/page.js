import Image from 'next/image'
//import styles from './page.module.css'
import Link from 'next/link'

async function anyName() {
  const allData = await fetch('https://vite-auth-back-267a98071db5.herokuapp.com/items')
  const newData = await allData.json()
  //console.log(newData)
  const someData = newData.data.map(({photo, ...rest}) => rest)
  return  someData
}

export default async function Home() {
	const someData = await anyName()
  return (
    <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          {someData.map(({ _id, title, date }) => (
            <li  key={_id}>
  <Link href={`/items/${_id}`}>{title}</Link>
</li>
          ))}
          
          <Link href={'/seed-form'}>AddSeed</Link>
        </ul>
  )
}
