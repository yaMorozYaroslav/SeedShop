import Head from 'next/head';
import Layout, { siteTitle } from '../comps/layout/Layout';
import utilStyles from '../styles/utils.module.css';
import axios from 'axios'

export async function getStaticProps() {
  const allData = await axios.get(
              'https://item-auth-back-0555af6b9518.herokuapp.com/items')
              .then((res) => res.data.items)
  return {
    props: {
      allData
    },
  };
}

export default function Home({allData}) {
	
   //const Auto = async() => {
   //const allPostsData =  await axios.get('https://item-auth-back-0555af6b9518.herokuapp.com/items').then((res) => res.data.items)
   //console.log(allPostsData)}
   //Auto()
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
          {allData.map(({ _id, title }) => (
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
