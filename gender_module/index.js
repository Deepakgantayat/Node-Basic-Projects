const express = require('express');
const axios =   require('axios');
const app = express();
const port = 3005

app.get('/', (req, res) => {
    res.send('Welcome to the sites')
})

app.get('/users/gender',(req,res) => {
    let name = req.query.name
    axios.get(`https://gender-api.com/get?name=${name}&key=pRPLCejozFwCHFbVCR`)
    .then((response) => {
        console.log(response)
         const formdata= {
             name: response.data.name,
             gender: response.data.gender
         }
         res.send(formdata)
        
    })
    .catch((err) => {
        console.log(err)
    }) 
})





app.listen(port, () => {
    console.log('listening on port', port)
})