import React from 'react'
import styles from '../styles/Footer.module.css'
import {SiHashnode} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.iconContainer}>
        <IconContext.Provider value={{ color: "white", size:"2em"}}>
            <SiHashnode />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "white", size:"2em"}}>
            <AiFillGithub />
        </IconContext.Provider>
        </div>
        <Text mt={5} fontSize="md">Manage your reading bookmark from <span className='link'>daily.dev</span> and <span className='link'>dev.to</span></Text>
    </div>
  )
}
