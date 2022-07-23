import {Button} from '@chakra-ui/react'
import styles from '../styles/DailyDev.module.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import { useAddress } from '@thirdweb-dev/react'
import { ArticleContainer } from './ArticleContainer'
import {InputContainer} from './mini-compnents/InputContainer'
import Toastify from './mini-compnents/Toastify'

const DailyDev = () => {
    const BACKEND = process.env.BACKEND
    const [submit, setSubmit] = useState(false)
    const [url, setUrl] = useState()
    const [data, setData] = useState()
    const [nestData, setNestData] = useState([])
    const [toastify, setToastify] = useState('data')
    const address = useAddress();

    useEffect(() => {
        if(address){
            axios.post(`${BACKEND}/dbFind`, {
                "public_key":address,
                "src":"daily_dev"
            })
            .then(async (response) => {
                if(response.data != "null"){
                    setUrl(response.data)
                    if(url != undefined){
                        handleSubmit();
                    }
                }
            })
        }
    }, [address, url])
    
    const handleSubmit = () => {
        setSubmit(true)
        if(address && url){
            axios.post(`${BACKEND}/db`, {
                "public_key":address,
                "daily_dev":url
            })
            .then((response) => {
                console.log(response.data)
            })
        }
        axios.post(`${BACKEND}/dailydev`, {
            "url":url
        })
        .then((response) => {
            if(response.data.error){
                setSubmit(false)
                setToastify(response.data.error)
            }else{
                setToastify('')
                let newData = response.data
                newData.map((data, i) => {
                    const f = Math.floor(Math.random() * 31);
                        if(f==0){
                            f=f+1;
                        }
                        data.imgURL = `/assets/vector${f}.png`
                })
                setData(newData)
                    let demoArr = []
                    for(let i=0;i<=newData.length/20;i++){
                        let arrData = []
                        if(i==newData.legth/20){
                            arrData = newData.slice(i*20, i*20 + (newData.legth%20))
                        }else{
                            arrData = newData.slice(i*20, 20*(i+1))
                        }
                        demoArr.push(arrData)
                    }
                    setNestData(demoArr)
            }
        })

    }

    return(
        <div>
            {
                !submit && toastify &&
                <div className={styles.inputContainer}>
                    {/* <Input onChange={(event) => setUrl(event.target.value)} placeholder='Enter Shareable RSS Feed Link' width="35em"></Input> */}
                    <InputContainer 
                        width="60%"  
                        onChange={(event) => setUrl(event.target.value)} 
                        placeholder="Enter Shareable RSS Feed Link"
                    />
                    <Button className={styles.button} onClick={handleSubmit} colorScheme="pink">Search</Button>
                    {
                        toastify && toastify!=='data' &&
                        <Toastify data={toastify} />
                    }
                </div>
            }

            { 
                submit && !toastify &&
                <ArticleContainer nestData={nestData} data={data} />
            }
        </div>
    )
}

export default DailyDev