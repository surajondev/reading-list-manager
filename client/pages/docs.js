import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import { Heading, Image, VStack } from '@chakra-ui/react'
import styles from '../styles/Docs.module.css'

const Docs = () => {
  return (
    <div style={{"position":"relative"}}>
        <Head>
            <title>CryptoMark - Reading Bookmark Manager</title>
        </Head>
        <div style={{left:"-200px",top:"-200px"}} className="gradient"/>
        <div style={{left:"60%",top:"20%"}} className="gradient"/>
        <div style={{left:"20%",top:"60%"}} className="gradient"/>
        <div style={{"position":"relative","zIndex":"2"}}>
        <Header primary="docs"/>
        <div className={styles.container}>
            <Heading>Bookmark manager for dev.to and daily.dev</Heading>
            <div className={styles.imgContainer}>
                <Image src="/thumbnail.png"/>
            </div>
            <VStack spacing={5} align='left'>
                <Heading size='lg'>Introduction</Heading>
                <p className={styles.content}>We have a variety of tech blogging platforms such as Hashnode, dev.to, medium, daily.dev, and others. Everyone platform stands out in the crowd having special features. As a reader and creator, I have accounts on all the platforms, where I read and create content.</p>
                <p className={styles.content}>While reading content on these websites, I create a reading list/bookmarks to read articles later or some articles that I would love to re-visit again. Creating bookmarks on all these platforms is easy but managing it can be a hectic job to do. Managing bookmark/reading list such as removing articles, and finding articles from the various platform.</p>
                <Heading size='lg'>Using the CryptoMark</Heading>
                <Heading size='md'>daily.dev</Heading>
                <p className={styles.content}>For enabling the daily.dev, you need the shareable bookmark link. You can get it from app.daily.dev. Under the bookmark section, click on Share bookmark to open the Bookmarks sharing features. You need to enable the public sharing option. After enabling it, you have the URL for sharing the bookmark. The URL will have the latest 20 bookmakers in the XML format.</p>
                <Image src="https://cdn.hashnode.com/res/hashnode/image/upload/v1659332191161/9eg_4GPES.png?auto=compress,format&format=webp" layout="fit"/>
            </VStack>
        </div>
        <Footer />
        </div>
    </div>
  )
}

export default Docs