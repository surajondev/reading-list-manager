import styles from '../styles/Header.module.css'
import { Heading } from '@chakra-ui/react'
import { ConnectWallet } from './thirdweb/ConnectWallet'

const Header = ({primary}) => {
    const primarySelector = (selector) => {
        if(selector == primary){
            return styles.primary
        }else{
            return styles.headerItem
        }
    }
    return(
        <div className={styles.container}>
            <Heading mt={4} size="lg">Crypto<span style={{"color":"#1E50FF"}}>Mark</span></Heading>
            <li className={styles.headerMenu}>
                <ul className={primarySelector("home")}>Home</ul>
                <ul className={primarySelector("discover")}>Discover</ul>
                <ul className={primarySelector("blog")}>Blog</ul>
                <ul className={primarySelector("docs")}>Docs</ul>
            </li>
            <div className={styles.iconContainer}>
                <ConnectWallet />
            </div>
        </div>
    )
}

export default Header