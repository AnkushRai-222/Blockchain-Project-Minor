const express = require('express')
const router = express.Router()

const crytoController = require('../Controller/cryptoController')

router.get('/getCrypto',crytoController.getCrypto)

module.exports = router