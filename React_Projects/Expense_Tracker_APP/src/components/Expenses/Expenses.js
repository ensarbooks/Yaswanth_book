import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const saveFilterYear = (year) => {
    setFilterYear(year);
  };

  const filterExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expensesContent= <p>No Expense Found</p>;

  if (filterExpense.length >0){
    expensesContent=filterExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpenseFilter setYear={filterYear} onChangeFilter={saveFilterYear} />
      <ExpensesChart expense={filterExpense}/>
      {expensesContent}
    </div>
  );
}

export default Expenses;
