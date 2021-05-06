import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Doughnut} from 'react-chartjs-2';

export const CategoryPieChartExpense = () => {
    const {transactions } = useContext(GlobalContext);
    const transaction = transactions.map (transaction => transaction)

  var foodArray = transaction.filter(function (el) {
    return el.category === 1;
  });
  const food_amounts = foodArray.map(transaction => transaction.amount);
  const food_total= food_amounts
    .filter (item => item < 0)
    .reduce((acc, item) =>(acc += item), 0)
    .toFixed(2);
  
    
  var clothesArray = transaction.filter(function (el) {
    return el.category === 2;
  });
  const clothes_amounts = clothesArray.map(transaction => transaction.amount);
  const clothes_total= clothes_amounts
    .filter (item => item < 0)
    .reduce((acc, item) =>(acc += item), 0)
    .toFixed(2);
  
  var rentArray = transaction.filter(function (el) {
    return el.category === 3;
  });
  const rent_amounts = rentArray.map(transaction => transaction.amount);
  const rent_total= rent_amounts
    .filter (item => item < 0)
    .reduce((acc, item) =>(acc += item), 0)
    .toFixed(2);

  var transportArray = transaction.filter(function (el) {
    return el.category === 4;
  });
  const transportation_amounts = transportArray.map(transaction => transaction.amount);
  const transportation_total= transportation_amounts
    .filter (item => item < 0)
    .reduce((acc, item) =>(acc += item), 0)
    .toFixed(2);

  var miscArray = transaction.filter(function (el) {
    return el.category === 5;
  });
  const misc_amounts = miscArray.map(transaction => transaction.amount);
  const misc_total= misc_amounts
    .filter (item => item < 0)
    .reduce((acc, item) =>(acc += item), 0)
    .toFixed(2);
      
  const state = {
  display: false,
    labels: ['Food','Clothing', 'Housing', 'Transportation', 'Miscellaneous'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [food_total, clothes_total, rent_total, transportation_total, misc_total]
      }
      
    ],
  }
    return (
      <div className = 'chart-wrapper'>
          <h7>Expenses</h7>
        <Doughnut
          data={state}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            legend:{
              display:false,
            },
            title:{
              display:false,
              text:{},
              fontSize:20
            },

          }}
        />
      </div>
    );
}

