const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    imageURL : {
        type : String,
        required : true
    },
    isPopular : {
        type : Boolean
    }
})

module.exports = mongoose.model('Activity', activitySchema)