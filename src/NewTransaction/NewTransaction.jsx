import React from 'react'
import { useState } from 'react'
import './NewTransaction.css'

const NewTransaction = (props) => {

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState()


  return (
    <div className='new-transaction'>
      <h3 style={{fontWeight: "bold", marginTop: "50px"}}>Add a new expense or an income</h3>
      <form>
        <input type="text" placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="number" placeholder='--'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </form>
      <button className="btn btn-success"
        onClick={ () => props.addClick({
          id: (props.transactions[props.transactions.length - 1].id===null) ? (101) : (props.transactions[props.transactions.length - 1].id + 1),
          transactionTitle: title,
          transactionAmount: amount
        }) }
      >Add</button>
    </div>
  )
}

export default NewTransaction;