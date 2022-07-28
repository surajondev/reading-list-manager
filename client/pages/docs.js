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
                <p className={styles.content}>As a developer, we have variety of platform to read article from such as dialy.dev, dev.to and Hashnode</p>
            </VStack>
        </div>
        <Footer />
        </div>
    </div>
  )
}

export default Docs
