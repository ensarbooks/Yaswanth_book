import React,{useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem (props){
  return (
    <div className="container">
      <ExpenseDate date={props.date} />
      <h2 className='name'>{props.title}</h2>
      <div className='amount'>${props.amount}</div>
    </div>

  );
}
export default ExpenseItem;