const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/ticket-master-app', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('connected to DB')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = configureDB