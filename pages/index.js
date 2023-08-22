import Head from 'next/head';
import Layout, { siteTitle } from '../comps/layout/Layout';
import utilStyles from '../styles/utils.module.css';
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
          {someData.map(({ _id, title }) => (
            <li key={_id}>
              {title}
              <br />
              {_id}
            </li>
          ))}
        </ul>
    </Layout>
  );
}
