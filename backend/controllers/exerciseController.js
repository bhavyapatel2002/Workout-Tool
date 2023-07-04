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

// get all exercises belonging to a particular user
const getExercises = asyncHandler(async (req, res) => {
    return Exercise.find({ user: req.user })
})

// increase count of exercise by 1
const incrementExerciseCount = asyncHandler(async (req, res) => {
    return Exercise.findOneAndUpdate({ user: req.user, name: req.exercise }, { count: req.prevCount + 1 })
})

// decrements count of exercise by 1, deletes exercise if count reaches 0
const decrementExerciseCount = asyncHandler(async (req, res) => {
    const exercise = await Exercise.find({ user: req.user, name: req.exercise })
    const count = exercise[0].count

    if (count <= 1) {
        console.log('got here')
        return Exercise.deleteOne({ user: req.user, name: req.exercise })
    }
    else {
        console.log('got here2')
        return Exercise.findOneAndUpdate({ user: req.user, name: req.exercise }, { count: count - 1 })

    }
})

module.exports = {
    createExercise, getExercise, incrementExerciseCount, getExercises, decrementExerciseCount
}