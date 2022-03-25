const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    CardHolderName: {
        type: String,
        required: true
    },
    CardNumber:{
        type: Number,
        required: true,
    },
    ExpDate : {
        type: String,
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