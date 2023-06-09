const asyncHandler = require('express-async-handler')
const Record = require('../models/recordModel')
const Exercise = require('../models/exerciseModel')
const User = require('../models/userModel')
const exerciseController = require('../controllers/exerciseController')

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
    const records = await Record.find({ user: req.user.id })

    res.status(200).json(records)
})

// @desc    Add a record
// @route   POST /api/records
// @access  Private
const addRecord = asyncHandler(async (req, res) => {
    if(!req.body.date) {
        res.status(400)
        throw new Error('Please enter a valid date')
    }
    if(!req.body.exercise) {
        res.status(400)
        throw new Error('Please enter an exercise')
    }
    if(!req.body.weight) {
        res.status(400)
        throw new Error('Please enter the weight at which the exercise was performed')
    }
    if(!isPositiveInteger(req.body.weight)) {
        res.status(400)
        throw new Error('Please enter a positive integer for the weight')
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
        date: req.body.date,
        exercise: req.body.exercise,
        weight: req.body.weight,
        reps: req.body.reps,
        user: req.user.id
    })

    // check if exercise already exists for user
    const exercise = await exerciseController.getExercise({ user: req.user.id, exercise: req.body.exercise })

    // if it does, increase its count
    if (exercise.length > 0) {
        exerciseController.incrementExerciseCount({ user: req.user.id, exercise: req.body.exercise, prevCount: exercise[0].count })
        console.log('incremented exercise count')
    }
    // else add it to user's library of exercises with count of 1
    else {
        exerciseController.createExercise({ user: req.user.id, exercise: req.body.exercise, count: 1 })
        console.log('created new exercise')
    }

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

    // make sure user exists
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure authenticated user matches author of record
    if (record.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized to update record')
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

    // make sure user exists
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure authenticated user matches author of record
    if (record.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized to update record')
    }

    // decrement count of exercise
    await exerciseController.decrementExerciseCount({ user: req.user.id, exercise: record.exercise })

    // delete record
    await record.deleteOne()
    
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getRecords, 
    addRecord, 
    updateRecord, 
    deleteRecord
}