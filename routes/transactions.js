const express = require ('express')
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transaction_controllers')

router
    .route('/') //routes to /api/v1/transactions
    .get(getTransactions) //get request
    .post(addTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);

module.exports = router;