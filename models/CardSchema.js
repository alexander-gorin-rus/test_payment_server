const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    CardNumber:{
        type: Number,
        required: true,
    },
    ExpDate : {
        type: Date,
        required: true
    },
    CVV:{
        type: Number,
        required: true,
         
    },
    amount:{
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("Card", CardSchema)