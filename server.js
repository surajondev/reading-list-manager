const express = require("express");
const axios = require("axios");
var cors = require('cors')
require('dotenv').config();
const mysql = require('mysql2');
const { parseString } = require('xml2js')

const app = express()

app.use(cors()) // Use this after the variable declaration

app.use(express.json({extended:false}))

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.post('/dbFind', async(req, res) => {
    const connection = mysql.createConnection(process.env.DATABASE_URL);
    connection.query('SELECT * FROM platform WHERE public_key=?;', [req.body.public_key], 
        function(err, rows, fields){
            if(rows.length == 0){
                res.send("null")
            }            
            else{
                if(req.body.src == "daily_dev"){
                    rows[0].daily_dev ? res.send(rows[0].daily_dev)  : res.send("null")
                }
                else{
                    rows[0].dev_to ? res.send(rows[0].dev_to)  : res.send("null")
                }
            } 
    })
})

app.post('/db', async (req, res) => {
    const connection = mysql.createConnection(process.env.DATABASE_URL);
    connection.query('SELECT * FROM platform WHERE public_key=?;', [req.body.public_key], 
        function(err, rows, fields){
            if(rows.length == 0){
                connection.query('INSERT INTO platform(id,public_key, dev_to, daily_dev) VALUES(?,?,?,?)', 
                [req.body.id, req.body.public_key, req.body.dev_to, req.body.daily_dev],  
                function (err, rows, fields) {
                    if (err) throw err
                    res.send("ADDED")
                })
            }
            else{
                if(req.body.dev_to){
                    connection.query('UPDATE platform SET dev_to=? WHERE public_key=?', 
                    [req.body.dev_to, req.body.public_key],  
                    function (err, rows, fields) {
                        if (err) throw err
                    
                        res.send("DEVTO ADDED")
                    })
                }
                else{
                    connection.query('UPDATE platform SET daily_dev=? WHERE public_key=?', 
                    [req.body.daily_dev, req.body.public_key],  
                    function (err, rows, fields) {
                        if (err) throw err
                    
                        res.send("DAILYDEV ADDED")
                    })
                }
            }
        }
    )
})

app.post('/devto', (req, res) =>{
        let allBookmark = []
        // let i = 1;
        const addBookmark = (i) => {
            const url = `https://dev.to/api/readinglist?per_page=100&page=${i}`
            axios.get(url, {
                headers:{
                    "api-key":req.body.api
                }
            })
            .then((response) => {
                allBookmark = allBookmark.concat(response.data)
                if(response.data.length == 100){
                    addBookmark(i+1)
                }
                else{
                   res.send(allBookmark)
                }
            }).catch(err => {
                res.send({error:"Incorrect dev.to shearable bookmark"})
            })
        }
        addBookmark(1);
        // res.send(allBookmark);
})

app.post('/dailydev', (req, res) =>{
    const url = req.body.url
    axios.get(url)
    .then((response) => {
            const data = []
            parseString(response.data, (err, result) =>{
                result.rss.channel[0].item.map((element) => {
                    let tags = ""
                    element.category.map((tag) => {
                        tags = tags + tag + ","
                    })
                    const editedTags = tags.slice(0, -1)
                    const dataObj = {
                        "article":{
                            "title":element.title[0],
                            "url":element.link[0],
                            "tags":editedTags
                        }
                    }
                    data.push(dataObj)
                })
            })
            res.send(data)
    }).catch(err => {
        res.send({error:"Incorrect daily.dev shearable bookmark"})
    })
})

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=> console.log(`Server started at ${PORT}`))