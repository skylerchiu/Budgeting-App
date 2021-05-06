import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState'; 
import {Transaction} from './Transaction';

export const TransactionList = () => {

    const { transactions, getTransactions } = useContext(GlobalContext);
    /*const sortedTransactions = transactions.sort((a, b) => b.date - a.date)*/

    useEffect(() => {
        getTransactions();
    }, [])

    return (
        <>
            <div className = "history">
                <h4>Transaction History</h4>
                <ul className = "list"> 
              {transactions.map(transaction => ( <Transaction key = {transaction.id} transaction = {transaction}/> ))}
              {/*sortedTransactions.map(transaction => ( <Transaction key = {transaction.date} transaction = {transaction}/> ))*/}
                </ul>
            </div>
        </>
    )
}
