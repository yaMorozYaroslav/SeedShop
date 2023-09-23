import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

async function anyName() {
  const allData = await fetch('https://auth-prod-back-7afcce7d449f.herokuapp.com/items')
  const newData = await allData.json()
  const someData = newData.items.map(({photo, ...rest}) => rest)
  return  someData
}

export default async function Home() {
	const someData = await anyName()
  return (
    <ul>
          {someData.map(({ _id, title, createdAt }) => (
            <li  key={_id}>
  <Link href={`/items/${_id}`}>{title}</Link>
</li>
          ))}
        </ul>
  )
}
