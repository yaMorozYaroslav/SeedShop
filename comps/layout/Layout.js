import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import {Container, Header, BackToHome} from './Layout.styled.js';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link'
import {BoxContext} from '../../context/BoxState'


const name = 'Yaroslav Moroz alex';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
	const {state, addBox, delBox} = React.useContext(BoxContext)
	console.log(state.length)
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        {home ? (
          <>
            <Image
              priority
              src="/images/intro.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/intro.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">← Back to home</Link>
        </BackToHome>
      )}
    </Container>
  );
}
