import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const {deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount <0 ? '-' : '+'

    return (
        <li className = {transaction.amount <0 ? 'minues' : 'plus'}>
                  <span class = "text">{transaction.text}</span> <span class = "date"><br/> {transaction.date}</span> <span class = "amount">{sign}  ${transaction.amount}</span><button onClick = {() => deleteTransaction(transaction.id)} className = "delete-btn">x</button>
        </li>
    )
}