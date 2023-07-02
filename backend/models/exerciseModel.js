const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        name: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: true
        }
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Exercise', exerciseSchema)