import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({tranaction}) => {
    const {deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount <0 ? '-' : '+'

    return (
        <li className = {transaction.amount <0 ? 'minues' : 'plus'}>
            <span class = "text">{transaction.text}</span>
        </li>
    )
}