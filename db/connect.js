const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.connect(url)
        .then(() => console.log('app connectée a mongoDB atlas'))
        .catch(error => console.log(error))
}

module.exports = connectDB