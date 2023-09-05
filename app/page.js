import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

async function anyName() {
  const allData = await fetch('https://item-auth-back-0555af6b9518.herokuapp.com/items')
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
  <Link href={`/posts/${_id}`}>{title}</Link>
</li>
          ))}
        </ul>
  )
}
