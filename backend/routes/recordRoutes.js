const express = require('express')
const router = express.Router()
const { getRecords, addRecord, updateRecord, deleteRecord } = require('../controllers/recordController')
const { protect } = require('../middleware/authMiddleware')

// use appropriate functions from controller file
router.route('/').get(protect, getRecords).post(protect, addRecord)
router.route('/:id').put(protect, updateRecord).delete(protect, deleteRecord)

module.exports = router