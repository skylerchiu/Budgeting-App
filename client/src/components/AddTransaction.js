import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
 
export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const[date, setDate] = useState('');
    const[category, setCategory] = useState('')
    const [show, toggleShow] = React.useState(true);

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()*1000000),
            text,
            amount: +amount,
            date,
            category

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

                <label>
             Category <br></br>
            <select className = "select" value={category} onChange = {(e) => setCategory(e.target.value)} placeholder = "Select Category"  isSearchable required >
                <option value = ''>Please Select Category</option>
                <option className = "income-option" value= '6' >Salary (Income)</option>
                <option className = "income-option" value= '7' >Investments (Income)</option>
                <option className = "income-option" value= '8' >Other Income</option>
                <option className = "expense-option" value= '1' >Food (Expense)</option>
                <option className = "expense-option" value='2'>Clothing(Expense)</option>
                <option className = "expense-option" value = '3'>Housing (Expense) </option>
                <option className = "expense-option" value = '4'>Transportation(Expense)</option>
                <option className = "expense-option" value = '5'>Miscellaneous Expenses</option>
            </select>
            </label>
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
