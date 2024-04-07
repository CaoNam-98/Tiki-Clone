const express = require("express")
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const { authMiddleWare } = require("../middleware/authMiddleware")

// API create product
router.post('/create', ProductController.createProduct)
// API update product
router.put('/update/:id', authMiddleWare, ProductController.updateProduct)
// API get details product
router.get('/get-details/:id', ProductController.getDetailsProduct)
// API delete product
router.delete('/delete/:id', ProductController.deleteProduct)
// API get all product
router.get('/get-all', ProductController.getAllproduct)


module.exports = router