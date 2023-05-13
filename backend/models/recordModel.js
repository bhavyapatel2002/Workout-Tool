const mongoose = require('mongoose')

const recordSchema = mongoose.Schema(
    {
        exercise: {
            type: String,
            required: [true, 'Please add an exercise name']
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