const mongoose = require('mongoose')

const Schema = mongoose.Schema
const pgSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    city: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'City'
    },
    user: {
        type: Schema.Types.ObjectId
    }
})

const Pg = mongoose.model('Pg', pgSchema)

module.exports = Pg
