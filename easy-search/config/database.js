const mongoose = require('mongoose')

const configureDB =  () => {
    mongoose.connect('mongodb://localhost:27017/aug-notes-app', { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Connected to database')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = configureDB
