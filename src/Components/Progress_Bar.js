import React, {useContext, useState} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const ProgressBar = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce ((acc, item) => (acc += item), 0).toFixed(2);


    var [goal, setGoal] = useState(1000);
    var completed = ((+total)/goal)*100;

    const onSubmit = e =>{
        e.preventDefault();
        const newGoal = {
            goal
        }
    }
    

    const progressBarFill = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: 'orange',
        transition: 'width 1s ease-in-out',
        borderRadius: 'inherit',
        textAlign: 'right',
    }

    return(
        <div class = "progress-bar-container">
            <div class = "progress-bar-back">
                <div style = {progressBarFill}>
                    <span class = "goal-precent">${completed}</span>
                </div>
            </div>
            
        <form onSubmit = {onSubmit}>
            <div className = "form-control">
                <label htmlFor = "amount">Goal</label>
                <input type = "number" value = {goal} min = '1' onChange={(e) => setGoal(e.target.value)} placeholder = "Enter Goal" required></input>
            </div>

        </form>
        
        </div>
    )



}