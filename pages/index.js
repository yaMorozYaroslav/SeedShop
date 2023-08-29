import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
//import {Data} from './posts/[id]'
import { parseISO, format } from 'date-fns'
import axios from 'axios'

export async function getStaticProps() {
  const allData = await axios.get(
              'https://item-auth-back-0555af6b9518.herokuapp.com/items')
              .then((res) => res.data.items)
  const someData = allData.map(({photo, ...rest}) => rest)
  return {
    props: {
      someData
    },
  };
}

export default function Home({someData}) {
	async function getAllPostIds(){

	return someData.map((fileName) => {
    return {
      params: {
        id: fileName._id.replace(/\.md$/, ''),
      },
    }
  })
	}
   //console.log(someData)
 function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
} 
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <ul>
          {someData.map(({ _id, title, createdAt }) => (
            <li className={utilStyles.listItem} key={_id}>
  <Link href={`/posts/${_id}`}>{title}</Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={createdAt} />
  </small>
</li>
          ))}
        </ul>
    </Layout>
  );
}
