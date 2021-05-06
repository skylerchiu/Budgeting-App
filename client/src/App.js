import React from 'react'
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {ProgressBar} from './components/Progress_Bar'
import {IncomeExpenses} from './components/IncomeExpenses'
import {AddTransaction} from './components/AddTransaction'
import {TransactionList} from './components/TransactionList'
import {GlobalProvider} from './context/GlobalState'
import {CategoryPieChartExpense} from './components/CategoryPieChartExpenses'
import {CategoryPieChartIncome} from './components/CategoryPieChartIncome'

function App() {
  return (
    <GlobalProvider>
    <div>
    <div className = "container">
     <Header/>
     <Balance/>
     <ProgressBar/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
  
     </div>
     <div className = "chart-container">
     <CategoryPieChartExpense/>
    <CategoryPieChartIncome/>
     </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
