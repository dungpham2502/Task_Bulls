const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comp: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    creator_id: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;