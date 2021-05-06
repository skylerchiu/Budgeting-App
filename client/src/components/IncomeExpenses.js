import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const IncomeExpenses = () => {
    const {transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter (item => item > 0)
    .reduce((acc, item) =>(acc += item), 0)
    .toFixed(2);
    
    const income_string = income.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    const expense = (amounts
    .filter (item => item < 0)
    .reduce((acc, item ) => (acc += item), 0)*-1)
    .toFixed(2)  

    const expense_string = expense.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    return (
        <>
            <div className = "income-expense-container">
                <div>
                    <h6>Income</h6>
                    <p className = "money income">${income_string}</p>
                </div>
                <div>
                    <h6>Expense</h6>
                    <p className = "money expense">${expense_string}</p>
                </div>
            </div>  
        </>
    )
}
