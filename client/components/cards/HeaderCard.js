import React from 'react'
import styles from '../../styles/HeaderCard.module.css'
import { Button, Heading, Image } from '@chakra-ui/react'
import ArticleCard from './ArticleCard'
import {FaDev} from 'react-icons/fa'
import {SiHashnode} from 'react-icons/si'
import {BsMedium} from 'react-icons/bs'
import { IconContext } from 'react-icons'

const HeaderCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.cardContainer}>
            <div >
                <Heading size="lg">Manage Reading list bookmark from differnt platform at one place</Heading>
                <p style={{color:"#ADB9C7", marginTop:"1em"}}>When an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.
                </p>
                <Button mt={5} colorScheme="pink">Try Yourself!</Button>
            </div>
            <div style={{marginLeft:"5em",display:"flex"}}>
                <ArticleCard title="Open Source for better career oportunity" tag={["Open Source", "GitHub", "Guide"]} imgURL="/assets/vector5.png" link='/'/>
            </div>
        </div>
        <div className={styles.iconContainer}>
            <div className={styles.devtoContainer}>
                <IconContext.Provider value={{ color: "white", size:"2.5em", className:"devtoContainer" }}>
                    <FaDev />
                </IconContext.Provider>
                <Heading ml={1} size="lg">Practical Dev</Heading>
            </div>
            <div className={styles.devtoContainer}>
                <Image src='/dailydev.png' height="3.5em"/>
                <Heading size="lg">Daily Dev</Heading>
            </div>
            <div className={styles.devtoContainer}>
                <IconContext.Provider value={{ color: "#2962FF", size:"2.5em" }}>
                    <SiHashnode />
                </IconContext.Provider>
                <Heading ml={1} size="lg">Hashnode</Heading>
            </div>
            <div className={styles.devtoContainer}>
                <IconContext.Provider value={{ color: "white", size:"2.5em" }}>
                    <BsMedium />
                </IconContext.Provider>
                <Heading ml={1} size="lg">Medium</Heading>
            </div>
        </div>
    </div>
  )
}

export default HeaderCard