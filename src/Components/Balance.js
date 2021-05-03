import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc+=item), 0).toFixed(2)
    const total_string = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    return (
        <div className = "balance">
            <h2>Balance</h2>
            <h3 id = "Balance">${total_string}</h3>
        </div>
    )
}
