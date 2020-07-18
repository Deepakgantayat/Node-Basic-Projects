const mongoose = require('mongoose')

const Schema = mongoose.Schema
const citySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId
    }
})

const City = mongoose.model('City',citySchema)

module.exports = City
