const mongoose = require("mongoose");

const Schema = mongoose.Schema; // const { Schema } = mongoose;

const feedbackSchema = new Schema({
    rating: {
        type: Number,
        require: true
    },
    text: {
        type: String,
        require: true
    },
}, {
    versionKey: false // You should be aware of the outcome after set to false
});


module.exports = mongoose.model('Feedback', feedbackSchema);