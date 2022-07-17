import { Input, Button, Grid, GridItem } from '@chakra-ui/react'
import styles from '../styles/DailyDev.module.css'
import { useState, useEffect } from "react"
import axios from 'axios'
import { useAddress } from '@thirdweb-dev/react'
import { ArticleContainer } from './ArticleContainer'
import InputContainer from './mini-compnents/InputContainer'

const DevCommunity = () => {
    const [submit, setSubmit] = useState(false)
    const [apiKey, setApiKey] = useState()
    const [data, setData] = useState()
    const address = useAddress();
    const [nestData, setNestData] = useState([])

    useEffect(() => {
        if(address){
            axios.post("http://localhost:8000/dbFind", {
                "public_key":address,
                "src":"dev_to"
            })
            .then(async (response) => {
                if(response.data != "null"){
                    setApiKey(response.data)
                    if(apiKey != undefined){
                        handleSubmit();
                    }
                }
            })
        }
    }, [address, apiKey])

    const handleSubmit = () => {
        setSubmit(true)
        if(address){
            axios.post("http://localhost:8000/db", {
                "public_key":address,
                "dev_to":apiKey
            })
            .then((response) => {
                console.log(response.data)
            })
        }
        const url = `http://localhost:8000/devto`
        axios.post(url, {
            "api":apiKey
        })
        .then((response) => {
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
        })
    }

    return(
        <div className={styles.container}>
            {
                !submit && 
                <div className={styles.inputContainer}>
                    <InputContainer 
                        width="60%"  
                        onChange={(event) => setUrl(event.target.value)} 
                        placeholder="Enter API Key"
                    />
                    <Button className={styles.button} onClick={handleSubmit} colorScheme="pink">Search</Button>
                </div>
            }

            {
                submit &&
                <ArticleContainer nestData={nestData} data={data} />
            }
        </div>    
    )
}

export default DevCommunity