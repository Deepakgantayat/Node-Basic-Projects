const express = require('express')
const app = express()
const port = 3033
const configureDb = require('./config/database')
configureDb()


app.listen(port, ()=>{
    console.log('listning on port', port)
})