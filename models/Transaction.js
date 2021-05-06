const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add text']
      },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
      },
    date: {
      type: Date,
      required: [true, 'Please add a date']
    },

    category:{
      type: Number,
      required: [true, 'Please select a category']
    },
    
    
    createdAt:{
    type: Date,
    default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);