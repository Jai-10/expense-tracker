import React from 'react'
import './Transaction.css'

const Transaction = (props) => {
  return (
    <>
    <div className='transaction'>
        <div className="card" style={{borderLeft: `8px solid ${ props.expenseAmount>=0 ? "green" : "red"}`}}>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <h3> {props.expenseTitle} </h3>
                    <h5>
                      {props.expenseAmount>0 ? '$' : '-$'}
                      {props.expenseAmount>0 ? props.expenseAmount : (props.expenseAmount*-1)}
                    </h5>
                    <i className='fa-solid fa-xmark' onClick={props.deleteClick}></i>
                </blockquote>
            </div>
       </div>
    </div>
    </>
  )
}

export default Transaction;