const express = require("express")
const router = express.Router()
const userController = require('../controllers/UserController')

// Tạo => Method post
router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
// API update thông tin user
router.put('/update-user/:id', userController.updateUser)

module.exports = router