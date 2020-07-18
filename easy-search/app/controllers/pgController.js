const Pg = require('../modules/pg')

module.exports.list = (req, res) => {
    const { user } = req
    Pg.find({user: user._id}).select('createdAt name address city').populate('city', ['name'])
        .then((Pg) => {
            res.json(Pg)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.count = (req,res) => {
    const { user } = req
    Pg.countDocuments({user: user._id})
        .then((count) => {
            res.json({count})
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    const { user } = req
    Pg.findOne({_id: id, user: user._id}).select('createdAt name address city').populate('city', ['name'])
        .then((Pg) => {
            if(Pg){
                res.json(Pg)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req,res) => {
    const { body, user } = req
    body.user = user._id
    const pg = new Pg(body)
    pg.save()
        .then((pg) => {
            res.json(pg)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const { body, user } = req
    Pg.findOneAndUpdate({_id: id, user: user._id}, body, {new: true, runValidators: true}).select('createdAt name address city').populate('city', ['name'])
        .then((pg) => {
            res.json(pg)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req,res) => {
    const id = req.params.id
    const { user } = req
    Pg.findOneAndDelete({_id: id, user: user._id})
        .then((pg) => {
            if(pg){
                res.json(pg)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}