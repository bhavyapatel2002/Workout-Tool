const asyncHandler = require('express-async-handler')
const Record = require('../models/recordModel')

// helper for validating input when creating records
const isPositiveInteger = (value) => {
    if (isNaN(value)) {
        return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x && x > 0;
} 

// @desc    Get records
// @route   GET /api/records
// @access  Private
const getRecords = asyncHandler(async (req, res) => {
    const records = await Record.find()

    res.status(200).json(records)
})

// @desc    Add a record
// @route   POST /api/records
// @access  Private
const addRecord = asyncHandler(async (req, res) => {
    if(!req.body.exercise) {
        res.status(400)
        throw new Error('Please enter an exercise')
    }
    if(!req.body.reps) {
        res.status(400)
        throw new Error('Please enter the number of repetitions')
    }
    if(!isPositiveInteger(req.body.reps)) {
        res.status(400)
        throw new Error('Please enter a positive integer for the number of repetitions')
    }

    const record = await Record.create({
        exercise: req.body.exercise,
        reps: req.body.reps
    })

    res.status(200).json(record)
})

// @desc    Update a record
// @route   PUT /api/records/:id
// @access  Private
const updateRecord = asyncHandler(async (req, res) => {
    const record = await Record.findById(req.params.id)

    if (!record) {
        res.status(400)
        throw new Error('Record not found')
    }

    const updatedRecord = await Record.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedRecord)
})

// @desc    Delete a record
// @route   DELETE /api/records/:id
// @access  Private
const deleteRecord = asyncHandler(async (req, res) => {
    const record = await Record.findById(req.params.id)

    if (!record) {
        res.status(400)
        throw new Error('Record not found')
    }

    await record.deleteOne()
    
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getRecords, 
    addRecord, 
    updateRecord, 
    deleteRecord
}