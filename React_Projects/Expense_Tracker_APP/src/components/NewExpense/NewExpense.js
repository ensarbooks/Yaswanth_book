import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense =(props) =>{
  const [isEditing, setIsEditing]=useState(false);

  const saveExpenseData=(data)=>{
    const expenseData={
      ...data,
      id:Math.random().toString()
    };
    props.onExpenseData(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () =>{
    setIsEditing(true);
  };
  const stopEditingHandler = ()=>{
    setIsEditing(false);
  };

  return(
    <div className="new-expense">
      {!isEditing && <div className="btn"><button onClick={startEditingHandler}>Add New Expense</button></div>}
      {isEditing && <ExpenseForm dataFromExpenseForm={saveExpenseData} onCancel={stopEditingHandler}/>}
    </div>
  );

}

export default NewExpense;