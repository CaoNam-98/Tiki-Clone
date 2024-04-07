const express = require("express")
const router = express.Router()
const userController = require('../controllers/UserController')
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware")

// Tạo => Method post
router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
// API update thông tin user
router.put('/update-user/:id', userController.updateUser)
// API delete thông tin user
// Trước khi đến deleteUser thì sẽ kiểm tra authMiddleWare trước
router.delete('/delete-user/:id', authMiddleWare, userController.deleteUser)
// API get all user
router.get('/getAll', authMiddleWare, userController.getAllUser)
// API get details. Ta thêm authUserMiddleWare để user hiện tại có thể lấy thông tin của nó và admin có thể lấy thông tin tất cả user
router.get('/get-details/:id', authUserMiddleWare, userController.getDetailsUser)
// Tạo ra API refresh token để cấp lại access_token khi token hết hạn
router.post('/refresh-token', userController.refreshToken)

module.exports = router