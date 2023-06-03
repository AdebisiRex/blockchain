const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const connectDB = async () => {
    const {MONGO_URI} = process.env
    // console.log(MONGO_URI)
    return mongoose.connect(MONGO_URI, {
        
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
}

module.exports = connectDB