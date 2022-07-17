import { Heading, Tag, Image } from "@chakra-ui/react"
import Link from 'next/link'
import { motion } from 'framer-motion'
import Gradients from "../Gradients"

const ArticleList = ({title, link, tag, imgURL}) => {
    return(
        <Link passHref href={link}>
            <motion.div className="articleContainer" 
                initial={{x:-10, opacity:0}}
                animate={{x:0, opacity:1}}
            >
                <div className="articleImg" style={{"background":Gradients[Math.floor(Math.random()*30)]}}>
                    <Image src={imgURL}/>
                </div>
                <div className="tagContainer">
                <Heading size="sm">{title}</Heading>
                    {
                        tag &&
                        tag.map((data) => <Tag className="tagStyle" mt="10px" size="md" key={data} variant='solid' colorScheme='pink'>{data}</Tag>)
                    }
                </div>
            </motion.div>
        </Link>
    )
}

export default ArticleList