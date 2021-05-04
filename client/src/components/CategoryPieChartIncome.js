import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Doughnut, defaults} from 'react-chartjs-2';

//defaults.plugins.legend = false;

export const CategoryPieChartIncome = () => {
    const {transactions } = useContext(GlobalContext);
    const category = transactions.map(transaction => transaction.category);
    const amounts = transactions.map(transaction => transaction.amount);
    const transaction = transactions.map (transaction => transaction)



  var salaryArray = transaction.filter(function (el) {
    return el.category == 6;
  });
  const salary_amounts = salaryArray.map(transaction => transaction.amount);
  const salary_total= salary_amounts
    .filter (item => item > 0)
    .reduce((acc, item) =>(acc += item), 0)
    .toFixed(2);
  
    
  var investArray = transaction.filter(function (el) {
    return el.category == 7;
  });
  const invest_amounts = investArray.map(transaction => transaction.amount);
  const invest_total= invest_amounts
    .filter (item => item > 0)
    .reduce((acc, item) =>(acc += item), 0)
    .toFixed(2);


var otherArray = transaction.filter(function (el) {
  return el.category == 8;
});
const other_amounts = otherArray.map(transaction => transaction.amount);
const other_total= other_amounts
  .filter (item => item > 0)
  .reduce((acc, item) =>(acc += item), 0)
  .toFixed(2);
    
const state = {
display: false,
  labels: ['Salary','Investments', 'Other Income'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#d4d229',
        '#1f9e69',
        '#162d91'

      ],
      hoverBackgroundColor: [
      '#747214',
      '#0e4d32',
      '#0b174d'

      ],
      data: [salary_total, invest_total,other_total]
    }
    
  ],
}
    return (
      <div className = 'chart-wrapper'>
          <h7>Income</h7>
        <Doughnut
          data={state}
          options={{
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

