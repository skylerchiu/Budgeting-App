import React, {useContext, useState} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const ProgressBar = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce ((acc, item) => (acc += item), 0).toFixed(2);
    const [show, toggleShow] = React.useState(true);

    var [goal, setGoal] = useState(1000);
    var completed = (((+total)/goal)*100).toFixed(1);
    var completed_bar = completed
    if (completed_bar > 100){
        completed_bar=100;
    }

    if(completed_bar <0){
        completed_bar=0;
    }
    const onSubmit = e =>{
        e.preventDefault();
        const newGoal = {
            goal
        }
    }

    
    const goal_string = goal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    const containerStyles = {
        height: 25,
        width: '100%',
        backgroundColor: "#e0e0de",
        border: '1px solid black',
        borderRadius: 50,  
      }

    const progressBarFill = {
        height: '100%',
        width: `${completed_bar}%`,
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

    const label = {
        padding: 5,
        color: 'black',
        fontWeight: 'bold',
          
    }
    return(
        <div style = {componentStyles}>
                <h5>Target Balance = ${goal_string}</h5>
            <div style = {containerStyles}>
                <div style = {progressBarFill}>
                    <span style = {label}>{completed}%</span>
                </div>
            </div>

        <button className = "edit-goal"
            onClick={() => toggleShow(!show)}>
           {show ? 'Edit Goal' : 'Confirm'}
        </button>     
        {!show &&           
        <form onSubmit = {onSubmit}>
            <div className = "form-control">
                <label htmlFor = "text">Enter Target Balance</label>
                <input type = "number" value = {goal} min = '1' onChange={(e) => setGoal(e.target.value)} placeholder = "Enter Goal" required></input>
            </div>

        </form>}
        
        </div>
    )



}