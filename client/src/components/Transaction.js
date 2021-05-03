import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const {deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount <0 ? '-' : '+'
    const amount_string = Math.abs(transaction.amount).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    return (
        <li className = {transaction.amount <0 ? 'minus' : 'plus'}>
                  <span class = "text">{transaction.text}</span> <span class = "date"><br/> {transaction.date}</span> <span class = "amount">{sign}  ${amount_string}</span><button onClick = {() => deleteTransaction(transaction.id)} className = "delete-btn">x</button>
        </li>
    )
}