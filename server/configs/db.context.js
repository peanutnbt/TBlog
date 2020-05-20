const mongoose = require('mongoose');
const dbConfig = require('./db.config');

const connectMongoDB = async()=>{
    await mongoose.connect(dbConfig.mongoURI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (err)=>{
        if (err) {
            console.log(err);
        } else {
            console.log("mongodb success!")
        }
    })
}

module.exports = connectMongoDB;
