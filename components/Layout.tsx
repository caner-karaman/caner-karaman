import React, { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './Header';

export const siteTitle = 'Caner Karaman'

interface LayoutProps {
  path: 'home' | 'blogs' | 'projects' | 'contact';
}

const Layout: FC<LayoutProps> = ({children, path}) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/suit.png" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header path={path}/>
      {children}
    </>
  )
}

export default Layout;