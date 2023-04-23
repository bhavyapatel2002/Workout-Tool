const asyncHandler = require('express-async-handler')

// @desc    Get records
// @route   GET /api/records
// @access  Private
const getRecords = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get records' })
})

// @desc    Add a record
// @route   POST /api/records
// @access  Private
const addRecord = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Add a record' })
})

// @desc    Update a record
// @route   PUT /api/records/:id
// @access  Private
const updateRecord = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update a record ${req.params.id}` })
})

// @desc    Delete a record
// @route   DELETE /api/records/:id
// @access  Private
const deleteRecord = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete a record ${req.params.id}` })
})

module.exports = {
    getRecords, 
    addRecord, 
    updateRecord, 
    deleteRecord
}