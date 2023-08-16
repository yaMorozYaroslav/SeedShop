import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <>
      <Head><title>First Post</title></Head>
      <h1>First Post</h1>
      <Image width={100} height={100} src='/images/intro.jpg' alt=''/>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}
