import Header from "../components/Header"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import DailyDev from "../components/DailyDev"
import DevCommunity from "../components/DevCommunity"
import Head from 'next/head'
import { Footer } from "../components/Footer"
import HeaderCard from "../components/cards/HeaderCard"
import Script from 'next/script'

export default function Home() {
  return (
    <div style={{"position":"relative"}}>
      <Head>
        <title>CryptoMark - Reading Bookmark Manager</title>
      </Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`} />
        <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `}
      </Script>
      <div style={{left:"-200px",top:"-200px"}} className="gradient"/>
      <div style={{left:"60%",top:"20%"}} className="gradient"/>
      <div style={{left:"20%",top:"60%"}} className="gradient"/>
      <div style={{"position":"relative","zIndex":"2"}}>
        <Header primary="home"/>
        <HeaderCard />
        <Tabs colorScheme="blue" className="container" variant='soft-rounded' _focus={{outline:"none"}} _active={{outline:"none"}}>
          <TabList>
            <Tab color='' _focus={{outline:"none"}} className="tabButton">daily.dev</Tab>
            <Tab _focus={{outline:"none"}}>dev.to</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><DailyDev /></TabPanel>
            <TabPanel><DevCommunity /></TabPanel>
          </TabPanels>
        </Tabs>
        <Footer />
      </div>
    </div>
  )
}
