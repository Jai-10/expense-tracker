import React from 'react'
import Transaction from '../Transaction/Transaction'

const TransactionList = (props) => {
  return (
    <div>
        <br /> <h3 style={{marginTop: "30px", textAlign: "center"}}>Your statement is as follows -</h3> <br />
        {
          props.transactions.map(transaction => {
            return < Transaction   // iterating through the state
            key={transaction.id}
            expenseTitle={transaction.transactionTitle}
            expenseAmount={transaction.transactionAmount}
            deleteClick={() => props.deleteClick(transaction.id) }
            />
          })
        }
    </div>
  )
}

export default TransactionList