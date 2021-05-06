const Transaction = require('../models/Transaction')

// Gets all transactions
// Route:  GET /api/v1/transactions
exports.getTransactions = async (req, res,next) =>{ //A mongoose method returns a promise
    try{
        const transactions = await Transaction.find();

        return res.status(200).json({
            success:true,
            count: transactions.length,
            data: transactions
        });
    } catch(err){
        return res.status(500).json({ //500 is a standard server error
            success: false,
            error: 'Server Error'
        });
        
    }
}


// Adds transactions
// Route:  POST /api/v1/transactions
exports.addTransaction = async (req, res, next) =>{


    try {
    const { text, amount } = req.body; //only works with values in themodel

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({ //HTTP 201: successful request
        success:true,
        data:transaction
    }); 

    } catch (err) {
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);
            
            return res.status(400).json({//HTTP 400: client error
                success:false,
                error: messages
            }) ;
        }
        else{
            return res.status(500).json({ 
                success: false,
                error: 'Server Error'
            });
        }

        
    }
   
}

// Delete transactions
// Route:  DELETE /api/v1/transactions/:id
exports.deleteTransaction  = async (req, res, next) =>{
    try {
    const transaction = await Transaction.findById(req.params.id);

        if(!transaction){
            return res.status(404).json({ //HTTP 404 errod: not found
                success:false,
                error: 'No transaction found'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data:{}
        })

    } catch (err) {
        return res.status(500).json({ //500 is a standard server error
            success: false,
            error: 'Server Error'
        });
    }
}