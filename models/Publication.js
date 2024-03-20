const mongoose = require('mongoose')

const PublicationSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Requis'],
        trim: true,
        maxlength: [900, 'Trop long t\'abuses'],
        minlength: [3, 'Trop court t\'abuses']
    }
})

module.exports = mongoose.model('Publication', PublicationSchema)