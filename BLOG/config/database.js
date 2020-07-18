const mongoose = require('mongoose')
mongoose.Promise = global.Promise//doubt


    // DB Configuration
    mongoose.connect('mongodb://localhost:27017/aug-notes-app', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(function() {
            console.log('connected to db')
        })
        .catch(function(){
            console.log('error in connecting db')
        })


module.exports = {
    mongoose
}