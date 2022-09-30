import React from 'react'
import './IncomeExpense.css'

const IncomeExpense = (props) => {

    let income=0, expense=0;
    props.transactions.forEach( transaction => {
        parseInt(transaction.transactionAmount)>0 ?
        parseInt(income += transaction.transactionAmount) : parseInt(expense += transaction.transactionAmount)
    })


  return (
    <div className='income-expense'>
        <div className="card income" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title"> +{parseInt(income)} </h5>
            </div>
        </div>
        <div className="card expense" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title"> {parseInt(expense)} </h5>
            </div>
        </div>
    </div>
  )
}

export default IncomeExpense