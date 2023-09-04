//'use client'

import React from 'react'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../comps/layout/Layout'

import axios from 'axios'
import { remark } from 'remark'
import html from 'remark-html'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'

const Date = ({ dateString })=> {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
export async function generateStaticParams(){
	const posts = await fetch(
              'https://item-auth-back-0555af6b9518.herokuapp.com/items')
	          .then((res) => res.json())
	return posts.map((post) => {id: post._id.toString()})
	}
async function getPostData(params){
	const posts = await fetch(
              'https://item-auth-back-0555af6b9518.herokuapp.com/items')
	          .then((res) => res.json())
	const post = posts.filter(item => {
		     if (item._id === params.id){return item}
			 return null})
	console.log(post)
	const {photo, ...rest} = post[0]
	
	const processedContent = await remark().use(html).process(rest.description)
	const contentHtml = processedContent.toString()
	
	return {contentHtml, ...rest}
	}


export default async function Post({params}) {
	console.log(params)
	postData = await getPostData(params)
	//console.log(postData)
  return <Layout>
           <Head>
        <title>{postData.title}</title>
           </Head>
           <br/>
           <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        {postData._id}<br/>
        <div className={utilStyles.lightText}>
          <Date dateString = {postData.createdAt} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
         </Layout>
}
