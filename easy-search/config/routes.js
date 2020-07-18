const express = require('express')
const router = express.Router()
const {upload} = require('../app/middlewares/multer')

const pgController = require('../app/controllers/pgController')
const cityController = require('../app/controllers/cityController')
const usersController = require('../app/controllers/userController')
const { authenticateUser } = require('../app/middlewares/authentication')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account',authenticateUser, usersController.account)
router.delete('/users/logout',authenticateUser, usersController.logout)

router.get('/cities', authenticateUser, cityController.list)
router.get('/cities/:id', authenticateUser, cityController.show)
router.post('/cities',authenticateUser, cityController.create)
router.put('/cities/:id',authenticateUser, cityController.update)
router.delete('/cities/:id',authenticateUser, cityController.destroy)

router.get('/pgs', authenticateUser, pgController.list)
router.get('/pgs/:id', authenticateUser, pgController.show)
router.get('/pgs/count', authenticateUser, pgController.count)
router.post('/pgs',authenticateUser, upload.single('pg'), pgController.create)
router.put('/pgs/:id',authenticateUser, upload.single('pg'), pgController.update)
router.delete('/pgs/:id',authenticateUser, pgController.destroy)



module.exports = router