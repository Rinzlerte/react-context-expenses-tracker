import React from 'react';
import Header from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionsList } from './components/TransactionsList'
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvaider } from './context/GlobalState'

import './styles/styles.css'


function App() {
  return (
    <GlobalProvaider>
     <Header />
     <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionsList />
      <AddTransaction />
     </div>
    </GlobalProvaider>
  );
}

export default App;
