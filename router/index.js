const express = require('express')
const router = express.Router()

const productRoute = require('./productRouter')

router.use('/',productRoute)


module.exports = router