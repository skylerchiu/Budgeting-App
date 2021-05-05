// Gets all transactions
// Route:  GET /api/v1/transactions
exports.getTransactions = (req, res,next) =>{
    res.send('GET transactions')
}


// Adds transactions
// Route:  POST /api/v1/transactions
exports.addTransaction = (req, res, next) =>{
    res.send('POST transaction')
}

// Delete transactions
// Route:  DELETE /api/v1/transactions/:id
exports.deleteTransaction = (req, res, next) =>{
    res.send('DELETE transactions')
}