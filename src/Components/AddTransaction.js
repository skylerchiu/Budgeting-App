import React, {useState, useContext} from 'react'

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const[date, setDate] = useState('');

    const onSubmit = e => {
    const newTransaction = {
        id: Math.floor(Math.Random()*1000),
        text,
        amount: +amount,
        date
    }

}
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <h3>New Transaction</h3>
                
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

            </form>

        </div>
    )
}
