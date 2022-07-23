import React from 'react'
import styles from '../../styles/HeaderCard.module.css'
import { Button, Heading } from '@chakra-ui/react'
import ArticleCard from './ArticleCard'
// import headerImg from '../../public/'

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
                <ArticleCard title="Open Source for better career oportunity" tag={["Open Source", "GitHub", "Guide"]} imgURL="/assets/vector5.png" link="http://localhost:3000"/>
            </div>
        </div>
    </div>
  )
}

export default HeaderCard