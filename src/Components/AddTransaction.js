import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
 
export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const[date, setDate] = useState('');
    const [show, toggleShow] = React.useState(true);

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()*1000000),
            text,
            amount: +amount,
            date

        }

        addTransaction(newTransaction);
    }
    return (
        <div>
            {!show &&
            <form onSubmit = {onSubmit}>
                <h4>New Transaction</h4>
                
                <div className = "form-control">
                    <label htmlFor = "text">Transaction Description</label>
                    <input type = "text" value = {text} onChange={(e) => setText(e.target.value)} placeholder = "Enter text..." required />
                </div>

                <div className = "form-control">
                    <label htmlFor = "amount">Transaction Amount</label>
                    <input type = "number" value = {amount} onChange = {(e) => setAmount(e.target.value)} placeholder = "Enter amount" required/>
                </div>

                <div className = "form-control">
                    <label htmlFor = "date">Date</label>
                    <input type = "date" value = {date} onChange = {(e) => setDate(e.target.value)} required/>
                </div>
                <button className = "add-transaction-button">Add Transaction</button>

            </form>}
            <button className = "add-button"
                    onClick={() => toggleShow(!show)}
                    >
                    {show ? '+' : 'X'}
            </button>
        </div>
    )
}
