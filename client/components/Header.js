import styles from '../styles/Header.module.css'
import { Heading } from '@chakra-ui/react'
import { ConnectWallet } from './thirdweb/ConnectWallet'
import Link from 'next/link'

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
                <Link href='/'>
                    <ul className={primarySelector("home")}>
                        Home
                    </ul>
                </Link>
                <Link href='/docs'>
                    <ul className={primarySelector("docs")}>
                        Guide
                    </ul>
                </Link>
            </li>
            <div className={styles.iconContainer}>
                <ConnectWallet />
            </div>
        </div>
    )
}

export default Header