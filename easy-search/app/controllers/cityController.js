const City = require('../modules/city')
// const Note = require('../modules/note')

module.exports.list = (req,res) => {
    const { user } = req
    
    City.find({user: user._id})
        .then((city) => {
            res.json(city)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    const { user } = req
    Promise.all([City.findOne({_id: id, user: user._id})])//Note.find({user: user._id, category: id}).select('title body createdAt')
        .then((values) => {
            const [city] = values
            const cityObj = city.toObject()
            // categoryObj.notes = notes
            res.send(cityObj)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.create = (req,res) => {
    const { body, user } = req
    body.user = user._id
    const city = new City(body)
    city.save()
        .then((city) => {
            res.json(city)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const { body, user } = req
    City.findOneAndUpdate({_id: id, user: user._id}, body, {new: true, runValidators: true})
        .then((city) => {
            if(city){
                res.json(city)
            } else {
                res,json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req,res) => {
    const id = req.params.id
    const { user } = req
    City.findOneAndDelete({_id: id, user: user._id})
        .then((city) => {
            if(city){
                res.json(city)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}