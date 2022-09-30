import React from 'react'
import './Balance.css'


// higher order array method 'reduce()'




const Balance = (props) => {

  let totalBalance = 0;
  props.transactions.forEach(transaction => {
    totalBalance = parseInt(totalBalance) + parseInt(transaction.transactionAmount)
  });


  return (
    <div className="balance">
        <p>Balance : ${parseInt(totalBalance)}</p>
    </div>
  )
}


export default Balance