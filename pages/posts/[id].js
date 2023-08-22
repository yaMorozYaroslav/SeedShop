import utilStyles from '../../styles/utils.module.css'
import Layout from '../../comps/layout/Layout'

import axios from 'axios'
import { remark } from 'remark'
import html from 'remark-html'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'

function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
async function getAllPostIds(){
	const posts = await axios.get(
              'https://item-auth-back-0555af6b9518.herokuapp.com/items')
	          .then((res) => res.data.items)
	return posts.map((post) => {
    return {
      params: {
        id: post._id,
      },
    }
  })
	}
async function getPostData(id){
	const posts = await axios.get(
              'https://item-auth-back-0555af6b9518.herokuapp.com/items')
	          .then((res) => res.data.items)
	const post = posts.filter(item => {
		     if (item._id === id){return item}
			 return null})
	const {photo, ...rest} = post[0]
	
	const processedContent = await remark().use(html).process(rest.description)
	const contentHtml = processedContent.toString()
	
	return {contentHtml, ...rest}
	}
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  }
}

export default function Post({postData}) {
	console.log(postData)
  return <Layout>
           <Head>
        <title>{postData.title}</title>
           </Head>
           <br/>
           <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        {postData._id}<br/>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.createdAt} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
         </Layout>
}
