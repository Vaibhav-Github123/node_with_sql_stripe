const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

router.get('/allproduct',productController.AllProducts)

router.post('/add',productController.AddProduct)

router.post('/addtocart', productController.AddToCart)

router.get('/cart_page', productController.AllCartProducts)

module.exports = router