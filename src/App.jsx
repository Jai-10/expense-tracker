import { useState } from 'react';
import './App.css';
import Balance from './Balance/Balance';
import Header from './Header/Header';
import IncomeExpense from './IncomeExpense/IncomeExpense';
import NewTransaction from './NewTransaction/NewTransaction';
import TransactionList from './TransactionList/TransactionList';


const App = () => {

  const [transactions, setTransactions] = useState([
    {id: 101, transactionTitle: 'Salary', transactionAmount: 1000},
    {id: 102, transactionTitle: 'Trip', transactionAmount: -270},
    {id: 103, transactionTitle: 'Rent', transactionAmount: -180},
    {id: 104, transactionTitle: 'Stocks', transactionAmount: 290},
    {id: 105, transactionTitle: 'Groceries', transactionAmount: -90},
    {id: 106, transactionTitle: 'Movies', transactionAmount: -250},
    {id: 107, transactionTitle: 'Jackpot', transactionAmount: +50},
    {id: 108, transactionTitle: 'Games', transactionAmount: -150},
    {id: 109, transactionTitle: 'Gift Card', transactionAmount: +130},
    {id: 110, transactionTitle: 'Freelance', transactionAmount: +90}
  ]);


  // adding new transactions into TransactionList
  const addTransaction = (transaction) => {
    const transactionCopy = [...transactions]
    transactionCopy.push(transaction)
    setTransactions(transactionCopy)

    // scroll to bottom after adding a new transaction
    // window.scrollTo(0, document.body.scrollHeight);
  }
  
  
  // deleting transactions from TransactionList
  const deleteTransaction = (transactionId) => {
    const transactionCopy = [ ...transactions ]
    // transactionCopy.splice(transactionId, 1)       // on the basis of index
    // setTransactions(transactionCopy)
    const filteredCopy = transactionCopy.filter( transaction => transactionId !== transaction.id )    // on the basis of ID
    setTransactions(filteredCopy)
  }



  return (
    <div className="App">

      <Header title="Expense Tracker" />

      <IncomeExpense transactions={transactions}/>

      <TransactionList transactions={transactions} deleteClick={deleteTransaction} />

      <NewTransaction transactions={transactions} addClick={addTransaction}/>

      <Balance transactions={transactions} />
    </div>
  );
}

export default App;
