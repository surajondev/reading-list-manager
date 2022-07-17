import React, {useState} from 'react'
import ReactPaginate from 'react-paginate'
import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai'
import { IconContext } from "react-icons";
import ArticleList from './cards/ArtilceCard'
import {Grid} from '@chakra-ui/react';
import {motion} from 'framer-motion'
import {InputContainer} from './mini-compnents/InputContainer';

export const ArticleContainer = ({nestData, data}) => {
    const [searchStr, setSearchStr] = useState()
    const [page, setPage] = useState(0)
    return (
    <div>
        <InputContainer 
            width="60%"  
            onChange={(event) => setSearchStr(event.target.value)} 
            placeholder="Search Bookmark"
        />
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {
                nestData.length > 0 && !searchStr &&
                nestData[page].map((data) => {
                const tag =  data.article.tags
                return <ArticleList imgURL={data.imgURL}  key={data.article.url} title={data.article.title} link={data.article.url} tag={tag.split(',')}/>
                })
            }
            {
                data && searchStr &&
                data.filter((element) => {
                const titleLower = element.article.title.toLowerCase()
                const str = searchStr.toLowerCase()
               if(titleLower.includes(str)){
                    return element
                }
                }).map((filterElement) => {
                const tag =  filterElement.article.tags
                    return <ArticleList imgURL={filterElement.imgURL}  key={filterElement.article.url} title={filterElement.article.title} link={filterElement.article.url} tag={tag.split(',')}/>
                })
            }
        </Grid>
        {
            nestData.length == 0 && !data &&
            <div className='loader-container'>
                <motion.div
                    animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{
                    duration: 2,
                    ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                    className="loader"
                />
            </div>
        }
        {
            nestData.length > 0 && !searchStr &&
            <ReactPaginate
                    containerClassName={'pagination'}
                    breakLabel="..."
                    nextLabel={
                        <IconContext.Provider value={{ color: "#B8C1CC", size:"36px" }}>
                            <AiFillRightCircle />
                        </IconContext.Provider>
                    }
                    onPageChange={(event) => setPage(event.selected)}
                    pageRangeDisplayed={5}
                    pageCount={nestData.length}
                    previousLabel={
                        <IconContext.Provider value={{ color: "#B8C1CC", size:"36px" }}>
                            <AiFillLeftCircle />
                        </IconContext.Provider>
                    }
                    renderOnZeroPageCount={null}
                    activeClassName={'active'}
                    nextClassName={'next-label'}
                    breakClassName={'break-label'}
                    pageClassName={'page-item'}
                    previousClassName={'previous-label'}
                />
        }
    </div>
  )
}
