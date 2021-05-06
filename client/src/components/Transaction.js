import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const {deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount <0 ? '-' : '+'
    const amount_string = Math.abs(transaction.amount).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    const dateTime = transaction.date;
    const [date,time] = dateTime.split('T')
    
    var category = '';
    switch(transaction.category) {
        case 1:
          category = 'Food'
          break;
        case 2:
          category = 'Clothing'
          break;
        case 3:
          category = 'Housing'
          break;
        case 4:
          category = 'Transportation'
          break;
        case 5:
          category = 'Miscellaneous'
          break;
        case 6:
          category = 'Salary'
          break;
        case 7:
          category = 'Investments'
          break;
        case 8:
          category = 'Other Income'
          break;
       
      }


    return (
        <li className = {transaction.amount <0 ? 'minus' : 'plus'}>
                  <span class = "text">{transaction.text}</span> <span class = "date"><br/> {date}</span> <span className = "category-text">{category}</span> 
                  <span class = "amount">{sign}  ${amount_string}</span><button onClick = {() => deleteTransaction(transaction._id)} className = "delete-btn">x</button>
        </li>
    )
}
