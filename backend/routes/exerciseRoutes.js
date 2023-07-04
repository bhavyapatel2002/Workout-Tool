const express = require('express')
const router = express.Router()
const { getExercises } = require('../controllers/exerciseController')

// use appropriate functions from controller file
router.route('/').get(getExercises)

module.exports = router