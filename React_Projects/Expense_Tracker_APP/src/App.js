import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyData=[
  {id:'e1',title:'Toilet paper', amount:250.45 , date:new Date(2021, 2, 26)},
  {id:'e2',title:'Bread', amount:250.45 , date:new Date(2020, 4, 8)},
  {id:'e3',title:'Sugar', amount:250.45 , date:new Date(2022,7, 18)},
  {id:'e4',title:'Beans', amount:250.45 , date:new Date(2023, 8, 68)},
];

function App() {
  const [expense,setExpense]=useState(dummyData);
  const HandleExpensedata=(data)=>{
    setExpense((prevExpense)=>{
      return [data,...prevExpense];
    });
   
  };


  return (
    <div>
      <NewExpense onExpenseData={HandleExpensedata}/>
      <Expenses item={expense}/>
    </div>
  );
}

export default App;
