const asyncHandler = require('express-async-handler')
const Exercise = require('../models/exerciseModel')

// create exercise if it does not exist
const createExercise = asyncHandler(async (req, res) => {
    return Exercise.create({
        user: req.user,
        name: req.exercise,
        count: 1
    })
})

// check if exercise already exists
const getExercise = asyncHandler(async (req, res) => {
    return Exercise.find({ user: req.user, name: req.exercise })
})

// increase count of exercise by 1
const incrementExerciseCount = asyncHandler(async (req, res) => {
    return Exercise.findOneAndUpdate({ user: req.user, name: req.exercise }, { count: req.prevCount + 1 })
})

module.exports = {
    createExercise, getExercise, incrementExerciseCount
}