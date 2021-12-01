const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    test: {

    },
    question: {
        type: String,
        required: true
    },
    type: {
        type: Array
    },
    category: {
        type: String
    },
    author: {
        type: String
    },
    score: {
        type: Number
    },
    platform: {
        type: String
    },
    answer: {
        type: Object
    },
    choice: {

    },
    timeLimit: {
        type: Number
    },
    expiresAt: {
        type: String
    },
    required: {
        type: Boolean
    },
    response: {
        type: Object
    }
})


const Question = mongoose.model('Question', questionSchema)

module.exports = Question