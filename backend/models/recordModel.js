const mongoose = require('mongoose')

const recordSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        exercise: {
            type: String,
            required: [true, 'Please add an exercise name']
        },
        weight: {
            type: String,
            required: [true, 'Please enter a weight']
        },
        reps: {
            type: Number,
            required: [true, 'Please enter the number of repetitions']
        }
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Record', recordSchema)