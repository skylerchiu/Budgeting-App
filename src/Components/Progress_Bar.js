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
    const containerStyles = {
        height: 25,
        width: '100%',
        backgroundColor: "#e0e0de",
        border: '1px solid black',
        borderRadius: 50,  
      }

    const progressBarFill = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: 'orange',
        transition: 'width 1s ease-in-out',
        borderRadius: 'inherit',
        textAlign: 'right',
    }
    const componentStyles = {
        backgroundColor: 'white',
        padding: 10,
        //border: '3px solid black',
        borderRadius: 30,
        marginTop: 20,
        boxShadow:  '0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  
    }
    return(
        <div style = {componentStyles}>
                <h5>Target Balance = ${goal}</h5>
            <div style = {containerStyles}>
                <div style = {progressBarFill}>
                    <span class = "goal-precent">%{completed}</span>
                </div>
            </div>
            
        <form onSubmit = {onSubmit}>
            <div className = "form-control">
                <label htmlFor = "text">Goal</label>
                <input type = "number" value = {goal} min = '1' onChange={(e) => setGoal(e.target.value)} placeholder = "Enter Goal" required></input>
            </div>

        </form>
        
        </div>
    )



}