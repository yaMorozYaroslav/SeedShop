'use client'

import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../comps/layout/Layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
//import {Data} from './posts/[id]'
import { parseISO, format } from 'date-fns'
import axios from 'axios'

export async function everyName(){
	const posts = await fetch('https://item-auth-back-0555af6b9518.herokuapp.com/items')
	const newPosts = await posts.json()
	//console.log(posts)
	return newPosts.items.map((post) => {id: post._id.toString()})
	}
/*
async function generateStaticParams(){
	const posts = await fetch(
              'https://item-auth-back-0555af6b9518.herokuapp.com/items')
	const newPosts = await posts.json()
	//console.log(posts)
	return posts.map((post) => {
    return {id: post._id}
    
  })
	}
async function getPost(params){
	const posts = await fetch(
              'https://item-auth-back-0555af6b9518.herokuapp.com/items')
	          .then((res) => res.json())
	console.log(posts)    
	const post = posts.filter(item => {
		     if (item._id === params.id){return item}
			 return null})
	const {photo, ...rest} = post[0]
	
	//const processedContent = await remark().use(html).process(rest.description)
	//const contentHtml = processedContent.toString()
	//console.log(rest)
	return {...rest}
	} */

export async function anyName() {
  const allData = await fetch('https://item-auth-back-0555af6b9518.herokuapp.com/items')
  const newData = await allData.json()
  const someData = newData.items.map(({photo, ...rest}) => rest)
  return  someData
}

export default async function Home() {
	const dataIds = await everyName()
	const data = await anyName()
	console.log(data)
	console.log(dataIds)
	
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
          {data.map(({ _id, title, createdAt }) => (
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
