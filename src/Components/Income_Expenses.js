import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Income_Expenses = () => {
    const {transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter (item => item > 0)
    .reduce((acc, item) =>(acc += item), 0)
    .toFixed(2);

    const expense = (amounts
    .filter (item => item < 0)
    .reduce((acc, item ) => (acc += item), 0)*-1)
    .toFixed(2)

    return (
        <>
            <div className = "income-expense-container">
                <div>
                    <h6>Income</h6>
                    <p className = "money income">${income}</p>
                </div>
                <div>
                    <h6>Expense</h6>
                    <p className = "money expense">${expense}</p>
                </div>
            </div>  
        </>
    )
}
